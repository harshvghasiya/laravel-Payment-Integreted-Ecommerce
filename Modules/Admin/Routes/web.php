<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['middleware' => ['web'],'prefix' => ADMIN_PREFIX_KEYWORD()], function()
{
    Route::any('login', 'LoginController@login')->name('admin.login.main');
    Route::any('forgot-password', 'LoginController@forgotPassword')->name('admin.forgot_password');
    Route::any('reset-password/{id}', 'LoginController@resetPassword')->name('admin.reset_password');
    Route::any('update-password', 'LoginController@updatePassword')->name('admin.update_password');
    Route::any('x/login', 'LoginController@postLogin')->name('admin.login');
    
});

Route::group(['middleware' => ['web','admin_auth'], 'prefix' => ADMIN_PREFIX_KEYWORD(), 'as'=>'admin.'],function(){



    Route::get('download/{image}', 'ImageController@download')->name('image.download');

    Route::post('delete/{image}', 'ImageController@delete')->name('image.delete');

    Route::post('upload', 'ImageController@upload')->name('image.upload');

    Route::post('image/sort', 'ImageController@sort')->name('image.sort');
    

    Route::any('/save_tinymce_image', 'PluginController@saveTinymceImage')->name("save_tinymce_image");
    Route::any("/upload_image", 'PluginController@upload_image')->name('upload_img');
    Route::any("/deleteUploadedImage", 'PluginController@deleteUploadedImage')->name('delete_upload_img');
    Route::any("/upload_cropped_image", 'PluginController@upload_cropped_image')->name('upload_img_crop');
    
    Route::get('/', 'AdminController@index');
    Route::get('/logout','LoginController@logout')->name('logout');
    Route::get('/dashboard', 'AdminDashboardController@index')->name('dashboard');


    // EDIT USER PROFILE

    Route::any('user-profile/edit/{id}','AdminController@editUserProfile')->name('profile.edit_user_profile');

    // Banner Content ROUTES
    Route::any('banners/get','BannerController@anyData')->name('banners.any_data');
    Route::any('banners/single_status_change','BannerController@SingleStatusChange')->name('banners.single_status_change');
    Route::any('banners/delete-all','BannerController@deleteAll')->name('banners.delete_all');
    Route::any('banners/status-all','BannerController@statusAll')->name('banners.status_all');
    Route::resource('banners','BannerController');

    // SETTING ROUTES
    Route::resource('settings','SettingController');

    // EMAIL TEMPLATE ROUTES
    Route::any('email-template/preview/{id}','EmailTemplateController@preview')->name('email-template.preview');
    Route::any('email-template/get','EmailTemplateController@anyData')->name('email-template.any_data');
    Route::any('email-template/single_status_change','EmailTemplateController@SingleStatusChange')->name('email-template.single_status_change');
    Route::any('email-template/delete-all','EmailTemplateController@deleteAll')->name('email-template.delete_all');
    Route::any('email-template/status-all','EmailTemplateController@statusAll')->name('email-template.status_all');
    Route::resource('email-template','EmailTemplateController');

    // Social Media ROUTES
    Route::any('social_medias/get','SocialMediaController@anyData')->name('social_medias.any_data');
    Route::any('social_medias/single_status_change','SocialMediaController@SingleStatusChange')->name('social_medias.single_status_change');
    Route::any('social_medias/delete-all','SocialMediaController@deleteAll')->name('social_medias.delete_all');
    Route::any('social_medias/status-all','SocialMediaController@statusAll')->name('social_medias.status_all');
    Route::resource('social_medias','SocialMediaController');

    // CONTACT US ROUTE
    Route::any('contactus/get','ContactusController@anyData')->name('contactus.any_data');
    Route::any('contactus/delete-all','ContactusController@deleteAll')->name('contactus.delete_all');
    Route::any('contactus/status-all','ContactusController@statusAll')->name('contactus.status_all');
     Route::any('contactus/single_status_change','ContactusController@SingleStatusChange')->name('contactus.single_status_change');
    Route::resource('contactus','ContactusController');

    // NEWSLETTER ROUTES
    Route::any('news-letter/get','NewsLetterController@anyData')->name('news-letter.any_data');
    Route::any('news-letter/delete-all','NewsLetterController@deleteAll')->name('news-letter.delete_all');
    Route::any('news-letter/status-all','NewsLetterController@statusAll')->name('news-letter.status_all');
    Route::any('news-letter/single_status_change','NewsLetterController@SingleStatusChange')->name('news-letter.single_status_change');
    Route::resource('news-letter','NewsLetterController');

    //PRODUCT ROUTES
    Route::any('brand/get','BrandController@anyData')->name('brand.any_data');
    Route::any('brand/single_status_change','BrandController@SingleStatusChange')->name('brand.single_status_change');
    Route::any('brand/delete-all','BrandController@deleteAll')->name('brand.delete_all');
    Route::any('brand/status-all','BrandController@statusAll')->name('brand.status_all');
    Route::resource('brand','BrandController');

    //PRODUCT ROUTES
    Route::any('product/get','ProductController@anyData')->name('product.any_data');
    Route::any('product/single_status_change','ProductController@SingleStatusChange')->name('product.single_status_change');
    Route::any('product/delete-all','ProductController@deleteAll')->name('product.delete_all');
    Route::any('product/status-all','ProductController@statusAll')->name('product.status_all');
    Route::any('product/single-feature-delete','ProductController@singleFeatureDelete')->name('product.single_feature_delete');
    Route::resource('product','ProductController');

    //CATEGORY ROUTES
    Route::any('country/get','CountryController@anyData')->name('country.any_data');
    Route::any('country/single_status_change','CountryController@SingleStatusChange')->name('country.single_status_change');
    Route::any('country/delete-all','CountryController@deleteAll')->name('country.delete_all');
    Route::any('country/status-all','CountryController@statusAll')->name('country.status_all');
    Route::resource('country','CountryController');


    //CATEGORY ROUTES
    Route::any('category/get','CategoryController@anyData')->name('category.any_data');
    Route::any('category/single_status_change','CategoryController@SingleStatusChange')->name('category.single_status_change');
    Route::any('category/delete-all','CategoryController@deleteAll')->name('category.delete_all');
    Route::any('category/status-all','CategoryController@statusAll')->name('category.status_all');
    Route::resource('category','CategoryController');

    //SUB CATEGORY ROUTES
    Route::any('sub_category/get','SubCategoryController@anyData')->name('sub_category.any_data');
    Route::any('sub_category/single_status_change','SubCategoryController@SingleStatusChange')->name('sub_category.single_status_change');
    Route::any('sub_category/delete-all','SubCategoryController@deleteAll')->name('sub_category.delete_all');
    Route::any('sub_category/status-all','SubCategoryController@statusAll')->name('sub_category.status_all');
    Route::resource('sub_category','SubCategoryController');

    // BLOG ROUTES
    Route::any('blogs/get','BlogController@anyData')->name('blogs.any_data');
    Route::any('blogs/delete-all','BlogController@deleteAll')->name('blogs.delete_all');
    Route::any('blogs/status-all','BlogController@statusAll')->name('blogs.status_all');
    Route::any('blogs/single_status_change','BlogController@SingleStatusChange')->name('blogs.single_status_change');
    Route::resource('blogs','BlogController');

    // MODULE ROUTES
    Route::any('modules/get','ModuleController@anyData')->name('modules.any_data');
    Route::any('modules/delete-all','ModuleController@deleteAll')->name('modules.delete_all');
    Route::any('modules/status-all','ModuleController@statusAll')->name('modules.status_all');
    Route::any('modules/single_status_change','ModuleController@SingleStatusChange')->name('modules.single_status_change');
    Route::resource('modules','ModuleController');

     // ORDER ROUTES
    Route::any('orders/get','OrderController@anyData')->name('orders.any_data');
    Route::any('orders/order_product/{id}','OrderController@productData')->name('orders.order_product');
    Route::any('orders/delete-all','OrderController@deleteAll')->name('orders.delete_all');
    Route::any('orders/status-all','OrderController@statusAll')->name('orders.status_all');
    Route::any('orders/single_status_change','OrderController@SingleStatusChange')->name('orders.single_status_change');
    Route::any('orders-detail/{id}','OrderController@orderDetail')->name('orders.detail');
    Route::resource('orders','OrderController');

    // CMS ROUTES
    Route::any('cms/get','CmsController@anyData')->name('cms.any_data');
    Route::any('cms/delete-all','CmsController@deleteAll')->name('cms.delete_all');
    Route::any('cms/status-all','CmsController@statusAll')->name('cms.status_all');
    Route::any('cms/single_status_change','CmsController@SingleStatusChange')->name('cms.single_status_change');
    Route::resource('cms','CmsController');

    // ACL ROUTES
    Route::any('acl/get','AclController@anyData')->name('acl.any_data');
    Route::any('acl/delete-all','AclController@deleteAll')->name('acl.delete_all');
    Route::any('acl/status-all','AclController@statusAll')->name('acl.status_all');
    Route::any('acl/single_status_change','AclController@SingleStatusChange')->name('acl.single_status_change');
    Route::resource('acl','AclController');

    // RIGHTS ROUTES
    Route::any('right/get','RightController@anyData')->name('right.any_data');
    Route::any('right/delete-all','RightController@deleteAll')->name('right.delete_all');
    Route::any('right/status-all','RightController@statusAll')->name('right.status_all');
    Route::any('right/single_status_change','RightController@SingleStatusChange')->name('right.single_status_change');
    Route::resource('right','RightController');    


    // ADMIN USER ROUTES
    Route::any('admin_user/get','AdminUserController@anyData')->name('admin_user.any_data');
    Route::any('admin_user/delete-all','AdminUserController@deleteAll')->name('admin_user.delete_all');
    Route::any('admin_user/status-all','AdminUserController@statusAll')->name('admin_user.status_all');
    Route::any('admin_user/single_status_change','AdminUserController@SingleStatusChange')->name('admin_user.single_status_change');
    Route::resource('admin_user','AdminUserController');

});