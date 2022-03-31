  <!-- BEGIN TOP BAR -->
    <div class="pre-header">
        <div class="container">
            <div class="row">
                <!-- BEGIN TOP BAR LEFT PART -->
                <div class="col-md-6 col-sm-6 additional-shop-info">
                    <ul class="list-unstyled list-inline">
                       @if(isset($setting) && $setting->mobile != null)<li><i class="fa fa-phone"></i><span>{{$setting->mobile}}</span></li>@endif
                        <!-- BEGIN CURRENCIES -->
                        @if(isset($setting) && $setting->email != null)
                         <li class="shop-currencies">
                            <a href="mailto:{{$setting->email}}">{{$setting->email}}</a>
                        </li>
                        @endif
                        <!-- END CURRENCIES -->
                        
                    </ul>
                </div>
                <!-- END TOP BAR LEFT PART -->
                <!-- BEGIN TOP BAR MENU -->
                <div class="col-md-6 col-sm-6 additional-nav">
                    <ul class="list-unstyled list-inline pull-right">
                        @if(Auth::guard('user_login')->check())
                        <li><a href="{{route('front.myaccount')}}">My Account</a></li>
                        <li><a href="{{route('front.user.logout')}}">Logout</a></li>
                        @else
                        <li><a href="{{route('front.user.register')}}">Register</a></li>
                        <li><a href="{{route('front.user.login')}}">Log In</a></li>
                        @endif
                    </ul>
                </div>
                <!-- END TOP BAR MENU -->
            </div>
        </div>        
    </div>
    <!-- END TOP BAR -->

    <!-- BEGIN HEADER -->
    <div class="header">
      <div class="container">
        <a class="site-logo" href="{{route('front.home')}}"><img src="{{$setting->getSettingLogoImageUrl()}}" alt="Metronic Shop UI"></a>

        <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>

        <!-- BEGIN CART -->
        <div class="top-cart-block">
          <div class="top-cart-info">
            <a href="{{route('front.cart.index')}}" class="top-cart-info-count count_cart">{{$cart_count}} items</a>
            <a href="javascript:void(0);" class="top-cart-info-value"></a>
          </div>
          <i class="fa fa-shopping-cart"></i>
                        
          <div class="top-cart-content-wrapper">
            <div class="top-cart-content">
              <ul class="scroller cart_item" style="height: 250px;">
                @if(isset($cart_product) && !$cart_product->isEmpty())
                  @foreach($cart_product as $key=>$result)
                      <li>
                        <a href="shop-item.html"><img src="{{$result->product->getProductImageUrl()}}" alt="{{$result->product->name}}" width="37" height="34"></a>
                        <span class="cart-content-count">x 1</span>
                        <strong><a href="shop-item.html">{{$result->product->name}}</a></strong>
                        <em>Rs. {{$result->product->price}}</em>
                        <a href="javascript:void(0);" data-cart_id="{{Crypt::encrypt($result->id)}}" class="del-goods del_cart_sm">&nbsp;</a>
                      </li>
                  @endforeach
                @else
                <li class="no_item_cart">No Product in cart</li>
                @endif
              </ul>
              <div class="text-right">
                <a href="{{route('front.cart.index')}}" class="btn btn-default">View Cart</a>
              </div>
            </div>
          </div>            
        </div>
        <!--END CART -->

        <!-- BEGIN NAVIGATION -->
        <div class="header-navigation">
          <ul>
              @php      
                  if (\Request::route()->getName() == 'front.home') {
                    $homePageActiveClass = 'active';  
                  }else{
                    $homePageActiveClass ='';
                  }
              @endphp
            <li class="{{$homePageActiveClass}}"><a href="{{route('front.home')}}">Home</a></li>

              @if(isset($headerCategory) && !$headerCategory->isEmpty())
              @foreach($headerCategory as $key=>$v)
              @php 
              if (\Request::route()->getName() == 'front.category.index' && \Request::segment(1) == $v->slug) {
                $categoryActiveClass = 'active'; 
              }else{
                $categoryActiveClass ='';
              }
              @endphp
              @if(!$v->subCategory->isEmpty())
                <li class="dropdown {{$categoryActiveClass}}">
                  <a class="dropdown-toggle" data-toggle="dropdown" data-target="{{route('front.category.index',$v->slug)}}" href="{{route('front.category.index',$v->slug)}}">
                    {{$v->name}}  
                  </a>
                    
                  <ul class="dropdown-menu">
                    @foreach($v->subCategory as $key=>$value)
                    <li><a href="{{route('front.category.sub_category',$value->slug)}}">{{$value->name}}</a></li>
                    @endforeach 
                  </ul>
                </li>
              @else
              <li class="{{$categoryActiveClass}}"><a href="{{route('front.category.index',$v->slug)}}" >{{$v->name}}</a></li>
             @endif             
             @endforeach
             @endif

            <!-- BEGIN TOP SEARCH -->
            <li class="menu-search">
              <span class="sep"></span>
              <i class="fa fa-search search-btn"></i>
              <div class="search-box">
                <form action="#">
                  <div class="input-group">
                    <input type="text" placeholder="Search" class="form-control">
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="submit">Search</button>
                    </span>
                  </div>
                </form>
              </div> 
            </li>
            <!-- END TOP SEARCH -->
          </ul>
        </div>
        <!-- END NAVIGATION -->
      </div>
    </div>
    <!-- Header END -->
    