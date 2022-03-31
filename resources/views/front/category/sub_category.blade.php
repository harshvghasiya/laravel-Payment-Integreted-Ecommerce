@extends('layouts.app')
@section('title')
    @if(isset($title) && $title !="")
        <title>{{$title}} - {{trans('lang_data.company_com_label')}}</title>
    @else
        <title>{{trans('lang_data.welcome_to_company_com')}}</title>
    @endif 
@endsection
@section('style')
@endsection
@section('content')
<section class="men_area pt-40">
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-9 col-sm-9">
				<div class="product-filter">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-12">
			                <nav aria-label="breadcrumb">
			                    <ol class="breadcrumb">
			                        <li class="breadcrumb-item"><a href="{{route('front.home')}}"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
			                        <li class="breadcrumb-item" aria-current="page"> <a href="{{route('front.category.index',$subCategory->category->slug)}}">{{$subCategory->category->name}}</a></li>
			                        <li class="breadcrumb-item active" aria-current="page">{{$subCategory->name}}</li>
			                    </ol>
			                </nav>
			            </div>


					</div>
				</div>
				<div id="shop-all" class="row">
					@if(isset($products) && !$products->isEmpty())
						@foreach($products as $key=>$v)
							<div class="col-xs-12 col-sm-6 col-md-4 product-item filter-best">
								<div class="product-img">
									<img class="product_list_img" src="{{$v->getProductImageUrl('thumbnail_')}}" alt="{{$subCategory->name}}">
								</div>
								<div class="product-bio">
									<h4>
										<a href="{{route('front.product.detail',$v->slug)}}" title="{{$v->name}}">{{WORD_LIMIT($v->name,50)}}</a>
									</h4>
								</div>
							</div>
						@endforeach
						<div class="col-xs-12 col-sm-6 col-md-8 col-md-offset-5">
							{{ $products->links() }}
						</div>
					@else
						<div class="col-xs-12 col-sm-6 col-md-8 col-md-offset-5">
							<h4>Product not found</h4>	
						</div>
					@endif
				</div>
			</div>
			<aside class="col-md-3 sidebar">

				<div class="widget category-widget">

					<h3>Categories</h3>

					<ul id="category-widget">

						@foreach($sidebarCategory as $key=>$v)

							<li><a href="{{route('front.category.index',$v->slug)}}">{{$v->name}}

								<span class="category-widget-btn"></span></a>
								<ul>
									
									@if(isset($v->subCategory) && !$v->subCategory->isEmpty())
										@foreach($v->subCategory as $key2=>$v2)
											
											<li><a href="{{route('front.category.sub_category',$v2->slug)}}">{{$v2->name}}</a></li>

										@endforeach
									@endif
								</ul>
							</li>

						@endforeach
					</ul>
				</div>
				@include('front.common._request_catalog')
			</aside>
		</div>
	</div>
</section>

@include('layouts.flashmessage')
@endsection
@section('javascript')
@endsection
