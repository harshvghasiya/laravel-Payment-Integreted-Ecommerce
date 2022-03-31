<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// echo "innn";exit;
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

 Route::group(['middleware'=>['cors']],function(){

	Route::get('ApiHomePagePopularpost','API\CommonApiController@ApiHomePagePopularpost');
	Route::get('ApiFooterCmsPage','API\CommonApiController@ApiFooterCmsPage');
	Route::get('ApiFooterCategory','API\CommonApiController@ApiFooterCategory');
	Route::get('ApiGetSettingData','API\CommonApiController@ApiGetSettingData');
	Route::get('ApiGetSocialMedia','API\CommonApiController@ApiGetSocialMedia');
	Route::get('ApiGetAllCategoryList','API\CommonApiController@ApiGetAllCategoryList');
	Route::get('ApiGetCmsPageDetail/{slug}','API\CommonApiController@ApiGetCmsPageDetail');
	Route::get('ApiGetHomePageLatestPost','API\CommonApiController@ApiGetHomePageLatestPost');
	Route::get('ApiGetAllCommonCategoryList','API\CommonApiController@ApiGetAllCommonCategoryList');
	Route::get('ApigetSingleBlogDetail/{slug}','API\CommonApiController@ApigetSingleBlogDetail');
	
 });
