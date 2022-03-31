<?php

namespace App\Http\Controllers;

use App\Payment;
use App\Order;
use App\Cart;
use Crypt;
use App\OrderProduct;
use Illuminate\Http\Request;
use Razorpay\Api\Api;
use Session;


class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $title="Payment";
        $total=\Crypt::decrypt($request->amount);
            $receipt=\Str::random(20);
            $api = new Api(env('RAZOR_KEY'), env('RAZOR_SECRET'));
            $order  = $api->order->create(array('receipt' => $receipt, 'amount' => $total*100 , 'currency' => 'INR'));
            

            $re=new Order;
            $re->name=$request->name;
            $re->amount=$total;
            $re->email=$request->email;
            $re->city=$request->city;
            $re->address=$request->address;
            $re->user_id=\Auth::guard('user_login')->user()->id;
            $re->post_code=$request->post_code;
            $re->state=$request->state;
            $re->country=$request->country;
            $re->mobile=$request->mobile;
            $re->save();

            foreach ($request->product_id as $key => $value) {
               $r=Cart::where('product_id',Crypt::decrypt($value))->first();
               $res=new OrderProduct; 
               $res->order_id=$re->id;
               $res->quantity=$r->quantity;
               $res->product_id=\Crypt::decrypt($value);
               $res->status=0;
               $res->save();
                               
            }

        $response=[
            'orderId' => $order['id'],
            'razorpayId' => env('RAZOR_KEY'),
            'amount' => $total*100,
            'name' => $request->name,
            'currency' => 'INR',
            'email' => $request->email,
            'mobile' => $request->mobile,
            'address' => $request->address,
            'id'=>$re->id,
            'description' => 'Testing description',
        ];

        return view('front.payment.index',compact('response'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
         $success=false;
        try {
        $api = new Api(env('RAZOR_KEY'), env('RAZOR_SECRET'));
        $attributes  = array('razorpay_signature'  => $request->rzp_signature,  'razorpay_payment_id'  => $request->rzp_paymentid ,  'razorpay_order_id' => $request->rzp_orderid);
        $order  = $api->utility->verifyPaymentSignature($attributes);

        $success=true;
            
        } catch (Exception $e) {
            $success=false;
        }

        if ($success==true) {
            $res=new Payment;
            $res->user_id =\Auth::guard('user_login')->user()->id;
            $res->payment_id=$request->rzp_paymentid;
            $res->amount=$request->amount;
            $res->save();

            $re=Order::find($request->id);
            $re->payment_id=$request->rzp_paymentid;
            $re->status=1;
            $re->save();

            $cart=Cart::where('ip',$request->ip())->where('user_id',\Auth::guard('user_login')->user()->id)->delete();
        }
        
        flashMessage('success','Payment Done successful');
        return redirect()->route('front.home');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
