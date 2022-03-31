<?php $__env->startSection('title'); ?>
  <?php if(isset($title) && $title !=""): ?>
        <title><?php echo e($title); ?> - <?php echo e(trans('lang_data.softtechover_com_label')); ?></title>
    <?php else: ?>
        <title><?php echo e(trans('lang_data.welcome_to_softtechover_com')); ?></title>
    <?php endif; ?> 
<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
<style type="text/css">
  .error{
    color: red;
  }
</style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
 <div class="main">
      <div class="container">
        <ul class="breadcrumb">
            <li><a href="<?php echo e(route('front.home')); ?>">Home</a></li>
            <li class="active">Login</li>
        </ul>
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="col-md-9 col-sm-9">
            <h1>Login</h1>
            <div class="content-form-page">
              
                    <?php echo e(Form::open([
                        'id'=>'LoginForm',
                        'class'=>'form-horizontal FromSubmit form-without-legend',
                        'method'=>'POST',
                        'url'=>route('front.user.login_amt'),
                        'redirect_url'=>route('front.home'),
                        'redirect_back'=>route('front.user.login'),
                        'name'=>'',
                        'autocomplete'=>'off'
                      ])); ?>

                    <div class="form-group">
                      <label for="email" class="col-lg-4 control-label">Email <span class="require">*</span></label>
                      <div class="col-lg-8">
                        <input type="email" name="email" class="form-control" id="email">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password" class="col-lg-4 control-label">Password <span class="require">*</span></label>
                      <div class="col-lg-8">
                        <input type="text" name="password" class="form-control" id="password">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-8 col-md-offset-4 padding-left-0">
                        <a href="page-forgotton-password.html">Forget Password?</a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-8 col-md-offset-4 padding-left-0 padding-top-20">
                        <button type="submit" class="btn btn-primary">Login</button>
                      </div>
                    </div>
                    
                  <?php echo e(Form::close()); ?>

                
                
              
            </div>
          </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('javascript'); ?>
<script>
  $(document).ready(function(){
    $("#LoginForm").validate({
        rules: {
           'email': { required: true,email:true},
           'password': { required: true},
        },
        messages:{
           'email': { required:"Email is required",email:"Invalid Email Format"},
           'password': { required: "Password is required" },
        },
        errorPlacement: function(error, element) {
          $(element).closest('div').append(error);
        }
    });
});
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\laragon\www\amit_ecom\resources\views/front/auth/login.blade.php ENDPATH**/ ?>