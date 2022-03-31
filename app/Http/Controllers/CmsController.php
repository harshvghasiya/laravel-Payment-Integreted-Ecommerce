<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CmsController extends Controller
{
    /**
     * [__construct This function is used to create and initialzation class object]
     */
    public function __construct()
    {
        $this->cms =new \App\Models\Cms; 
    }

    /**
     * [detail This function is used to get cms page data]
     * @param   $slug 
     * @return Object 
     */
    public function detail($slug){

        return $this->cms->getCmsPageDetail($slug);

        $cmsPageDetail = \App\Models\Cms::where('slug',$slug)->first();
        if ($cmsPageDetail !=null) {
            
            $title = $cmsPageDetail->name;
            if ($cmsPageDetail->id == \App\Models\Cms::CONTACT_PAGE_CONSTANT) {
                
                return view('front.contact.contact',compact("cmsPageDetail","title"));

            }elseif ($cmsPageDetail->id == \App\Models\Cms::SITE_MAP_CONSTANT) {
                
                return view('front.pages.sitemap',compact("cmsPageDetail","title"));
            }
            else{

                return view('front.pages.detail_page',compact("cmsPageDetail","title"));
            }    

        }else{

            return abort(404);
        }
    }

}
