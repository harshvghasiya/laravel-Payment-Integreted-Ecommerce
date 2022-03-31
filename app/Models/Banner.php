<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Yajra\Datatables\Datatables;
use Crypt;

class Banner extends Model
{
    protected $table="banners"; // To define dabase table
    const STATUS_ACTIVE ='1';
    const STATUS_INACTIVE ='0';

    /**
     * [getBannerListData This function is used to get all resource of banner]
     * @param  [type] $request [description]
     * @return [type]          [description]
     * @author Chirag G.
     */
    public function getBannerListData($request){

        $sql=self::select("*");
        return Datatables::of($sql)
              ->addColumn('action',function($data){

                  $string ='<a title="'.trans('lang_data.edit_banner').'" href="'.route('admin.banners.edit',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>';

                  if (env('ACCESS_TO_DELETE') == true) {
                    
                    $string .='<a href="javascript:void(0)" title="'.trans('lang_data.delete_banner_label').'" data-route="'.route('admin.banners.destroy',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-danger delete_record"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                  }
                  
                  return $string;
              })
              ->editColumn('image',function($data){
                  return '<a class="demo" href="'.$data->getBannerImageUrl('thumbnail_').'" data-lightbox="example-1" data-title="'.$data->name.'" ><img style="height:50px;width:100px" src="'.$data->getBannerImageUrl('thumbnail_').'"/></a>';
              })
              ->editColumn('id',function($data){
                  return '<input type="checkbox" name="checkbox[]" class="select_checkbox_value" value="'.Crypt::encrypt($data->id).'" />';
              })
              ->editColumn('status',function($data){
                  return getStatusIcon($data);
              })
              ->filter(function ($query) use ($request) {
                
                  if (isset($request['status']) && $request['status'] != "") {
                      $query->where('status', $request['status']);
                  }
                  if (isset($request['name']) && $request['name'] != "") {
                      $query->where('name', 'like', '%' . $request->name . '%');
                  }
              })
              ->rawColumns(['id','action','status','image'])
              ->make(true);
    }

    /**
     * [saveBanner This fucntion is used to save and update resource of banner]
     * @param  [type] $r  [description]
     * @param  [type] $id [description]
     * @return [type]     [description]
     * @author Chirag G.
     */
    public function saveBanner($r,$id=NULL){
        
        $errors="";
        $input = $r->all();

        if ($id !== NULL) {
            $id=Crypt::decrypt($id);
            $obj = self::find($id);
        }else{
            $obj = new self;
        }

        if (isset($input['delete_image']) && $input['delete_image'] == 1) {
            
            if ($obj->image !=null) {

                if(file_exists(BANNER_IMAGE_UPLOAD_PATH().$obj->image))
                {
                    \File::delete(BANNER_IMAGE_UPLOAD_PATH().$obj->image);
                    $obj->image = NULL;
                }
            }
        }

        if (isset($input['image']) && !empty($input['image'])) {

            $file = $r->file('image')[0];
            
            $uploadPath = BANNER_IMAGE_UPLOAD_PATH();
            
            $filenamewithextension = $file->getClientOriginalName();

            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);

            //get file extension
            $extension = $file->getClientOriginalExtension();

            //filename to store
            $filenametostore = $filename.'_'.time().'.'.$extension;
            $filenameThumbtostore = 'thumbnail_'.$filename.'_'.time().'.'.$extension;
            
            $file->move($uploadPath, $filenametostore);
            copy($uploadPath.'/'.$filenametostore, $uploadPath.'/'.$filenameThumbtostore);
            
            //Resize image here
            $thumbnailpath = public_path('upload/banner/'.$filenameThumbtostore);
            
             $img = \Image::make($thumbnailpath)->resize(869,549, function($constraint) {
                  $constraint->aspectRatio();
              });

            $img->save($thumbnailpath);

            $obj->image = $filenametostore;

        }

        $obj->name=$input['name'];
        $obj->url=$input['url'];
        $obj->status = $input['status'];
        $obj->save();

        $msg = trans('lang_data.banner_save_message_label');
        flashMessage('success',$msg);

        return response()->json(['success' => true,'msg'=>$msg, 'status'=>1,'errors' => $errors]);
    }

    /**
     * [getBanner This function is used to get single resource of banner]
     * @param  [type] $id [description]
     * @return [type]     [description]
     * @author Chirag G.
     */
    public function getBanner($id)
    {
        $banner=self::findOrfail($id);
        return $banner;
    }

    /**
     * [deleteAll This funtion is used to delete specific resources]
     * @param  [type] $r [description]
     * @return [type]    [description]
     * @author Chirag G.
     */
    public function deleteAll($r){

      $input=$r->all();
      foreach ($input['checkbox'] as $key => $c) {

          $obj = $this->findOrFail(Crypt::decrypt($c));
          $obj->delete();
          $msg = trans('lang_data.banner_delete_message_label');

      }

      return response()->json(['success' => 1, 'msg' => trans('lang_data.banner_delete_message_label')]);
    }

    /**
     * [statusAll This function is used to active or inactive sepcifuc resources]
     * @param  [type] $r [description]
     * @return [type]    [description]
     * @author Chirag G.
     */
    public function statusAll($r){

      $input=$r->all();
      foreach ($input['checkbox'] as $key => $c) {
            $l = self::where('id',\Crypt::decrypt($c))->first();
            if ($l !=NULL) {
                
                if ($l->status == 1) {
                  $l->status = self::STATUS_INACTIVE;
                }else{
                  $l->status = self::STATUS_ACTIVE;
                }
                $l->save();
            }
      }
      return response()->json(['success' => 1, 'msg' => trans('lang_data.banner_delete_message_label')]);
    }

    /**
     * [getBannerImageUrl This function is used to get banner image url]
     * @return [type] [description]
     * @author Chirag G.
     */
    public function getBannerImageUrl($thumbnail_=NULL){

        $imageUrl_u= UPLOAD_AND_DOWNLOAD_URL().''."public/front/img/slide/slider1.png";

        if (isset($thumbnail_) && !empty($thumbnail_)) {
            
           $imgName  = 'thumbnail_'.$this->image;

        }else{

           $imgName  = $this->image;
        }

        $imagePath=BANNER_IMAGE_UPLOAD_PATH().$imgName;
        $imageUrl=BANNER_IMAGE_UPLOAD_URL().$imgName;

        if (isset($imgName) && !empty($imgName) && file_exists($imagePath) ) {
        
            return $imageUrl;

        }else{

            $imageUrl=$imageUrl_u;

        }

        return $imageUrl;
    }

    /**
     * [SingleStatusChange This function is used to active in active single status]
     * @param [type] $r [description]
     * @author Chirag G.
     */
    public function SingleStatusChange($r){

      $l = self::where('id',\Crypt::decrypt($r->id))->first();
      if ($l !=NULL) {
          
          if ($l->status == 1) {
            $l->status = self::STATUS_INACTIVE;
          }else{
            $l->status = self::STATUS_ACTIVE;
          }
          $l->save();
          return response()->json(['status' => $l->status]);
      }
    }
}
