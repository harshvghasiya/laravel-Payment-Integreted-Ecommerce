<?php $__env->startSection('title'); ?>
   <?php if(isset($title) && $title !=""): ?>
        <title><?php echo e($title); ?> - <?php echo e(trans('lang_data.company_com_label')); ?></title>
    <?php else: ?>
        <title><?php echo e(trans('lang_data.welcome_to_company')); ?></title>
    <?php endif; ?> 
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
<div class="main">
      <div class="container">
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="sidebar col-md-3 col-sm-3">
            <ul class="list-group margin-bottom-25 sidebar-menu">
              <li class="list-group-item clearfix"><a href="<?php echo e(route('front.user.change_password_index')); ?>"><i class="fa fa-angle-right"></i> Change Password</a></li>
              <li class="list-group-item clearfix"><a href="<?php echo e(route('front.order.history')); ?>"><i class="fa fa-angle-right"></i> Order History</a></li>
              <li class="list-group-item clearfix"><a href="<?php echo e(route('front.cart.index')); ?>"><i class="fa fa-angle-right"></i> Cart</a></li>
            </ul>
          </div>
          <div class="col-md-9 col-sm-9">
            <h1>My Orders</h1>
             <?php if(isset($orders) && !$orders->isEmpty()): ?>
              <div class="goods-page">
                <div class="goods-data clearfix">
                  <div class="table-wrapper-responsive">
                   
                  <table summary="Shopping cart ">

                    <tr>
                      <th class="goods-page-image">Image</th>
                      <th class="goods-page-description">Description</th>
                      <th class="goods-page-quantity">Quantity</th>
                      <th class="goods-page-total" >Total</th>
                      <th class="goods-page-total" colspan="2">Delivered</th>
                    </tr>
                    
                     <?php $total=0; ?>
                    <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                      <?php 
                        $total =100;
                      ?>
                      <?php if($result->order_product !=null): ?>
                      <?php $__currentLoopData = $result->order_product; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                      <?php if($value->product != null): ?>
                      <tr>
                        <td class="goods-page-image">
                          <a href="javascript:;"><img src="<?php echo e($value->product->getProductImageUrl()); ?>" alt="Berry Lace Dress"></a>
                        </td>
                        <td class="goods-page-description">
                          <h3><a href="javascript:;"><?php echo e($value->product->name); ?></a></h3>
                          <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                          <em>More info is here</em>
                        </td>
                        <td class="goods-page-quantity">
                          <div class="product-quantity">
                             <strong><span><?php echo e($value->quantity); ?></span></strong>
                          </div>
                        </td>
                       
                        <td class="goods-page-total" >
                          <strong><span>Rs.</span><?php echo e(($value->product->price)*$value->product->price); ?></strong>
                        </td>
                         <td class="goods-page-total" >
                          <strong><?php if($value->is_delivered==1): ?><span class="text-success">Delivered </span><?php else: ?> <span > Not Delivered </span><?php endif; ?></strong>
                        </td>
                      </tr>
                      <?php endif; ?>
                      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                      <?php endif; ?>
                  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>   
                  </table>
                  </div>
                </div>        
              </div>  
            <?php else: ?>
             <h2 class="text-center ">You Order Nothing, Start Shoping Now!!</h2>
            <?php endif; ?>
           </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('javascript'); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\laragon\www\amit_ecom\resources\views/front/pages/order_history.blade.php ENDPATH**/ ?>