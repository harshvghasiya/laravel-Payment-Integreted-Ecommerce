<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Yajra\Datatables\Datatables;
use Crypt;
use App\Models\Category;

class SubCategory extends Model
{
    protected $table="sub_category";
    const STATUS_ACTIVE ='1';
    const STATUS_INACTIVE ='0';

    /**
     * [blog This function is used to get blog data]
     * @return [type] [description]
     */
    public function category(){

      return $this->belongsTo("\App\Models\Category","category_id","id");
    }

    /**
     * [blog This function is used to get blog data]
     * @return [type] [description]
     */
    public function products(){

      return $this->hasMany("\App\Models\Product","category_id","id");
    }


    /**
     * [getCategoryListData To get cateogry list]
     * @param  [type] $request [description]
     * @return [type]          [description]
     */
    public function getSubCategoryListData($request){


        $sql=self::select("*")->with(['category']);
        return Datatables::of($sql)
              ->addColumn('action',function($data){
                $string = '<a href="'.route('admin.sub_category.edit',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>';

                  if (env('ACCESS_TO_DELETE') == true) {

                      $string .='<a href="javascript:void(0)" data-route="'.route('admin.sub_category.destroy',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-danger delete_record"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                  } 
                  
                  return $string;
              })
              ->editColumn('image',function($data){

                  return '<img style="height:50px;width:100px" src="'.$data->getSubCategoryImageUrl().'"/>';
              })
              ->editColumn('id',function($data){
                  return '<input type="checkbox" name="checkbox[]" class="select_checkbox_value" value="'.Crypt::encrypt($data->id).'" />';
              })
              ->editColumn('status',function($data){
                  return getStatusIcon($data);
              })
              ->editColumn('category_id',function($data){
                  return !empty($data->category) ? $data->category->name : "-";
              })
              ->filter(function ($query) use ($request) {

                  if (isset($request['status']) && $request['status'] != "") {
                      $query->where('status', $request['status']);
                  }               

                  if (isset($request['name']) && $request['name'] != "") {
                      $query->where('name', 'like', '%' . $request->name . '%');
                  }
              })
              ->rawColumns(['id','name','category_id','action','status','image'])
              ->make(true);
    }

    /**
     * [saveCategory To save and update category]
     * @param  [type] $r  [description]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function saveSubCategory($r,$id=NULL){

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

                if(file_exists(SUB_CATEGORY_IMAGE_UPLOAD_PATH().$obj->image))
                {
                    \File::delete(SUB_CATEGORY_IMAGE_UPLOAD_PATH().$obj->image);
                    $obj->image = NULL;
                }
            }
        }

        if (isset($input['image']) && !empty($input['image'])) {

          $imageName = UPLOAD_FILE($r,'image',SUB_CATEGORY_IMAGE_UPLOAD_PATH());
          if ($imageName !="") {
            $obj->image = $imageName;
          }
        }
        
        $obj->category_id= $input['category_id'];
        $obj->name= $input['name'];
        $obj->slug= CREATE_SLUG($input['name']);
        $obj->description=  $input['description'];
        $obj->status = $input['status'];
        $obj->save();
       

        $msg = "Sub Category save Successfully Done.";
        flashMessage('success',$msg);
        return response()->json(['success' => true,'msg'=>$msg, 'status'=>1,'errors' => $errors]);
    }

    /**
     * [getCategory To get category detail]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function getSubCategory($id)
    {
        $category=self::findOrfail($id);
        return $category;
    }

    public function deleteAll($r){

        $input=$r->all();
        $msg="";
        
        foreach ($input['checkbox'] as $key => $c) {

            $checkCategory = \App\Models\Product::where('category_id',Crypt::decrypt($c))->get();

            if (!$checkCategory->isEmpty()) {
              
              $msg .= trans('lang_data.resource_can_not_be_deleted_since_in_used');
              $status = 2;

            }else{

              $obj = $this->findOrFail(Crypt::decrypt($c));
              $obj->delete();
              $msg .= "Sub Category Record Deleted Successfully.";
              $status = 1;
            }
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
     * [getCatDropDown To get category list]
     * @return [type] [description]
     */
    public static function getSubCatDropDown(){
        return self::where('status',self::STATUS_ACTIVE)->pluck('name','id')->toArray();
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
   public function getSubCategoryImageUrl(){

      $imageUrl_u=NO_IMAGE_URL().'no_image.png';
      $imagePath=SUB_CATEGORY_IMAGE_UPLOAD_PATH().$this->image;
      $imageUrl=SUB_CATEGORY_IMAGE_UPLOAD_URL().$this->image;
      if (isset($this->image) && !empty($this->image) && file_exists($imagePath) ) {
          return $imageUrl;
      }else{
          $imageUrl=$imageUrl_u;
      }
      return $imageUrl;
  }

  public static function getSubCategoryDropDown(){

      $category = Category::with(['subCategory'=>function($query){

                                    $query->where('status',1);

                                }])->where('status',1)->get();


      $arrayData = array();

      if (isset($category) && !$category->isEmpty()) {

          foreach ($category as $key => $value) {

              $list = [];

              foreach ($value->subCategory as $key2 => $value2){
                  $list[$value2->id] = $value2->name;
              }

              if(count($list)){
                  $arrayData[$value->name] = $list;
              }

          }

      }

      return $arrayData;  

  }
  
}
