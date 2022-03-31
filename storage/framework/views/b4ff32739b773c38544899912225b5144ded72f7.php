  <!-- BEGIN TOP BAR -->
    <div class="pre-header">
        <div class="container">
            <div class="row">
                <!-- BEGIN TOP BAR LEFT PART -->
                <div class="col-md-6 col-sm-6 additional-shop-info">
                    <ul class="list-unstyled list-inline">
                       <?php if(isset($setting) && $setting->mobile != null): ?><li><i class="fa fa-phone"></i><span><?php echo e($setting->mobile); ?></span></li><?php endif; ?>
                        <!-- BEGIN CURRENCIES -->
                        <?php if(isset($setting) && $setting->email != null): ?>
                         <li class="shop-currencies">
                            <a href="mailto:<?php echo e($setting->email); ?>"><?php echo e($setting->email); ?></a>
                        </li>
                        <?php endif; ?>
                        <!-- END CURRENCIES -->
                        
                    </ul>
                </div>
                <!-- END TOP BAR LEFT PART -->
                <!-- BEGIN TOP BAR MENU -->
                <div class="col-md-6 col-sm-6 additional-nav">
                    <ul class="list-unstyled list-inline pull-right">
                        <?php if(Auth::guard('user_login')->check()): ?>
                        <li><a href="<?php echo e(route('front.myaccount')); ?>">My Account</a></li>
                        <li><a href="<?php echo e(route('front.user.logout')); ?>">Logout</a></li>
                        <?php else: ?>
                        <li><a href="<?php echo e(route('front.user.register')); ?>">Register</a></li>
                        <li><a href="<?php echo e(route('front.user.login')); ?>">Log In</a></li>
                        <?php endif; ?>
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
        <a class="site-logo" href="<?php echo e(route('front.home')); ?>"><img src="<?php echo e($setting->getSettingLogoImageUrl()); ?>" alt="Metronic Shop UI"></a>

        <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>

        <!-- BEGIN CART -->
        <div class="top-cart-block">
          <div class="top-cart-info">
            <a href="<?php echo e(route('front.cart.index')); ?>" class="top-cart-info-count count_cart"><?php echo e($cart_count); ?> items</a>
            <a href="javascript:void(0);" class="top-cart-info-value"></a>
          </div>
          <i class="fa fa-shopping-cart"></i>
                        
          <div class="top-cart-content-wrapper">
            <div class="top-cart-content">
              <ul class="scroller cart_item" style="height: 250px;">
                <?php if(isset($cart_product) && !$cart_product->isEmpty()): ?>
                  <?php $__currentLoopData = $cart_product; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                      <li>
                        <a href="shop-item.html"><img src="<?php echo e($result->product->getProductImageUrl()); ?>" alt="<?php echo e($result->product->name); ?>" width="37" height="34"></a>
                        <span class="cart-content-count">x 1</span>
                        <strong><a href="shop-item.html"><?php echo e($result->product->name); ?></a></strong>
                        <em>Rs. <?php echo e($result->product->price); ?></em>
                        <a href="javascript:void(0);" data-cart_id="<?php echo e(Crypt::encrypt($result->id)); ?>" class="del-goods del_cart_sm">&nbsp;</a>
                      </li>
                  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php else: ?>
                <li class="no_item_cart">No Product in cart</li>
                <?php endif; ?>
              </ul>
              <div class="text-right">
                <a href="<?php echo e(route('front.cart.index')); ?>" class="btn btn-default">View Cart</a>
              </div>
            </div>
          </div>            
        </div>
        <!--END CART -->

        <!-- BEGIN NAVIGATION -->
        <div class="header-navigation">
          <ul>
              <?php      
                  if (\Request::route()->getName() == 'front.home') {
                    $homePageActiveClass = 'active';  
                  }else{
                    $homePageActiveClass ='';
                  }
              ?>
            <li class="<?php echo e($homePageActiveClass); ?>"><a href="<?php echo e(route('front.home')); ?>">Home</a></li>

              <?php if(isset($headerCategory) && !$headerCategory->isEmpty()): ?>
              <?php $__currentLoopData = $headerCategory; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
              <?php 
              if (\Request::route()->getName() == 'front.category.index' && \Request::segment(1) == $v->slug) {
                $categoryActiveClass = 'active'; 
              }else{
                $categoryActiveClass ='';
              }
              ?>
              <?php if(!$v->subCategory->isEmpty()): ?>
                <li class="dropdown <?php echo e($categoryActiveClass); ?>">
                  <a class="dropdown-toggle" data-toggle="dropdown" data-target="<?php echo e(route('front.category.index',$v->slug)); ?>" href="<?php echo e(route('front.category.index',$v->slug)); ?>">
                    <?php echo e($v->name); ?>  
                  </a>
                    
                  <ul class="dropdown-menu">
                    <?php $__currentLoopData = $v->subCategory; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li><a href="<?php echo e(route('front.category.sub_category',$value->slug)); ?>"><?php echo e($value->name); ?></a></li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> 
                  </ul>
                </li>
              <?php else: ?>
              <li class="<?php echo e($categoryActiveClass); ?>"><a href="<?php echo e(route('front.category.index',$v->slug)); ?>" ><?php echo e($v->name); ?></a></li>
             <?php endif; ?>             
             <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
             <?php endif; ?>

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
    <?php /**PATH E:\laragon\www\amit_ecom\resources\views/layouts/header.blade.php ENDPATH**/ ?>