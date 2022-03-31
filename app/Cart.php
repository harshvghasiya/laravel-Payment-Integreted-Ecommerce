<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Crypt;
use App\Models\Product;
use Auth;

class Cart extends Model
{
    
    public function product()
    {
      return $this->belongsTo("\App\Models\Product","product_id","id");
        
    }
    public function addToCart($request)
    {
    	  $res=new Cart;
    	  $res->product_id=Crypt::decrypt($request->id);
    	  $res->status=1;
    	if(\Auth::guard('user_login')->check()){
      	  $res->user_id=\Auth::guard('user_login')->user()->id; 		
    	}
    	  $res->ip=$request->ip();
    	  $res->save(); 

          $cart_count=self::where('ip',$request->ip())->count();
          $cart_product=Product::where('id',$res->product_id)->first();
          $cart_item ='<li>
                        <a href="shop-item.html"><img src="'.$cart_product->getProductImageUrl().'" alt="Rolex Classic Watch" width="37" height="34"></a>
                        <span class="cart-content-count">x 1</span>
                        <strong><a href="shop-item.html">'.$cart_product->name.'</a></strong>
                        <em>Rs. '.$cart_product->price.'</em>
                        <a href="javascript:void(0);" data-cart_id="'.Crypt::encrypt($res->id).'" class="del-goods del_cart_sm">&nbsp;</a>
                      </li>';
          

        return response()->json(['status' => 1,'msg'=>"Added to cart successfully",'success'=>true,'cart_count'=>$cart_count,'cart_item'=>$cart_item]);
    }

    public function cartDelete($request)
    {
       self::destroy(Crypt::decrypt($request->cart_id));
       $cart=self::where('ip',$request->ip())->get();
       $cart_count=$cart->count();
       // dd($cart_count);
       return response()->json(['status' => 1,'msg'=>"Remove from cart successfully",'success'=>true,'cart_count'=>$cart_count]);

    }

    public function updQuantity($request)
    {
      $id=Crypt::decrypt($request->cart_id);
      $res=self::find($id);
      $res->quantity=$request->qun;
      $res->save();

       return response()->json(['status' => 1,'success'=>true]);

    }

    public function checkout($request)
    {
       if(!Auth::guard('user_login')->check()){
          flashMessage('error','You Are not login');
          return redirect()->back();
       }

      $cart=self::with(['product'])->where('ip',$request->ip())->where('user_id',Auth::guard('user_login')->user()->id)->get();
      return view('front.cart.checkout',compact('cart'));

    }
}
