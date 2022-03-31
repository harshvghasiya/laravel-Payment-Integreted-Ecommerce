<?php $__env->startSection('title'); ?>
    <?php if(isset($title) && $title !=""): ?>
        <title><?php echo e($title); ?> - <?php echo e(trans('lang_data.company_com_label')); ?></title>
    <?php else: ?>
        <title><?php echo e(trans('lang_data.welcome_to_company')); ?></title>
    <?php endif; ?> 
<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>


    <?php if(isset($banners) && $banners != null): ?>
      <div class="page-slider margin-bottom-35">
        <div id="layerslider" style="width: 100%; height: 494px; margin: 0 auto;">       
          <?php $__currentLoopData = $banners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div class="ls-slide ls-slide1" data-ls="offsetxin: right; slidedelay: 7000; transition2d: 24,25,27,28;">
            <img src="<?php echo e($result->getBannerImageUrl()); ?>" class="ls-bg" alt="Slide background">
          </div>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
      </div>
    <?php endif; ?>

 <div class="main">
      <div class="container">
        <!-- BEGIN SALE PRODUCT & NEW ARRIVALS -->
        <div class="row margin-bottom-40 ">
          <!-- BEGIN CONTENT -->
          <?php if(isset($latestProduct) && $latestProduct != null): ?>
          <div class="col-md-12 ">
            <h2 class="text-center">New Arrivals</h2>
            <div class="owl-carousel owl-carousel5">
              <?php $__currentLoopData = $latestProduct; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div>
                  <div class="product-item">
                    <div class="pi-img-wrapper">
                      <img src="<?php echo e($result->getProductImageUrl()); ?>" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="<?php echo e($result->getProductImageUrl()); ?>" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html"><?php echo e($result->name); ?></a></h3>
                    <div class="pi-price">RS. <?php echo e($result->price); ?></div>
                    <a href="javascript:;"  data-id="<?php echo e(Crypt::encrypt($result->id)); ?>" class="btn btn-default add2cart">Add to cart</a>
                    <div class="sticker sticker-new"></div>
                  </div>
                </div>
              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
            <a href="<?php echo e(route('front.product.list','new-arrivals')); ?>" class="btn red btn-block ">Show More</a>
          </div>
          <?php endif; ?>
        </div>
        <!-- END SIDEBAR & CONTENT -->

        <?php if(isset($featureProduct) && $featureProduct !=null): ?>
          <div class="row margin-bottom-40">
            <!-- BEGIN SALE PRODUCT -->
            <div class="col-md-12 sale-product">
              <h2 class="text-center">Featured Collection</h2>
              
              <div class="content-page">
                <div class="row mix-grid thumbnails">
                  <?php $__currentLoopData = $featureProduct; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-md-3 col-sm-4 mix category_1 mix_all" style="display: block; opacity: 1; ">
                      <div class="mix-inner">
                          <img alt="" src="<?php echo e($result->getCategoryImageUrl()); ?>" class="img-responsive">
                              <div class="mix-details">
                                  <h4><?php echo e($result->name); ?></h4>
                                    <a class="mix-link" href="<?php echo e(route('front.category.index',$result->slug)); ?>"><i class="fa fa-link"></i></a>
                                    <a data-rel="fancybox-button" title="<?php echo e($result->name); ?>e" href="<?php echo e($result->getCategoryImageUrl()); ?>" class="mix-preview fancybox-button"><i class="fa fa-search"></i></a>
                              </div>           
                              <div>
                                  <h4><?php echo e($result->name); ?></h4>
                              </div>
                      </div>                       
                    </div>                
                  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>       
                </div>
              </div>
            </div>
            <!-- END SALE PRODUCT -->
          </div>
        <?php endif; ?>  
        <div class="row margin-bottom-40">
          <!-- BEGIN SALE PRODUCT -->
          <div class="col-md-12 sale-product">
            <h2 class="text-center">Hot Products</h2>
            <div class="owl-carousel owl-carousel5">
              <div>
                <div class="product-item">
                  <div class="pi-img-wrapper">
                    <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model1.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model1.jpg" class="btn btn-default fancybox-button">Zoom</a>
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
                    <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model2.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model2.jpg" class="btn btn-default fancybox-button">Zoom</a>
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
                    <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model6.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model6.jpg" class="btn btn-default fancybox-button">Zoom</a>
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
                      <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model4.jpg" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model4.jpg" class="btn btn-default fancybox-button">Zoom</a>
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
                    <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model5.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model5.jpg" class="btn btn-default fancybox-button">Zoom</a>
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
                    <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model3.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model3.jpg" class="btn btn-default fancybox-button">Zoom</a>
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
                    <img src="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model7.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                      <a href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/front/assets/frontend/pages/img/products/model7.jpg" class="btn btn-default fancybox-button">Zoom</a>
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

         
              <?php if(isset($category_home) && !$category_home->isEmpty()): ?>       
              <?php $__currentLoopData = $category_home; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="row product-list">
               <h2 class="text-center"><?php echo e($result->name); ?></h2>
               <?php if($result->subCategory !=null): ?>
                <?php $__currentLoopData = $result->subCategory; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k=>$r): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if(!$r->products->isEmpty()): ?>
                <?php $__currentLoopData = $r->products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ke=>$re): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-3 col-sm-5 col-xs-12">
                  <div class="product-item">
                    <div class="pi-img-wrapper">
                      <img src="<?php echo e($re->getProductImageUrl()); ?>" class="img-responsive" alt="Berry Lace Dress">
                      <div>
                        <a href="<?php echo e($re->getProductImageUrl()); ?>" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html"><?php echo e($re->name); ?></a></h3>
                    <div class="pi-price">R <?php echo e($re->price); ?></div>
                    <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                  </div>
                </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
               </div>

              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> 
              <?php endif; ?>             
      </div>
 </div>



<?php echo $__env->make('layouts.flashmessage', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('javascript'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\laragon\www\amit_ecom\resources\views/home.blade.php ENDPATH**/ ?>