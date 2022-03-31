<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Yajra\Datatables\Datatables;
use Crypt;
use App\Models\Product;

class Order extends Model
{
    protected $table="orders";
    const STATUS_ACTIVE ='1';
    const STATUS_INACTIVE ='0';
      
    const CONST_DISPLAY_ON_HEADER = 3;
          
    const CONST_FOOTER_INFORMATION = 1;
    const CONST_FOOTER_EXTRA = 2;


    public function user_data()
    {
      return $this->belongsTo("\App\UserLogin","user_id","id");
    }

    public function order_product()
    {
      return $this->hasMany("\App\OrderProduct","order_id","id");
    }

    /**
     * [getorderListData This resource are used to get data]
     * @param  [type] $request [description]
     * @return [type]          [description]
     * @author Chirag G.
     */
    public function getOrderListData($request){

    	$sql=self::with(['user_data']);
    	return Datatables::of($sql)
                    		->addColumn('action',function($data){
                                $string1="";
                                $string ='<a href="'.route('admin.orders.detail',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-primary"><i class="fa fa-eye" aria-hidden="true"></i> View</a>';

                                  if (env('ACCESS_TO_DELETE') == true) {
                                    
                                    $string1 .='<a href="javascript:void(0)" data-route="'.route('admin.orders.destroy',Crypt::encrypt($data->id)).'" class="btn btn-xs btn-danger delete_record"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                                  }
                                  
                                  return $string;    
                    		})
                        ->editColumn('id',function($data){
                            return '<input type="checkbox" name="checkbox[]" class="select_checkbox_value" value="'.Crypt::encrypt($data->id).'" />';
                        })
                        ->editColumn('user_id',function($data)
                        {
                        	return $data->user_data->name;
                        })
                        ->editColumn('status',function($data){
                            if ($data->payment_id != null && $data->status ==1) {
                              return '<span title="'.trans('lang_data.click_on_button_change_status_label').'" class="btn btn-xs btn-success" id="active_inactive" status="1" data-id="'.\Crypt::encrypt($data->id).'">'.trans('lang_data.placed_label').'</span>';
                            }else{
                              return '<span title="'.trans('lang_data.click_on_button_change_status_label').'" class="btn btn-xs btn-danger" id="active_inactive" status="0" data-id="'.\Crypt::encrypt($data->id).'">'.trans('lang_data.pending_label').'</span>';
                            }
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
     * [saveorder This resource are use to save and update data]
     * @param  [type] $r  [description]
     * @param  [type] $id [description]
     * @return [type]     [description]
     * @author Chirag G.
     */
    public function saveOrder($r,$id=NULL){

    	$errors="";
    	$input = $r->all();
    	if ($id !== NULL) {

        $id=Crypt::decrypt($id);
		    $obj = self::find($id);
        $obj->last_updated_by=\Auth::user()->id;

      }else{

      	$obj = new self;
        $obj->created_by=\Auth::user()->id;
      }
      $obj->name=$input['name'];
      $obj->status = $input['status'];

      $obj->save();

      $msg = trans('lang_data.order_save_message_label');
      flashMessage('success',$msg);

      return response()->json(['success' => true,'msg'=>$msg, 'status'=>1,'errors' => $errors]);
    }

    /**
     * [getorder This resource are used to get order data]
     * @param  [type] $id [description]
     * @return [type]     [description]
     * @author Chirag G.
     */
    public function getorder($id)
    {
        $order=self::findOrfail($id);
        return $order;
    }

    /**
     * [statusAll This resource are used to active or inactive data]
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
     * [deleteAll This resource are used to delete specific data]
     * @param  [type] $r [description]
     * @return [type]    [description]
     * @author Chirag G.
     */
    public function deleteAll($r){

        $input=$r->all();
        $msg ="";
        foreach ($input['checkbox'] as $key => $c) {

          $checkInCms = \App\Models\Cms::where('order_id',Crypt::decrypt($c))->get();

          if (!$checkInCms->isEmpty()) {
            
            $msg .= trans('lang_data.resource_can_not_be_deleted_since_in_used');
            $status = 2;

          }else{

            $obj = $this->findOrFail(Crypt::decrypt($c));
            $obj->delete();
            $msg .= trans('lang_data.order_delete_message_label');
            $status = 1;
          }
        }
        return response()->json(['success' => $status, 'msg' =>$msg]);
    }

    /**
     * [getorderDropDown This resource are use to get order data]
     * @return [type] [description]
     * @author Chirag G.
     */
    public static function getorderDropDown(){

        return self::where('status',self::STATUS_ACTIVE)->pluck('name','id')->toArray();
    }

    /**
     * [SingleStatusChange This resource are used to change status]
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

    public function orderDetail($request,$id)
    {
      return view('admin::order.order_detail',compact('id'));
    }


     public function getOrderProductListData($request,$id){
      $sql=Product::with(['product_order'])->has('product_order')
                   ->whereHas('product_order',function($qu) use($id)
                   {
                      $qu->where('order_id',Crypt::decrypt($id));
                   });
                   // dd($sql[0]->product_order[0]->quantity);
      return Datatables::of($sql)
                        ->editColumn('id',function($data){
                            return '<input type="checkbox" name="checkbox[]" class="select_checkbox_value" value="'.Crypt::encrypt($data->id).'" />';
                        })
                        ->editColumn('image',function($data){
                            return '<img style="height:50px;width:100px" src="'.$data->getProductImageUrl().'"/>';
                         })
                        ->editColumn('quantity',function($data)
                        {
                          return $data->product_order[0]->quantity;
                        })
                        ->filter(function ($query) use ($request) {

                            if (isset($request['status']) && $request['status'] != "") {
                                $query->where('status', $request['status']);
                            }
                            if (isset($request['name']) && $request['name'] != "") {
                                $query->where('name', 'like', '%' . $request->name . '%');
                            }
                        })
                        ->rawColumns(['id','image','status'])
                        ->make(true);
    }

}
