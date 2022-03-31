<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Order;

class HomeController extends Controller
{

    /**
     * [__construct This function is used to create and initialzation class object]
     */
    public function __construct()
    {
        
    }

    /**
     * [index This function is used to get home page and  demo page listing data]
     * @param  [type] $pa [description]
     * @return [type]     [description]
     * @author Chirag Ghevariya
     */
    public function index()
    {   

        $latestProduct = \App\Models\Product::select('id','category_id','price','name','slug','status')
                                ->with(['image','category'=>function($query){

                                    $query->select('id','category_id','status')
                                          ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
                                          ->whereHas('category',function($pc){

                                                $pc->select('id','category_id','status')
                                                    ->where('status',\App\Models\Category::STATUS_ACTIVE);

                                          });

                                }])
                                ->where('status',\App\Models\Product::STATUS_ACTIVE)
                                ->whereHas('category',function($query){

                                    $query->select('id','category_id','status')
                                          ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
                                          ->whereHas('category',function($pc){
                                            
                                                $pc->select('id','category_id','status')
                                                    ->where('status',\App\Models\Category::STATUS_ACTIVE);

                                          });
                                })
                                ->orderBy('id','DESC')
                                ->take(6)
                                ->get();

                                

         // $featureProduct = \App\Models\Product::select('id','is_featured','category_id','price','name','slug','status')
         //    ->with(['image','category'])
         //    ->where('status',\App\Models\Product::STATUS_ACTIVE)
         //    ->whereHas('category',function($query){
         //        $query->select('id','category_id','status')
         //              ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
         //              ->whereHas('category',function($pc){

         //                    $pc->select('id','category_id','status')
         //                        ->where('status',\App\Models\Category::STATUS_ACTIVE);

         //              });
         //    })
         //    ->orderBy('id','DESC')
         //    ->take(6)
         //    ->get();
        
         $featureProduct=\App\Models\Category::with(['subCategory'])
                                              ->whereHas('subCategory',function($q)
                                              {
                                                $q->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
                                                  ->whereHas('products',function($qu)
                                                  {
                                                      $qu->where('status',\App\Models\Product::STATUS_ACTIVE);
                                                  });
                                              })
                                              ->where('is_featured',1)
                                              ->where('status',\App\Models\Category::STATUS_ACTIVE)
                                              ->take(6)
                                              ->get();   


        $banners = \App\Models\Banner::where('status',\App\Models\Banner::STATUS_ACTIVE)->get();

        // $category=\App\Models\SubCategory::whereHas('products',function($query)
        //                                   {
        //                                     $query->where('status',\App\Models\Product::STATUS_ACTIVE);
        //                                   })
        //                                   -> where('status',\App\Models\SubCategory::STATUS_ACTIVE)->get();
        
         $category_home=\App\Models\Category::with(['subCategory','subCategory.products'])
                                            ->whereHas('subCategory',function($q)
                                            {
                                              $q->select('id','name','slug')
                                                ->where('status',\App\Models\subCategory::STATUS_ACTIVE)
                                                ->whereHas('products',function($qu)
                                                {
                                                  $qu->where('status',\App\Models\Product::STATUS_ACTIVE);
                                                });
                                            })
                                            ->where('is_home',1)
                                            ->where('status',\App\Models\Category::STATUS_ACTIVE)
                                            ->take(2)
                                            ->get();

          // $category_home=\App\Models\Product::with(['category.category'])
          //                                    ->whereHas('category',function($q)
          //                                    {
          //                                      $q->whereHas('category',function($qu)
          //                                      {
          //                                        $qu->where('is_home',1)
          //                                           ->where('status',1);
          //                                      })->where('status',1);
          //                                    })->get();
           // dd($category_home);

        return view('home',compact('latestProduct','featureProduct','banners','category_home'));
    }

    public function myaccount(Request $request)
    {
      if (!\Auth::guard('user_login')->check()) {
        flashMessage('error','You are not login');
        return redirect()->route('front.home');
      }
      // $orders=Product::with(['product_order'])
      //                  ->whereHas('product_order',function($q)
      //                  {
      //                     $q->whereHas('order',function($qu)
      //                     {
      //                       $qu->where('user_id',\Auth::guard('user_login')->user()->id);
      //                     });
      //                  })
      //                  ->get();

       $orders=Order::with(['order_product','order_product.product'])
                     ->has('order_product')
                     ->where('user_id',\Auth::guard('user_login')->user()->id)
                     ->where('is_delivered',0)
                     ->get();
                    
        return view('front.pages.my_account',compact('orders'));
    }


    public function orderHistory(Request $request)
    {
        $orders=Order::with(['order_product','order_product.product'])
                     ->has('order_product')
                     ->where('user_id',\Auth::guard('user_login')->user()->id)
                     ->get();

        return view('front.pages.order_history',compact('orders'));
        
    }
}
