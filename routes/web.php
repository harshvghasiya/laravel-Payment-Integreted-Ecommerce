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
Route::group(['as'=>'front.','middleware'=>'user_login_check'],function(){
	 Route::get('login','UserLoginController@index')->name('user.login'); 
	Route::any('login_amt','UserLoginController@login')->name('user.login_amt'); 
	Route::get('register','UserLoginController@registerView')->name('user.register'); 
	Route::any('register_store','UserLoginController@registerStore')->name('user.register_store'); 
	Route::any('change-password','UserLoginController@changePassword')->name('user.change_password_index'); 
});

Route::group(['as'=>'front.'],function(){

   
	Route::get('logout','UserLoginController@logout')->name('user.logout'); 

	Route::get('/','HomeController@index')->name('home'); 
	Route::get('/my-account','HomeController@myAccount')->name('myaccount'); 
	Route::get('/order-history','HomeController@orderHistory')->name('order.history'); 
	Route::get('products','ProductController@index')->name('product.index'); 
	Route::any('cart','CartController@index')->name('cart.index'); 
	Route::any('add-to-cart','CartController@addToCart')->name('cart.addtocart'); 
	Route::any('cart_delete','CartController@cartDelete')->name('cart.cart_delete'); 
	Route::any('upd_quantity','CartController@updQuantity')->name('cart.upd_quantity'); 
	Route::get('products/{slug}','ProductController@detail')->name('product.detail'); 
	Route::get('collection/{slug}','ProductController@collection')->name('product.list'); 
	Route::get('checkout','CartController@checkout')->name('checkout.list'); 

	Route::any('payment','PaymentController@index')->name('payment.index'); 
	Route::post('payment_complete','PaymentController@store')->name('payment.complete'); 
	

	Route::get('category/{slug}','CategoryController@category')->name('category.index'); 
	Route::get('sub-category/{slug}','CategoryController@subCategory')->name('category.sub_category'); 

	// NEWS LETTER
	Route::any('news-letter/store', 'NewsLetterController@storeFrontNewsLetter')->name('news-letter.store');
	Route::any('news-letter/verify/{token}', 'NewsLetterController@verifyFrontNewsLetter')->name('news-letter.verify_front_news_letter'); 
	

	Route::any('conatct-us/store', 'ContactUsController@storeFrontContactUs')->name('contact_us.store');
	
	Route::get('page/{slug}','CmsController@detail')->name('cms.details'); 

});

