@extends('layouts.app')
@section('title')
    @if(isset($title) && $title !="")
        <title>{{$title}} - {{trans('lang_data.company_com_label')}}</title>
    @else
        <title>{{trans('lang_data.welcome_to_company')}}</title>
    @endif 
@endsection
@section('style')
@endsection
@section('content')
{{-- <section id="content-block" class="slider_area">
	<div class="container">
		<div class="content-push">
			<div class="row">
				<div class="col-md-3 col-md-push-9">
					@if(isset($sidebarCategory) && !$sidebarCategory->isEmpty())
						<div class="sidebar-navigation">
							<div class="title">Product Categories<i class="fa fa-angle-down"></i></div>
							<div class="list">
								<aside class="sidebar">
									<div class="widget category-widget">
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
								</aside>
							</div>
						</div>
					@endif
					<div class="clear"></div>

					@include('front.common._request_catalog')

				</div>

				<div class="col-md-9 col-md-pull-3">

					<div class="header_slider">
						<article class="boss_slider">
							<div class="tp-banner-container">
								<div class="tp-banner tp-banner0">
									<ul>
										
										@if(isset($banners) && !$banners->isEmpty())

											@foreach($banners as $key=>$v)

												<li data-link="javascript:void(0)" data-target="_self" data-transition="flyin" data-slotamount="7" data-masterspeed="500" data-saveperformance="on">
													<img src="{{$v->getBannerImageUrl('thumbnail_')}}" alt="slidebg1" data-lazyload="{{$v->getBannerImageUrl('thumbnail_')}}" data-bgposition="left center" data-kenburns="off" data-duration="14000" data-ease="Linear.easeNone" data-bgpositionend="right center" />
												</li>

											@endforeach

										@else

											<li data-link="javascript:void(0)" data-target="_self" data-transition="flyin" data-slotamount="7" data-masterspeed="500" data-saveperformance="on">
												<img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/img/dummy.png" alt="slidebg1" data-lazyload="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/img/slide/slider1.png" data-bgposition="left center" data-kenburns="off" data-duration="14000" data-ease="Linear.easeNone" data-bgpositionend="right center" />
											</li>

										@endif

									</ul>
									<div class="slideshow_control"></div>
								</div>
							</div>
						</article>
					</div>

					<div class="clear"></div>

				</div>

			</div>
		</div>
	</div>
</section> --}}

    @if(isset($banners) && $banners != null)
      <div class="page-slider margin-bottom-35">
        <div id="layerslider" style="width: 100%; height: 494px; margin: 0 auto;">       
          @foreach($banners as $key=>$result)
          <div class="ls-slide ls-slide1" data-ls="offsetxin: right; slidedelay: 7000; transition2d: 24,25,27,28;">
            <img src="{{$result->getBannerImageUrl()}}" class="ls-bg" alt="Slide background">
          </div>
          @endforeach
        </div>
      </div>
    @endif

 <div class="main">
      <div class="container">
        <!-- BEGIN SALE PRODUCT & NEW ARRIVALS -->
        <div class="row margin-bottom-40 ">
          <!-- BEGIN CONTENT -->
          @if(isset($latestProduct) && $latestProduct != null)
          <div class="col-md-12 ">
            <h2 class="text-center">New Arrivals</h2>
            <div class="owl-carousel owl-carousel5">
              @foreach($latestProduct as $key=>$result)
                <div>
                  <div class="product-item">
                    <div class="pi-img-wrapper">
                      <img src="{{$result->getProductImageUrl()}}" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="{{$result->getProductImageUrl()}}" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html">{{$result->name}}</a></h3>
                    <div class="pi-price">RS. {{$result->price}}</div>
                    <a href="javascript:;"  data-id="{{Crypt::encrypt($result->id)}}" class="btn btn-default add2cart">Add to cart</a>
                    <div class="sticker sticker-new"></div>
                  </div>
                </div>
              @endforeach
            </div>
            <a href="{{route('front.product.list','new-arrivals')}}" class="btn red btn-block ">Show More</a>
          </div>
          @endif
        </div>
        <!-- END SIDEBAR & CONTENT -->

        @if(isset($featureProduct) && $featureProduct !=null)
          <div class="row margin-bottom-40">
            <!-- BEGIN SALE PRODUCT -->
            <div class="col-md-12 sale-product">
              <h2 class="text-center">Featured Collection</h2>
              {{-- <div class="owl-carousel owl-carousel5">
                @foreach($featureProduct as $key=>$result)
                <div>
                  <div class="product-item">
                    <div class="pi-img-wrapper">
                      <img src="{{$result->getCategoryImageUrl()}}" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="{{$result->getCategoryImageUrl()}}" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html"></a></h3>
                    <div class="pi-price">{{$result->name}} </div>
                    
                  </div>
                </div>
                @endforeach
              </div> --}}
              <div class="content-page">
                <div class="row mix-grid thumbnails">
                  @foreach($featureProduct as $key=>$result)
                    <div class="col-md-3 col-sm-4 mix category_1 mix_all" style="display: block; opacity: 1; ">
                      <div class="mix-inner">
                          <img alt="" src="{{$result->getCategoryImageUrl()}}" class="img-responsive">
                              <div class="mix-details">
                                  <h4>{{$result->name}}</h4>
                                    <a class="mix-link" href="{{route('front.category.index',$result->slug)}}"><i class="fa fa-link"></i></a>
                                    <a data-rel="fancybox-button" title="{{$result->name}}e" href="{{$result->getCategoryImageUrl()}}" class="mix-preview fancybox-button"><i class="fa fa-search"></i></a>
                              </div>           
                              <div>
                                  <h4>{{$result->name}}</h4>
                              </div>
                      </div>                       
                    </div>                
                  @endforeach       
                </div>
              </div>
            </div>
            <!-- END SALE PRODUCT -->
          </div>
        @endif  
        <div class="row margin-bottom-40">
          <!-- BEGIN SALE PRODUCT -->
          <div class="col-md-12 sale-product">
            <h2 class="text-center">Hot Products</h2>
            <div class="owl-carousel owl-carousel5">
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model1.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                  <div class="pi-price">$29.00</div>
                  <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                  <div class="sticker sticker-sale"></div>
                </div>
              </div>
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model2.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                  <div class="pi-price">$29.00</div>
                  <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                </div>
              </div>
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model6.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model6.jpg" class="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                  <div class="pi-price">$29.00</div>
                  <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                </div>
              </div>
              <div>
                  <div class="product-item">
                    <div class="pi-img-wrapper">
                      <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model4.jpg" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model4.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="javascript:;">Berry Lace Dress4</a></h3>
                    <div class="pi-price">$29.00</div>
                    <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                    <div class="sticker sticker-new"></div>
                  </div>
              </div>
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model5.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model5.jpg" class="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
                  <div class="pi-price">$29.00</div>
                  <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                </div>
              </div>
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model3.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model3.jpg" class="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
                  <div class="pi-price">$29.00</div>
                  <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                </div>
              </div>
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model7.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model7.jpg" class="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
                  <div class="pi-price">$29.00</div>
                  <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <!-- END SALE PRODUCT -->
        </div>

         
              @if(isset($category_home) && !$category_home->isEmpty())       
              @foreach($category_home as $key=>$result)
                <div class="row product-list">
               <h2 class="text-center">{{$result->name}}</h2>
               @if($result->subCategory !=null)
                @foreach($result->subCategory as $k=>$r)
                @if(!$r->products->isEmpty())
                @foreach($r->products as $ke=>$re)
                <div class="col-md-3 col-sm-5 col-xs-12">
                  <div class="product-item">
                    <div class="pi-img-wrapper">
                      <img src="{{$re->getProductImageUrl()}}" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="{{$re->getProductImageUrl()}}" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html">{{$re->name}}</a></h3>
                    <div class="pi-price">R {{$re->price}}</div>
                    <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                  </div>
                </div>
                @endforeach
                @endif
                @endforeach
                @endif
               </div>

              @endforeach 
              @endif             
      </div>
 </div>



@include('layouts.flashmessage')
@endsection
@section('javascript')

@endsection
