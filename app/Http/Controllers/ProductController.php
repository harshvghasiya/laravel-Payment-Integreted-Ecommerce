<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
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
        $input  = request()->all();

        $title = trans('lang_data.total_product');

        $query = \App\Models\Product::select('id','category_id','price','name','slug','status')
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
            ->orderBy('id','DESC');

        if (isset($input['search']) && !empty($input['search'])) {

            $q = $input['search'];
            $query->where(function($qc) use($q){

                    $qc->where('name', 'like', '%' . $q . '%')
                       ->orWhere('sku','like', '%' . $q . '%') 
                       ->orWhere('hsn_code','like', '%' . $q . '%')
                       ->orWhere('product_code','like', '%' . $q . '%')   
                       ->orWhere('speak_to_expert','like', '%' . $q . '%')   
                       ->orWhere('availability','like', '%' . $q . '%')
                       ->orWhereHas('brand',function($qr) use($q){

                          $qr->where('name','like', '%' . $q . '%');
                       })
                       ->orWhereHas('category',function($qr) use($q){

                          $qr->where('name','like', '%' . $q . '%');
                       })
                       ->orWhereHas('country',function($qr) use($q){

                          $qr->where('name','like', '%' . $q . '%');
                       })
                       ->orWhereHas('productFeature',function($qr) use($q){

                          $qr->where('f_value','like', '%' . $q . '%');
                       });   
                });
        } 

        $products = $query->paginate(getDefaultPagiantion());


        return view('front.product.index',compact('title','products'));
    }

    /**
     * [index This function is used to get home page and  demo page listing data]
     * @param  [type] $pa [description]
     * @return [type]     [description]
     * @author Chirag Ghevariya
     */
    public function detail($slug)
    {   

        $product = \App\Models\Product::with(['images','productFeature','category'=>function($query){

                                        $query->select('id','category_id','status')
                                              ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
                                              ->whereHas('category',function($pc){

                                                    $pc->select('id','category_id','status')
                                                        ->where('status',\App\Models\Category::STATUS_ACTIVE);

                                              });

                                        },'brand'=>function($query){

                                            $query->select('id','name','slug','status')
                                                ->where('status',\App\Models\Brand::STATUS_ACTIVE); 

                                        },'country'=>function($query){
                                        
                                            $query->select('id','name','status')
                                                ->where('status',\App\Models\Country::STATUS_ACTIVE);

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
                                        ->where('slug',$slug)
                                        ->firstOrFail();

        $title = $product->name;

        return view('front.product.detail',compact('title','product'));
    }

    public function collection(Request $request,$slug)
    {
       switch ($slug) {
         case 'new-arrivals':
            $products=\App\Models\Product::where('status',\App\Models\Product::STATUS_ACTIVE)->orderBy('created_at','DESC')->paginate(getDefaultPagiantion());
             $title='New Arrivals';
             $count=3;
           break;
         
         default:
             abort(404);
           break;
       }

       return view('front.pages.collection',compact('products','title','count'));
    }
}
