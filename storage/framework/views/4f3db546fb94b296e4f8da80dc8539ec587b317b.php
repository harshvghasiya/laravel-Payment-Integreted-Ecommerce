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
          <div class="col-md-12 col-sm-12 no_item">
            <h1>Shopping cart</h1>
            <?php if(isset($cart_product) && !$cart_product->isEmpty()): ?>
              <div class="goods-page">
                <div class="goods-data clearfix">
                  <div class="table-wrapper-responsive">
                  <table summary="Shopping cart">
                    <tr>
                      <th class="goods-page-image">Image</th>
                      <th class="goods-page-description">Description</th>
                      <th class="goods-page-ref-no">Ref No</th>
                      <th class="goods-page-quantity">Quantity</th>
                      <th class="goods-page-price">Unit price</th>
                      <th class="goods-page-total" colspan="2">Total</th>
                    </tr>
                    <?php $total=0; ?>
                    <?php $__currentLoopData = $cart_product; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                      <?php 
                        $total =($result->product->price)*$result->quantity+$total;
                      ?>
                      <tr>
                        <td class="goods-page-image">
                          <a href="javascript:;"><img src="<?php echo e($result->product->getProductImageUrl()); ?>" alt="Berry Lace Dress"></a>
                        </td>
                        <td class="goods-page-description">
                          <h3><a href="javascript:;"><?php echo e($result->product->name); ?></a></h3>
                          <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                          <em>More info is here</em>
                        </td>
                        <td class="goods-page-ref-no">
                          javc2133
                        </td>
                        <td class="goods-page-quantity">
                          <div class="product-quantity">
                              <input id="product-quantity" data-cart_id="<?php echo e(Crypt::encrypt($result->id)); ?>" type="text" value="<?php echo e($result->quantity); ?>"  data-price="<?php echo e($result->product->price); ?>" readonly class="form-control input-sm product_qu">
                          </div>
                        </td>
                        <td class="goods-page-price">
                          <strong><span>Rs.</span><?php echo e($result->product->price); ?></strong>
                        </td>
                        
                        <td class="goods-page-total" >
                          <strong><span>Rs.</span><?php echo e(($result->product->price)*$result->quantity); ?></strong>
                        </td>
                        <td class="del-goods-col">
                          <a class="del-goods del-cart" data-cart_id="<?php echo e(Crypt::encrypt($result->id)); ?>" href="javascript:;">&nbsp;</a>
                        </td>
                      </tr>
                     
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                  </table>
                  </div>

                  <div class="shopping-total">
                    <ul>
                      <li class="shopping-total-price">
                        <em>Total</em>
                        <strong class="price total_price" data-total_price="<?php echo e($total); ?>"><span>Rs.</span><?php echo e($total); ?></strong>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a href="<?php echo e(route('front.checkout.list')); ?>" class="btn btn-primary" type="submit">Checkout <i class="fa fa-check"></i></a>
              </div>  
            <?php else: ?>
             <h2 class="text-center ">No Product in cart</h2>
            <?php endif; ?>
          </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('javascript'); ?>
<script type="text/javascript">
      $(document).ready(function() {
        $(document).on('click', '.del-cart', function(event) {
          event.preventDefault();
          var cart_id=$(this).data('cart_id');
          var op=$(this);
          $.ajax({
            url: '<?php echo e(route('front.cart.cart_delete')); ?>',
            type: 'POST',
             headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {cart_id: cart_id},
            success:function (response) {
                if (response.msg != "" && response.status==1) {
                  // alert(response.msg);
                  $.bootstrapGrowl(response.msg, {
                      type: 'success',
                      delay: 5000
                  });
                  op.closest('tr').fadeOut('fast');
                  $('.count_cart').text(response.cart_count+' items');
                  if (response.cart_count==0) {
                     $('.goods-page').remove();
                     $('.no_item').append('<h2 class="text-center">No Product in cart</h2>');
                  }

                }
            }
          });
          
        });


        $(document).on('change', '.product_qu', function(event) {
          event.preventDefault();
          var qun=$(this).val();
          var cart_id=$(this).data('cart_id');
          var price=$(this).data('price');
          var op=$(this);
          $.ajax({
            url: '<?php echo e(route('front.cart.upd_quantity')); ?>',
            type: 'POST',
            headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {qun: qun,cart_id:cart_id},
            success:function(response) {
                if (response.status==1 && response.success==true) {      
                    op.closest('tr').children('td:nth-child(6)').html('<strong><span>Rs.</span>'+price*qun+'</strong>');
                }
            }
          });
          
        });
      });
    </script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\laragon\www\amit_ecom\amit_ecom\resources\views/front/cart/cart.blade.php ENDPATH**/ ?>