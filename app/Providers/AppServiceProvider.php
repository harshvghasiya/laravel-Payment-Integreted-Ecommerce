<?php

namespace App\Providers;

use App\Validator\CustomeValidator;
use Validator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Request $request)
    {
        $socialMediaContent = GET_SOCIAL_MEDIA_DATA();
        $setting = GET_SETTINNG_DATA();
        
        $headerSectionLink = getCmsFooterAndTopSection(\App\Models\Module::CONST_DISPLAY_ON_HEADER);
        $headerCategory=getHeaderCategory();
        
        $footerInformation = getCmsFooterAndTopSection(\App\Models\Module::CONST_FOOTER_INFORMATION); 
        $footerExtra = getCmsFooterAndTopSection(\App\Models\Module::CONST_FOOTER_EXTRA); 
        $cart_product=\App\Cart::with(['product'])->where('ip',$request->ip())->get();
        $cart_count=$cart_product->count();


        // dd($headerCategory);
        
        view()->share(['socialMediaContent'=>$socialMediaContent,'setting'=>$setting,'headerCategory'=>$headerCategory,'footerExtra'=>$footerExtra,'footerInformation'=>$footerInformation,'cart_count'=>$cart_count,'cart_product'=>$cart_product]);

        $this->app->validator->resolver(function($translator, $data, $rules, $messages) {
            return new CustomeValidator($translator, $data, $rules, $messages);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
