<?php
namespace Modules\Admin\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Crypt;
use App\Models\Product;
use App\Order;
use App\Models\Acl;

class OrderController extends Controller
{   
    /**
     * [__construct This function is used to create and initialzation class object]
     */
    public function __construct(){

        $this->middleware(function ($request, $next)
        {
            $this->user = \Auth::user();
            if (CHECK_RIGHTS_TO_ACCESS_DENIED(Acl::CONST_PRODUCT_MODULE, $this->user
            ) || $this->user->right_id  == 1)
            {
                return $next($request);
            }
            else
            {
                \Cache::flush();
                $succ_msg = trans('lang_data.you_do_not_have_access');
                flashMessage('error',$succ_msg);
                return redirect()->route('admin.logout');
            }
        
        });
        
        $this->objModel = new Order;
    } 
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {       
        $title =trans('lang_data.order_list_label');
        return view('admin::order.index',compact('title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $image="";
        $title =trans('lang_data.add_order_label');
        return view('admin::order.addedit',compact("image","title"));
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $this->objModel->saveOrder($request);
    }

    public function orderDetail(Request $request,$id)
    {
        return $this->objModel->orderDetail($request,$id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order =$this->objModel->getorder(Crypt::decrypt($id));
        $encryptedId=$id;
        $title =trans('lang_data.edit_order_label');

        $urls = '';
        $configs = '';

        foreach ($order->images as $image) {

            $path = url("public/upload/order_image/".$image->name);
            $deleteUrl = route('admin.image.delete', $image->id);
            $urls .= '"' .$path . '",';
            $configs .= '{caption:"' . $image->name . '", size:' . 10 . ', url: "' . $deleteUrl . '", key:' . $image->id . '},';
        }

        $preview = [
            'urls' => rtrim($urls, ','),
            'configs' => rtrim($configs, ',')
        ];

        return view('admin::order.addedit',compact("order","encryptedId",'title','preview'));
    }

    public function previewImages()
    {

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        // return $this->objModel->saveorder($request,$id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        $request['checkbox']=[$id];
        return $this->objModel->deleteAll($request);
    }

    /**
     * [anyData This function is used to get data of category]
     * @param  Request $r [description]
     * @return [type]     [description]
     * @author Chirag Ghevariya.
     */
    public function anyData(Request $r)
    {
        return $this->objModel->getOrderListData($r);
    }

    public function productData(Request $r,$id)
    {
        
        return $this->objModel->getOrderProductListData($r,$id);
    }

     /**
     * [deleteAll This function is used to delete specific seleted data]
     * @param  Request $request [description]
     * @return [type]           [description]
     * @author Chirag Ghevariya.
     */
    public function deleteAll(Request $request){
        
        return $this->objModel->deleteAll($request);
    }

    /**
     * [statusAll This function is used to active or inactive specific selected category record]
     * @param  Request $request [description]
     * @return [type]           [description]
     * @author Chirag Ghevariya.
    */
    public function statusAll(Request $request){    
        return $this->objModel->statusAll($request);
    }
    
    /**
     * [SingleStatusChange This function is used for active inactive single record of category module.]
     * @param Request $request [description]
     * @author Chirag Ghevariya.
     */
    public function SingleStatusChange(Request $request){
        
        return $this->objModel->SingleStatusChange($request);
    }

    public function singleFeatureDelete(Request $request){

        $input = $request->all();

        if (isset($input['id'])) {

            \App\Models\orderFeature::where('id',$input['id'])->delete();

            return response()->json(['success' => true]);
        }
    }
}
