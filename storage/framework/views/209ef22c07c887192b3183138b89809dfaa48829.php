<!DOCTYPE html>
<html class="no-js">
    <?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<body class="ecommerce">
    
    <?php echo $__env->make('layouts.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    
        <?php echo $__env->yieldContent('content'); ?>
    
    <?php echo $__env->make('layouts.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->yieldContent('javascript'); ?>
    
		<script type="text/javascript">
		  $(document).ready(function() {
		    $(document).on('click', '.add2cart', function(event) {
		      event.preventDefault();
		      var id=$(this).data('id');
		      $.ajax({
		        url: '<?php echo e(route('front.cart.addtocart')); ?>',
		        type: 'POST',
		        headers: {
		          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		        },
		        data: {id:id},
		        success:function(response) {
		          if (response.msg != null && response.status==1) {
		              alert(response.msg);
		              $('.count_cart').text(response.cart_count+' items');
		              $('.cart_item').append(response.cart_item);
		              if (response.cart_count==1) {
		                $('.no_item_cart').remove();
		              }
		          }

		        }
		      });
		      
		    });
		  });
		</script>
		<script type="text/javascript">
		  $(document).ready(function() {
		    $(document).on('click', '.del_cart_sm', function(event) {
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
		              op.closest('li').fadeOut('fast');
		              $('.count_cart').text(response.cart_count+' items');
		              if (response.cart_count==0) {
		                 $('.cart_item').append('<li class="no_item_cart">No Product in cart</li');
		              }

		            }
		        }
		      });
		      
		    });
		  });
		</script>
		    
</body>
</html>
<?php /**PATH E:\laragon\www\amit_ecom\resources\views/layouts/app.blade.php ENDPATH**/ ?>