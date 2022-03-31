<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Yajra\Datatables\Datatables;
use Crypt;
use App\Models\SubCategory;

class Product extends Model
{ 
    protected $table="products";
    const STATUS_ACTIVE ='1';
    const STATUS_INACTIVE ='0';

    /**
     * [blog This function is used to get blog data]
     * @return [type] [description]
     */
    public function category(){

      return $this->belongsTo("\App\Models\SubCategory","category_id","id");
    }

    public function brand(){

      return $this->belongsTo("\App\Models\Brand","brand_id","id");
    }

    public function country(){

      return $this->belongsTo("\App\Models\Country","country_id","id");
    }

    public function images(){

      return $this->hasMany("\App\Models\ProductImage","product_id","id");
    }

    public function image(){

      return $this->belongsTo("\App\Models\ProductImage","id","product_id")->orderBy('id','DESC');
    }

    public function product_order()
    {
      return $this->hasMany('\App\OrderProduct','product_id','id');
    }

    public function cart()
    {
      return $this->hasMany('\App\Cart','product_id','id');
    }


    /**
     * [blog This function is used to get blog data]
     * @return [type] [description]
     */
    public function productFeature(){

      return $this->hasMany("\App\Models\ProductFeature","product_id","id");
    }

    /**
     * [getCategoryListData To get cateogry list]
     * @param  [type] $request [description]
     * @return [type]          [description]
     */
    public function getProductListData($request){


        $sql=self::select("*");
        return Datatables::of($sql)
              ->addColumn('action',function($data){
                $string = '<a href="'.route('admin.product.edit',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>';

                  if (env('ACCESS_TO_DELETE') == true) {

                      $string .='<a href="javascript:void(0)" data-route="'.route('admin.product.destroy',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-danger delete_record"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                  } 
                  
                  return $string;
              })
              ->editColumn('id',function($data){
                  return '<input type="checkbox" name="checkbox[]" class="select_checkbox_value" value="'.Crypt::encrypt($data->id).'" />';
              })
              ->editColumn('status',function($data){
                  return getStatusIcon($data);
              })
              ->editColumn('category_id',function($data){

                  return ($data->category !=null) ? $data->category->name : "-";
              })
              ->filter(function ($query) use ($request) {

                  if (isset($request['status']) && $request['status'] != "") {
                      $query->where('status', $request['status']);
                  }  

                  if (isset($request['is_featured']) && $request['is_featured'] != "") {
                      $query->where('is_featured', $request['is_featured']);
                  }                  
                  
                  if (isset($request['name']) && $request['name'] != "") {
                      $query->where('name', 'like', '%' . $request->name . '%');
                  }
              })
              ->rawColumns(['id','action','status','category_id'])
              ->make(true);
    }

    /**
     * [saveCategory To save and update category]
     * @param  [type] $r  [description]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function saveProduct($r,$id=NULL){

        $errors="";
        $input = $r->all();
        if ($id !== NULL) {
            $id=Crypt::decrypt($id);
            $obj = self::find($id);
        }else{

            $obj = new self;
            $obj->slug = CREATE_SLUG($input['name']);
        }

        $obj->name= $input['name'];
        $obj->category_id = $input['category_id'];
        $obj->brand_id = $input['brand_id'];
        $obj->sku = $input['sku'];
        $obj->country_id = $input['country_id'];
        $obj->product_code = (isset($input['product_code']) && !empty($input['product_code'])) ? $input['product_code'] : NULL;
        $obj->hsn_code = (isset($input['hsn_code']) && !empty($input['hsn_code'])) ? $input['hsn_code'] : NULL;
        $obj->availability =  $input['availability'];
        $obj->speak_to_expert = (isset($input['speak_to_expert']) && !empty($input['speak_to_expert'])) ? $input['speak_to_expert'] : NULL;
        $obj->price = (isset($input['price']) && !empty($input['price'])) ? $input['price'] : NULL;
        $obj->description=  $input['description'];
        $obj->status = $input['status'];
        
        $obj->seo_title = isset($input['seo_title']) ? $input['seo_title'] : NULL;
        $obj->seo_keyword = isset($input['seo_keyword']) ? $input['seo_keyword'] : NULL;
        $obj->seo_description = isset($input['seo_description']) ? $input['seo_description'] : NULL;

        
        $obj->short_description = isset($input['short_description']) ? $input['short_description'] : NULL;
        $obj->technical_description = isset($input['technical_description']) ? $input['technical_description'] : NULL;

        $obj->video_link = isset($input['video_link']) ? $input['video_link'] : NULL;
        $obj->contact_url = isset($input['contact_url']) ? $input['contact_url'] : NULL;
        $obj->is_featured = isset($input['is_featured']) ? $input['is_featured'] : 2;
        

        if (isset($input['delete_attachment']) && $input['delete_attachment'] == 1) {
            
            if ($obj->attachment !=null) {

                if(file_exists(PRODUCT_ATTACHMENT_UPLOAD_PATH().$obj->attachment))
                {
                    \File::delete(PRODUCT_ATTACHMENT_UPLOAD_PATH().$obj->attachment);
                }
            }
        }


        if (isset($input['attachment']) && !empty($input['attachment'])) {

            $attachmentName = UPLOAD_FILE($r,'attachment',PRODUCT_ATTACHMENT_UPLOAD_PATH());
            if ($attachmentName !="") {
              $obj->attachment = $attachmentName;
            }
        }
        
        $obj->save();


        if ($r->file('images')) {

          foreach($r->file('images') as $file)
          { 
              $uploadPath = PRODUCT_IMAGE_UPLOAD_PATH();
              $uploadThumbPath = THUMB_PRODUCT_IMAGE_UPLOAD_PATH();


              $filenamewithextension = $file->getClientOriginalName();
       
              //get filename without extension
              $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
       
              //get file extension
              $extension = $file->getClientOriginalExtension();
       
              //filename to store
              $filenametostore = $filename.'_'.time().'.'.$extension;
              $filenameThumbtostore = 'thumbnail_'.$filename.'_'.time().'.'.$extension;
              // dd($filenameThumbtostore);
              
              $file->move($uploadPath, $filenametostore);
              copy($uploadPath.'/'.$filenametostore, $uploadPath.'/'.$filenameThumbtostore);
              // $file->move($uploadThumbPath, $filenametostore);

              //Resize image here
              $thumbnailpath = public_path('upload/product_image/'.$filenameThumbtostore);
              $img = \Image::make($thumbnailpath)->resize(300,300, function($constraint) {
                  $constraint->aspectRatio();
              });
              $img->save($thumbnailpath);

              $productImage = new \App\Models\ProductImage;
              $productImage->product_id = $obj->id;
              $productImage->name = $filenametostore;
              $productImage->save();

          }

        }


        

        $deleteFeature = \App\Models\ProductFeature::where('product_id',$obj->id)->delete();

        if (isset($input['f_name']) && !empty($input['f_name'])) {
            
            foreach($input['f_name'] as $key => $value) {

                if (!empty($value) && isset($input['f_value'][$key]) && !empty($input['f_value'][$key])) {
                  
                    $feature = new \App\Models\ProductFeature;
                    $feature->product_id = $obj->id;
                    $feature->f_name = $value;  
                    $feature->f_value = $input['f_value'][$key];
                    $feature->save();  
                }
            }
        }

        $msg = trans('lang_data.record_successfully_save_label');
        
        flashMessage('success',$msg);
        
        $newResponse = [
                'success' => true,
                'msg'=>$msg, 
                'status'=>1,
                'errors' => $errors,
                'id' => $obj->id,
                'model' => 'Product',
                'redirect' => route('admin.product.index')
            ];
        

        return response()->json($newResponse);
    }

    /**
     * [getCategory To get category detail]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function getProduct($id)
    {
        $category=self::with(['productFeature'])->findOrfail($id);
        return $category;
    }

    public function deleteAll($r){

        $input=$r->all();
        $msg="";
        $status ="";

        foreach ($input['checkbox'] as $key => $c) {



              $obj = $this->findOrFail(Crypt::decrypt($c));
              $obj->delete();
              $msg .= "Category Record Deleted Successfully.";
              $status = 1;

        }

        return response()->json(['success' => $status, 'msg' => $msg]);
    }

    /**
     * [statusAll This functio us used to active in active specific resources]
     * @param  [type] $r [description]
     * @return [type]    [description]
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
        
       return response()->json(['success' => 1, 'msg' => trans('lang_data.record_deleted_successfully_label')]);
    }

    /**
     * [SingleStatusChange To change single category status]
     * @param [type] $r [description]
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

    /**
     * [getCategoryImageUrl This function is used to get category image url]
     * @return [type] [description]
     */
   public function getProductAttachmentUrl(){

      $imageUrl_u ='';
      $imagePath=PRODUCT_ATTACHMENT_UPLOAD_PATH().$this->attachment;
      $imageUrl= PRODUCT_ATTACHMENT_UPLOAD_URL().$this->attachment;
      if (isset($this->attachment) && !empty($this->attachment) && file_exists($imagePath) ) {
          return $imageUrl;
      }else{
          $imageUrl=$imageUrl_u;
      }
      return $imageUrl;
  }
  

    public function getProductImageUrl($thumbnail_ =null){

      $imageUrl_u =UPLOAD_AND_DOWNLOAD_URL()."public/front/img/product/shop_item_01.jpg";

      if (isset($this->image) && $this->image !=null) {

        if (isset($thumbnail_) && !empty($thumbnail_)) {
            
           $imgName  = 'thumbnail_'.$this->image->name;

        }else{

           $imgName  = $this->image->name;

        }
        $imagePath=PRODUCT_IMAGE_UPLOAD_PATH().$imgName;
        $imageUrl= PRODUCT_IMAGE_UPLOAD_URL().$imgName;

        if (isset($imgName) && !empty($imgName) && file_exists($imagePath) ) {
      
            return $imageUrl;

        }else{
            
            $imageUrl=$imageUrl_u;
        }

        return $imageUrl;

      }else{

        return $imageUrl_u;  

      }
    }

}
