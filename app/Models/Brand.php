<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Yajra\Datatables\Datatables;
use Crypt;

class Brand extends Model
{
    protected $table="brands";
    const STATUS_ACTIVE ='1';
    const STATUS_INACTIVE ='0';


    /**
     * [getCategoryListData To get cateogry list]
     * @param  [type] $request [description]
     * @return [type]          [description]
     */
    public function getBrandListData($request){


        $sql=self::select("*");
        return Datatables::of($sql)
              ->addColumn('action',function($data){
                $string = '<a href="'.route('admin.brand.edit',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>';

                  if (env('ACCESS_TO_DELETE') == true) {

                      $string .='<a href="javascript:void(0)" data-route="'.route('admin.brand.destroy',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-danger delete_record"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                  } 
                  
                  return $string;
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
              ->rawColumns(['id','action','status'])
              ->make(true);
    }

    /**
     * [saveCategory To save and update category]
     * @param  [type] $r  [description]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function saveBrand($r,$id=NULL){

        $errors="";
        $input = $r->all();
        if ($id !== NULL) {
            $id=Crypt::decrypt($id);
            $obj = self::find($id);
        }else{

            $obj = new self;
            $obj->slug= CREATE_SLUG($input['name']);
        }

        $obj->name= $input['name'];
        $obj->description=  $input['description'];
        $obj->status = $input['status'];
        $obj->save();
       

        $msg = trans('lang_data.record_successfully_save_label');
        flashMessage('success',$msg);
        return response()->json(['success' => true,'msg'=>$msg, 'status'=>1,'errors' => $errors]);
    }

    /**
     * [getCategory To get category detail]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function getBrand($id)
    {
        $category=self::findOrfail($id);
        return $category;
    }

    public function deleteAll($r){

        $input=$r->all();
        $msg="";
        foreach ($input['checkbox'] as $key => $c) {

            $brand = \App\Models\Product::where('brand_id',Crypt::decrypt($c))->get();

            if (!$brand->isEmpty()) {
              
              $msg .= trans('lang_data.resource_can_not_be_deleted_since_in_used');
              $status = 2;

            }else{

              $obj = $this->findOrFail(Crypt::decrypt($c));
              $obj->delete();
              $msg .= trans('lang_data.record_deleted_successfully_label');
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
    public static function getBrandDropDown(){

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
}
