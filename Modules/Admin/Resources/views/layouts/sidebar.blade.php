<div class="page-sidebar-wrapper">
	<div class="page-sidebar navbar-collapse collapse">
		<ul class="page-sidebar-menu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">	
			<?php 
				if (\Request()->route()->getName() == 'admin.dashboard') {
					$dashboard ='active'; 	
				}else{
					$dashboard = "";	
				}
			?>
			<li class="start {{$dashboard}}">
				<a href="{{route('admin.dashboard')}}">
				<i class="icon-home"></i>
				<span class="title">{{trans('lang_data.dashboard_label')}}</span>
				</a>
			</li>
			<?php 
				if (
					\Request()->route()->getName() == 'admin.banners.index' || 
					\Request()->route()->getName() == 'admin.banners.create' || 
					\Request()->route()->getName() == 'admin.banners.edit' || 
					\Request()->route()->getName() == 'admin.social_medias.index' || 
					\Request()->route()->getName() == 'admin.social_medias.create' || 
					\Request()->route()->getName() == 'admin.social_medias.edit' ||
					\Request()->route()->getName() == 'admin.contactus.index' || 
					\Request()->route()->getName() == 'admin.contactus.create' || 
					\Request()->route()->getName() == 'admin.contactus.edit' ||
					\Request()->route()->getName() == 'admin.news-letter.index' || 
					\Request()->route()->getName() == 'admin.news-letter.create' || 
					\Request()->route()->getName() == 'admin.news-letter.edit'
					) {
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_BANNER_MODULE) || 
				 CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_SOCIAL_MEDIA_MODULE) || 
				 CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CONTACT_US_MODULE) || 
				 CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_NEWSLETTER_MODULE) 
				)
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-share-alt-square" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.common_modules_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_BANNER_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.banners.index' || \Request()->route()->getName() == 'admin.banners.create' || \Request()->route()->getName() == 'admin.banners.edit')  class="active"  @endif><a href="{{route('admin.banners.index')}}"><i class="fa fa-file-image-o" aria-hidden="true"></i> Banner</a></li>
					@endif

					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_SOCIAL_MEDIA_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.social_medias.index' || \Request()->route()->getName() == 'admin.social_medias.create' || \Request()->route()->getName() == 'admin.social_medias.edit')  class="active"  @endif><a href="{{route('admin.social_medias.index')}}"><i class="icon-bell"></i> {{trans('lang_data.social_media_management_label')}}</a></li>
					@endif

					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CONTACT_US_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.contactus.index' || \Request()->route()->getName() == 'admin.contactus.create' || \Request()->route()->getName() == 'admin.contactus.edit')  class="active"  @endif><a href="{{route('admin.contactus.index')}}"><i class="icon-paper-plane"></i> {{trans('lang_data.contactus_label')}}</a></li>
					@endif

					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_NEWSLETTER_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.news-letter.index' || \Request()->route()->getName() == 'admin.news-letter.create' || \Request()->route()->getName() == 'admin.news-letter.edit')  class="active"  @endif><a href="{{route('admin.news-letter.index')}}"><i class="icon-eye"></i> {{trans('lang_data.news_letter_label_single')}}</a></li>
					@endif
				</ul>
			</li>
			@endif
			<?php 

				if (
					\Request()->route()->getName() == 'admin.category.index' || 
					\Request()->route()->getName() == 'admin.category.create' || 
					\Request()->route()->getName() == 'admin.category.edit' ||
					\Request()->route()->getName() == 'admin.sub_category.index' || 
					\Request()->route()->getName() == 'admin.sub_category.create' || 
					\Request()->route()->getName() == 'admin.sub_category.edit' 

					) 
				{
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CATEGORY_MODULE) || CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_SUB_CATEGORY_MODULE))
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-list-alt" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.category_management_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CATEGORY_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.category.index' || \Request()->route()->getName() == 'admin.category.create' || \Request()->route()->getName() == 'admin.category.edit')  class="active"  @endif><a href="{{route('admin.category.index')}}"><i class="icon-handbag"></i> {{trans('lang_data.category_label')}}</a></li>
					@endif
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_SUB_CATEGORY_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.sub_category.index' || \Request()->route()->getName() == 'admin.sub_category.create' || \Request()->route()->getName() == 'admin.sub_category.edit')  class="active"  @endif><a href="{{route('admin.sub_category.index')}}"><i class="icon-handbag"></i> {{trans('lang_data.sub_category_label')}}</a></li>
					@endif
				</ul>
			</li>
			@endif

			<?php 

				if (
					\Request()->route()->getName() == 'admin.country.index' || 
					\Request()->route()->getName() == 'admin.country.create' || 
					\Request()->route()->getName() == 'admin.country.edit' 

					) 
				{
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_COUNTRY_MODULE))
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-map-marker" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.location_management_keyword')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_COUNTRY_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.country.index' || \Request()->route()->getName() == 'admin.country.create' || \Request()->route()->getName() == 'admin.country.edit')  class="active"  @endif><a href="{{route('admin.country.index')}}"><i class="fa fa-map-marker"></i> {{trans('lang_data.country_label')}}</a></li>
					@endif
				</ul>
			</li>
			@endif

			<?php 

				if (
					\Request()->route()->getName() == 'admin.product.index' || 
					\Request()->route()->getName() == 'admin.product.create' || 
					\Request()->route()->getName() == 'admin.product.edit' || 
					\Request()->route()->getName() == 'admin.brand.index' || 
					\Request()->route()->getName() == 'admin.brand.create' || 
					\Request()->route()->getName() == 'admin.brand.edit'  

					) 
				{
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_PRODUCT_MODULE) || CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_BRAND_MODULE))
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-list-alt" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.product_management_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_PRODUCT_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.product.index' || \Request()->route()->getName() == 'admin.product.create' || \Request()->route()->getName() == 'admin.product.edit')  class="active"  @endif><a href="{{route('admin.product.index')}}"><i class="icon-handbag"></i> {{trans('lang_data.product_label')}}</a></li>
					@endif
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_BRAND_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.brand.index' || \Request()->route()->getName() == 'admin.brand.create' || \Request()->route()->getName() == 'admin.brand.edit')  class="active"  @endif><a href="{{route('admin.brand.index')}}"><i class="icon-handbag"></i> {{trans('lang_data.brand_label')}}</a></li>
					@endif
				</ul>
			</li>
			@endif
			<?php 

				if (
					\Request()->route()->getName() == 'admin.right.index' || 
					\Request()->route()->getName() == 'admin.right.create' || 
					\Request()->route()->getName() == 'admin.right.edit'  ||
					\Request()->route()->getName() == 'admin.admin_user.index' || 
					\Request()->route()->getName() == 'admin.admin_user.create' || 
					\Request()->route()->getName() == 'admin.admin_user.edit'  

					) 
				{
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_RIGHT_MODULE) || 
				 CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_ADMIN_USER_MODULE) 
				)
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-users" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.admin_management_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_RIGHT_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.right.index' || \Request()->route()->getName() == 'admin.right.create' || \Request()->route()->getName() == 'admin.right.edit')  class="active"  @endif><a href="{{route('admin.right.index')}}"><i class="icon-diamond"></i> {{trans('lang_data.right')}}</a></li>
					@endif
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_ADMIN_USER_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.admin_user.index' || \Request()->route()->getName() == 'admin.admin_user.create' || \Request()->route()->getName() == 'admin.admin_user.edit')  class="active"  @endif><a href="{{route('admin.admin_user.index')}}"><i class="icon-user"></i> {{trans('lang_data.admin_user')}}</a></li>
					@endif
				</ul>
			</li>
			@endif

			<?php 

				if (
					\Request()->route()->getName() == 'admin.blogs.index' || 
					\Request()->route()->getName() == 'admin.blogs.create' || 
					\Request()->route()->getName() == 'admin.blogs.edit' 
					) 
				{
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>
			
			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_BLOG_MODULE))
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-info-circle" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.blog_mng_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_BLOG_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.blogs.index' || \Request()->route()->getName() == 'admin.blogs.create' || \Request()->route()->getName() == 'admin.blogs.edit')  class="active"  @endif><a href="{{route('admin.blogs.index')}}"><i class="icon-speech"></i> {{trans('lang_data.blog_label')}}</a></li>
					@endif
				</ul>
			</li>
			@endif
			<?php 

				if (
					\Request()->route()->getName() == 'admin.cms.index' || 
					\Request()->route()->getName() == 'admin.cms.create' || 
					\Request()->route()->getName() == 'admin.cms.edit' ||						
					\Request()->route()->getName() == 'admin.modules.index' || 
					\Request()->route()->getName() == 'admin.modules.create' || 
					\Request()->route()->getName() == 'admin.modules.edit' 
					) 
				{
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CMS_MODULE) ||
				 CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CMS_MODULE_MODULE)
				)
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-database" aria-hidden="true"></i>
				<span class="title">{{trans('lang_data.content_management_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}};">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CMS_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.cms.index' || \Request()->route()->getName() == 'admin.cms.create' || \Request()->route()->getName() == 'admin.cms.edit')  class="active"  @endif><a href="{{route('admin.cms.index')}}"><i class="icon-docs"></i> {{trans('lang_data.pages_module_label')}}</a></li>
					@endif
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_CMS_MODULE_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.modules.index' || \Request()->route()->getName() == 'admin.modules.create' || \Request()->route()->getName() == 'admin.modules.edit')  class="active"  @endif><a href="{{route('admin.modules.index')}}"><i class="icon-speech"></i> {{trans('lang_data.module_label')}}</a></li>
					@endif
				</ul>
			</li>
			@endif	
			<?php 

				if (\Request()->route()->getName() == 'admin.settings.index') {
					$commonModule ='class=open'; 
					$commonModuleBlock ="block"; 
				}else{
					$commonModule = "";
					$commonModuleBlock = "none";
				}
			?>

			@if( CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_SETTINNG_MODULE))
			<li {{$commonModule}}>
				<a href="javascript:;">
				<i class="fa fa-gear"></i>
				<span class="title">{{trans('lang_data.general_setting_label')}}</span>
				<span class="arrow "></span>
				</a>
				<ul class="sub-menu" style="display: {{$commonModuleBlock}}">
					@if(CHECK_RIGHTS_TO_ACCESS(App\Models\Acl::CONST_SETTINNG_MODULE))
					<li @if(\Request()->route()->getName() == 'admin.settings.index')  class="active"  @endif><a href="{{route('admin.settings.index')}}"> <i class="fa fa-gear"></i> {{trans('lang_data.setting_label')}}</a></li>
					@endif
				</ul>
			</li>
			@endif
		</ul>
	</div>
</div>
