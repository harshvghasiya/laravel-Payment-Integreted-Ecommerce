<?php

	 function flashMessage($type,$message)
	 {
	 	\Session::put($type,$message);
	 }

	 function getStatusIcon($data){

	 	if ($data->status == 1) {
	 		return '<span title="'.trans('lang_data.click_on_button_change_status_label').'" class="btn btn-xs btn-success" id="active_inactive"
	 		 status="1" data-id="'.\Crypt::encrypt($data->id).'">'.trans('lang_data.active_label').'</span>';
	 	}else{
	 		return '<span title="'.trans('lang_data.click_on_button_change_status_label').'" class="btn btn-xs btn-danger" id="active_inactive" 
	 		status="0" data-id="'.\Crypt::encrypt($data->id).'">'.trans('lang_data.inactive_label').'</span>';
	 	}
	 }

	 function UPLOAD_FILE($r,$name,$uploadPath){

 	 	$image = $r->$name[0];
 		$name = time().'.'.$image->getClientOriginalName();
 		
        $destinationPath = $uploadPath;
        $image->move($destinationPath, $name);
        return  $name;
	 }

	 function MULTI_UPLOAD_FILE($r,$name,$uploadPath){

	 	foreach($r->file('product_image') as $file)
        {
            $name_logo[]=  $name = time().'_'.$file->getClientOriginalName();
            $destinationPath = $uploadPath;
            $file->move($destinationPath, $name);
        }
         return $name_logo;
	 }

	 function UPLOAD_AND_DOWNLOAD_PATH(){

	 	if (env('IS_LIVE_DEMO_LOCAL') == 'local') {
	 		
	 		return public_path();

	 	}elseif(env('IS_LIVE_DEMO_LOCAL') == 'demo') {
	 		
	 		return '/home/tpnzxxed97oz/public_html/cdnify.softtechover.com/public';

	 	}elseif (env('IS_LIVE_DEMO_LOCAL') == 'live') {
	 		
	 		return '/home/tpnzxxed97oz/public_html/cdn.softtechover.com/public';
	 	}
	 }

	function UPLOAD_AND_DOWNLOAD_URL(){

	 	if (env('IS_LIVE_DEMO_LOCAL') == 'local') {
	 		
	 		return asset('');

	 	}else if(env('IS_LIVE_DEMO_LOCAL') == 'demo') {
	 		
	 		return 'http://cdnify.softtechover.com/';

	 	}else if (env('IS_LIVE_DEMO_LOCAL') == 'live') {
	 		
	 		return 'http://cdn.softtechover.com/';
	 	}
	 }

	 function SOCIAL_MEDIA_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/social_media/';
	 }
	 function SOCIAL_MEDIA_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/social_media/';
	 }

	function ADMIN_USER_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/admin_user/';
	 }
	 function ADMIN_USER_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/admin_user/';
	 }	

	 function TINYMCE_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/tinymce/';
	 }
	 function TINYMCE_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/tinymce/';
	 }

	 function CMS_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/cms/';
	 }
	 function CMS_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/cms/';
	 }
	 function CMS_CONTENT_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/cms_content/';
	 }
	 function CMS_CONTENT_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/cms_content/';
	 }
	 function BANNER_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/banner/';
	 }
	 function BANNER_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/banner/';
	 }

 	 function CATEGORY_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/category/';
	 }
	 function CATEGORY_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/category/';
	 }

 	 function SUB_CATEGORY_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/sub_category/';
	 }
	 function SUB_CATEGORY_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/sub_category/';
	 }

	 function BLOG_IMAGE_UPLOAD_PATH(){

	 	return  UPLOAD_AND_DOWNLOAD_PATH().'/upload/blog/';
	 }
	 function BLOG_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/blog/';
	 }

	 function PRODUCT_ATTACHMENT_UPLOAD_PATH(){

	 	return  UPLOAD_AND_DOWNLOAD_PATH().'/upload/attachment/';
	 }
	 function PRODUCT_ATTACHMENT_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/attachment/';
	 }

	 function PRODUCT_IMAGE_UPLOAD_PATH(){

	 	return  UPLOAD_AND_DOWNLOAD_PATH().'/upload/product_image/';
	 }
	 function PRODUCT_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/product_image/';
	 }

	 function THUMB_PRODUCT_IMAGE_UPLOAD_PATH(){

	 	return  UPLOAD_AND_DOWNLOAD_PATH().'/upload/product_image/thumbnail/';
	 }
	 function THUMB_PRODUCT_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/product_image/thumbnail/';
	 }


 	 function LANGUAGE_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/language/';
	 }
	 function LANGUAGE_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/language/';
	 }
	 function NO_IMAGE_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/admin/images/';
	 }
	 // SETTING lOGO
	 function SITE_LOGO_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/setting/logo/';
	 }
	 function SITE_LOGO_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/setting/logo/';
	 }
	 // SETTING AUTHOR LOGO
	 function SITE_AUTHOR_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/setting/author/';
	 }
	 function SITE_AUTHOR_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/setting/author/';
	 }
	 // EMAIL LOGO IMAGE
	 function EMAIL_LOGO_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/setting/email/';
	 }
	 function EMAIL_LOGO_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/setting/email/';
	 }
	 function FAVICON_LOGO_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/setting/favicon/';
	 }
	 function FAVICON_LOGO_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/setting/favicon/';
	 }
	function USER_PROFILE_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/user/profile/';
	 }
	 function USER_PROFILE_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/user/profile/';
	 }
	 function HOME_PAGE_BANNER_LOGO_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/setting/home_page_banner/';
	 }
	 function HOME_PAGE_BANNER_LOGO_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/setting/home_page_banner/';
	 }
	 function FRONT_CSS_PATH(){

		return UPLOAD_AND_DOWNLOAD_URL().'/public/front/css/';
	 }
	 function FRONT_JS_PATH(){

		return UPLOAD_AND_DOWNLOAD_URL().'/public/front/js/';
	 }
	 function FRONT_VENDOR_PATH(){

		return UPLOAD_AND_DOWNLOAD_URL().'/public/front/vendor/';
	 }
	 function FRONT_IMAGE_PATH(){

		return UPLOAD_AND_DOWNLOAD_URL().'/public/front/images/';
	 }
	 function DEFAULT_LANGUAGE($lang=null){

	 	if ($lang == null) {
			return 'en';
		}else{
			return $lang;
	 	}

	 }

	function SITE_PRODUCT_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/products/';
	}
	function SITE_PRODUCT_IMAGE_UPLOAD_URL(){

		return UPLOAD_AND_DOWNLOAD_URL().'public/upload/products/';
	}

	
	function SITE_MEMBERSHIP_IMAGE_UPLOAD_PATH(){

		return UPLOAD_AND_DOWNLOAD_PATH().'/upload/membership/';
	}
	 function MEMBERSHIP_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/membership/';
	 }
	function ADMIN_JS_URL()
	{
		return UPLOAD_AND_DOWNLOAD_URL().'public/admin/js/';
	}
	function ADMIN_CSS_URL()
	{
		return UPLOAD_AND_DOWNLOAD_URL().'public/admin/css/';
	}

	 function PSR_IMAGE_UPLOAD_PATH(){

	 	return UPLOAD_AND_DOWNLOAD_PATH().'/upload/postsourcingrequest/';
	 }
	 function PSR_IMAGE_UPLOAD_URL(){

	 	return UPLOAD_AND_DOWNLOAD_URL().'public/upload/postsourcingrequest/';
	 }
	function GENERATE_CSRF_TOKEN()
	{
		return "<input type='hidden' name='_token' value='".csrf_token()."'>";
	}
	function GET_SHOW_ON_HEADER_OR_FOOTER()
	{	
		$data =[ 

				"1"=>"Yes",
				"0"=>"No",
			];
		return $data;
	}
	function GET_SETTING_INFO($field)
	{	
		$setting = \App\Models\Setting::find(1)->$field;
		return $setting;
	}
    /**
     * This funciton is used to conver any title to slug
     * @param  $str
     * @param  $delimeter
     * @return string
     */
    function CREATE_SLUG($str, $delimiter = '-'){

        $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
        return $slug;
    } 

    /**
     * [GET_CATEGORY_BLOG_COUNT This function is used to get category blog count]
     */
    function GET_CATEGORY_BLOG_COUNT(){

	    $data = \App\Models\Category::select('id','slug','name','display_on_header','image')
                                    ->where('status',\App\Models\Category::STATUS_ACTIVE)
                                    ->has("multipleCategoryStatus")
                                    ->withCount('multipleCategoryStatus')
                                    ->with(["multipleCategoryStatus"=>function($rd){
                                     	$rd->where('status',1);
                                    }])
                                    ->get();
	    return $data;
    }

    /**
     * [SET_HOVER_COLOR This function is used to set hover color]
     */
    function SET_HOVER_COLOR($color){

    	$data = 'dd';
		return $data;
    }

    function thousandsCurrencyFormat($num) {

	  	if($num>1000) {

	        $x = round($num);
	        $x_number_format = number_format($x);
	        $x_array = explode(',', $x_number_format);
	        $x_parts = array('K', 'M', 'B', 'T');
	        $x_count_parts = count($x_array) - 1;
	        $x_display = $x;
	        $x_display = $x_array[0] . ((int) $x_array[1][0] !== 0 ? '.' . $x_array[1][0] : '');
	        $x_display .= $x_parts[$x_count_parts - 1];

	        return $x_display;

	  	}
		return $num;
	}

	function GENERATE_TOKEN()
	{
		$characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
		$token = '';
		for ($i = 0; $i < 6; $i++)
		{
			$token .= $characters[rand(0, strlen($characters) - 1)];
		}
		$token = time().$token.time();
		return $token;
	}

	function ALL_CATEGORY_LISTING($getAll){

		$categoryData =\App\Models\Category::select('id','slug','name','bg_color','image')
             							 ->where('status',\App\Models\Category::STATUS_ACTIVE)
             							 ->has("multipleCategoryStatus")
                                    	 ->withCount('multipleCategoryStatus')
                                    	 ->with(["multipleCategoryStatus"=>function($rd){
                                     		$rd->where('status',1);
                                   		 }]);
		if ($getAll == false) {
			
        	$categoryData = $categoryData->get();

		}else{

			$categoryData = $categoryData->paginate(6);
		}
		return $categoryData;
	}

	function WORD_LIMIT($name,$charLimit){

		return \Str::limit($name,$limit=$charLimit,$end='...');
	}	

	function GET_SEGMENT($segment){

		return \Request::segment($segment);
	}

	function CONSTANT_FOR_API(){

		return "api";
	}
	function CHECK_REQUEST_TIME_WEB_OR_API(){

		if (GET_SEGMENT(1) == CONSTANT_FOR_API()) {
				
			return true;	

		}else{

			return false;
		}
	}

	function GET_CMS_PAGE(){

		$data = \App\Models\Cms::select('id','slug','name','status')
                                    ->where('status',1)
                                    ->orderBy('name','ASC')
                                    ->get();
        return $data;                            
	}	

	function GET_FOOTER_CATEGORY(){

		$data = \App\Models\Category::select('id','slug','name','display_on_footer')
                                    ->where('status',\App\Models\Category::STATUS_ACTIVE)
                                    ->where('display_on_footer',1)
                                    ->has("multipleCategoryStatus")
                                    ->withCount('multipleCategoryStatus')
                                    ->with(["multipleCategoryStatus"=>function($rd){
                                        $rd->where('status',1);
                                    }])
                                    ->get();
        return $data;                            
	}	

	function GET_SETTINNG_DATA(){

		$data = \App\Models\Setting::first();
        return $data;                            
	}

	function GET_SOCIAL_MEDIA_DATA(){

		$data = \App\Models\SocialMedia::select('id','url','status','title')->where('status',1)->get();
        return $data;                            
	}

	function ADMIN_PREFIX_KEYWORD(){
		
		return "x100";
	}

	function CHECK_RIGHTS_TO_ACCESS($module_id)
	{
	    $authId = \Auth::user();
	    
	    if (!empty($authId->right_id) && $authId->right_id == \App\Models\Right::COSNT_ADMIN_RIGHT) {

	    	return true;

	    }
	    if (!empty($authId->right_id)) {
	    	
	        $module_data = $authId->right->right_modules->pluck('module_id')->toArray();
	        if (!empty($module_data)) {
	            if (in_array($module_id, $module_data)) {
	                return true;
	            } else {
	                return false;
	            }
	        } else {
	            return false;
	        }

	    } else {

	        return false;
	    }
	}

	function CHECK_RIGHTS_TO_ACCESS_DENIED($module_id,$authuserId)
	{
 		$authId=$authuserId;
		$right=\App\Models\Right::find($authId->right_id);
		$module_data=\App\Models\RightModule::where('status',\App\Models\RightModule::STATUS_ACTIVE)->where('right_id',$right->id)->pluck('module_id')->toArray();
		if (!empty($module_data)){
			if (in_array($module_id,$module_data)){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}


	function getCmsFooterAndTopSection($moduleId){

		$data = \App\Models\Cms::with(['multipleCmsModule','parent'=>function($query){

                            $query->where('status',1);
                        }])
                        ->where('status',\App\Models\Cms::STATUS_ACTIVE)
                        ->whereHas('multipleCmsModule',function($query) use($moduleId){
                            $query->where('module_id',$moduleId);
                        })
                        ->get();                        
        return $data;                

	}	

	function getCommonFunctionForSidebarCategory(){

		$data = \App\Models\Category::select('id','name','slug','status')
									->with(['subCategory'=>function($query){

										$query->select('id','name','slug','category_id','status')->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
			                            	  ->whereHas('products',function($pc){

			                            	  		$pc->select('id','category_id','status')
			                            	  			->where('status',\App\Models\Product::STATUS_ACTIVE);

			                            	  });

									}])
			                        ->where('status',\App\Models\Category::STATUS_ACTIVE)
			                        ->whereHas('subCategory',function($query){

			                            $query->select('id','name','slug','category_id','status')->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
			                            	  ->whereHas('products',function($pc){

			                            	  		$pc->select('id','category_id','status')
			                            	  			->where('status',\App\Models\Product::STATUS_ACTIVE);

			                            	  });
			                        })
			                        ->get();                        
        return $data;

	}

	function getDefaultCurrency(){

		return '₹';
	}

	function temp_storage_dir($dir = '')
    {
        return \Str::finish(public_path("temp/{$dir}"), '/');
    }

    function get_qualified_model($class_name = '')
    {
        return 'App\\Models\\' . Str::singular(Str::studly($class_name));
    }

    function getAllowedMinImgSize()
    {
        return config('system_settings.min_img_size_limit_kb') ?: config('image.min_size', 0);
    }
    
    function getAllowedMaxImgSize()
    {
        return config('system_settings.max_img_size_limit_kb') ?: config('image.max_size', 1024);
    }

	    
	if ( ! function_exists('image_storage_dir') )
	{
	    function image_storage_dir()
	    {
	        return config('image.dir');
	    }
	}

	if ( ! function_exists('sys_image_path') )
	{
	    function sys_image_path($dir = '')
	    {
	        return Str::finish("images/{$dir}", '/');
	    }
	}

	if ( ! function_exists('image_storage_path') )
	{
	    function image_storage_path($path = Null)
	    {
	        $path = image_storage_dir() . '/' . $path;
	        return Str::finish($path, '/');
	    }
	}

	if ( ! function_exists('image_cache_path') )
	{
	    function image_cache_path($path = Null)
	    {
	        $path = config('image.cache_dir') . '/' . $path;

	        return Str::finish($path, '/');
	    }
	}

	if ( ! function_exists('get_storage_file_url') )
	{
	    function get_storage_file_url($path = null, $size = 'small')
	    {
	        if (! $path) {
	            return get_placeholder_img($size);
	        }

	        if($size == Null) {
	            return url("image/{$path}");
	        }

	        return url("image/{$path}?p={$size}");
	    }
	}

	if ( ! function_exists('get_placeholder_img') )
	{
	    function get_placeholder_img($size = 'small')
	    {
	        $size = config("image.sizes.{$size}");

	        if ($size && is_array($size)) {
	            return "https://placehold.it/{$size['w']}x{$size['h']}/eee?text=" . trans('app.no_img_available');
	        }

	        return url("images/placeholders/no_img.png");
	    }
	}

	if ( ! function_exists('get_product_img_src') )
	{
	    function get_product_img_src($item = null, $size = 'medium', $type = 'primary')
	    {
	        if(! $item) {
	            return asset('images/placeholders/no_img.png');
	        }

	        if (is_numeric($item) && !($item instanceof Inventory)) {
	            $item = Inventory::findorFail($item);
	        }

	        $images_count = $item->images->count();

	        // If the listing has no images then pick the product images
	        if(! $images_count) {
	            $item = $item->product;
	            $images_count = $item->images->count();
	        }

	        if($images_count) {
	            if($type == 'alt' && $images_count > 1) {
	                $imgs = $item->images->toArray();
	                $path = $imgs[1]['path'];
	            }
	            else{
	                $path = $item->images->first()->path;
	            }

	            return url("image/{$path}?p={$size}");
	        }

	        return asset('images/placeholders/no_img.png');
	    }
	}

	if (! function_exists('get_inventory_img_src'))
	{
	    function get_inventory_img_src($item, $size = 'medium')
	    {
	        if ($item->image) {
	            return get_storage_file_url($item->image->path, $size);
	        }

	        if ($item->product->image) {
	            return get_storage_file_url($item->product->image->path, $size);
	        }

	        return asset('images/placeholders/no_img.png');
	    }
	}

	if (! function_exists('getDefaultPagiantion'))
	{
	    function getDefaultPagiantion()
	    {
	    	return '9';
	    }
	}

	function getHeaderCategory()
	{
		$category=\App\Models\Category::with(['subCategory','subCategory.products'])
		                              ->whereHas('subCategory',function($q)
		                              {
		                              	$q->select('id','name','slug')
		                              	  ->where('status',\App\Models\SubCategory::STATUS_ACTIVE)
		                              	  ->whereHas('products',function($qu)
		                              	  {
		                              	  	$qu->where('status',\App\Models\Product::STATUS_ACTIVE);
		                              	  });

		                              })
		                              ->where('status',\App\Models\Category::STATUS_ACTIVE)
		                              ->get();
         // dd($category);
          return $category;
	}

		


?>
