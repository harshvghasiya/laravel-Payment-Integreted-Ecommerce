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
            <h1>Change Password</h1>
              <div class="content-form-page">
              <form role="form" class="form-horizontal form-without-legend">
                <div class="form-group">
                  <label class="col-lg-2 control-label" for="email">E-Mail <span class="require">*</span></label>
                  <div class="col-lg-8">
                    <input type="text" id="email" name="email" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-2 control-label" for="email">Password <span class="require">*</span></label>
                  <div class="col-lg-8">
                    <input type="text" id="password" name="password" class="form-control pass">
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-lg-8 col-md-offset-2 padding-left-0 padding-top-20">
                    <button class="btn btn-primary" type="submit">Continue</button>
                  </div>
                </div>
              </form>
            </div>
           </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('javascript'); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\laragon\www\amit_ecom\resources\views/front/auth/change_password.blade.php ENDPATH**/ ?>