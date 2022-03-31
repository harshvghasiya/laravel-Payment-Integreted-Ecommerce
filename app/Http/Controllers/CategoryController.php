<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{

    /**
     * [__construct This function is used to create and initialzation class object]
     */
    
     public function category($slug)
    {  
         $category=\App\Models\Category::where('status',\App\Models\Category::STATUS_ACTIVE)
                                        ->where('slug',$slug)
                                        ->firstOrFail();                                      

      	$subCategory_id=\App\Models\SubCategory::with(['category'])
                                        ->whereHas('category',function($q) use($slug)
                                        {
                                          $q->select('id','slug','name')
                                            ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
                                            ->where('slug',$slug);
                                        })
                                        ->pluck('id')->toArray();
         
        $products=\App\Models\Product::whereIn('category_id',$subCategory_id)
                                      ->where('status',\App\Models\Product::STATUS_ACTIVE)
                                      ->paginate(getDefaultPagiantion());  
        $count=$products->total();
        $title=$category->name;
        return view('front.category.index',compact('title','products','category','count'));
      

    }

    public function subCategory($slug)
    {   

      // $subCategory = \App\Models\SubCategory::with(['category'=>function($query){

      //                                     $query->where('status',\App\Models\Category::STATUS_ACTIVE);

      //                                   }])
      //                                   ->where('slug',$slug)
      //                                   ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
      //                                   ->whereHas('category',function($query){

      //                                       $query->where('status',\App\Models\Category::STATUS_ACTIVE);
      //                                   })
      //                                   ->firstOrFail();

      //   $products = \App\Models\Product::with(['image'])->where('category_id',$subCategory->id)
      //                                           ->where('status',\App\Models\Product::STATUS_ACTIVE)
      //                                           ->paginate(getDefaultPagiantion());    

      //   $title = $subCategory->name;

      //   return view('front.category.sub_category',compact('title','products','subCategory'));


      $category = \App\Models\SubCategory::where('slug',$slug)
                  ->where('status',\App\Models\Category::STATUS_ACTIVE)
                ->firstOrFail();
        
        $products = \App\Models\Product::with(['image'])->where('category_id',$category->id)
                                                ->where('status',\App\Models\Product::STATUS_ACTIVE)
                                                ->paginate(getDefaultPagiantion());    
        $count= $products->total();
        $title = $category->name;

        
        return view('front.category.index',compact('title','products','category','count'));
    }

}
