<!DOCTYPE html>
<html class="no-js">
    @include('layouts.head')
<body class="ecommerce">
    
    @include('layouts.header')
    
        @yield('content')
    
    @include('layouts.footer')
    @yield('javascript')
    {{-- @include('layouts.flashmessage') --}}
		<script type="text/javascript">
		  $(document).ready(function() {
		    $(document).on('click', '.add2cart', function(event) {
		      event.preventDefault();
		      var id=$(this).data('id');
		      $.ajax({
		        url: '{{route('front.cart.addtocart')}}',
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
		        url: '{{route('front.cart.cart_delete')}}',
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
