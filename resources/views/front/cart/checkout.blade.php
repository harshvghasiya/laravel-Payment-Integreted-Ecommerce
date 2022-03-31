@extends('layouts.app')
@section('title')
   @if(isset($title) && $title !="")
        <title>{{$title}} - {{trans('lang_data.company_com_label')}}</title>
    @else
        <title>{{trans('lang_data.welcome_to_company')}}</title>
    @endif 
@endsection
@section('content')
    <div class="main">
      <div class="container">
        <ul class="breadcrumb">
            <li><a href="{{route('front.home')}}">Home</a></li>
            <li class="active">Checkout</li>
        </ul>
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="col-md-12 col-sm-12">
            <h1>Checkout</h1>
            <!-- BEGIN CHECKOUT PAGE -->
            <div class="panel-group checkout-page accordion scrollable" id="checkout-page">
                    {{
                      Form::open([
                      'id'=>'AddEditCat',
                      'class'=>'',
                      'url'=>route('front.payment.index'),
                      'data-redirect_url'=>route('front.home'),
                      'name'=>'socialMedia',
                      'enctype' =>"multipart/form-data"
                      ])
                    }}
              <!-- BEGIN SHIPPING ADDRESS -->
                <div id="shipping-address" class="panel panel-default">
	                <div class="panel-heading">
	                  <h2 class="panel-title">
	                    <a data-toggle="collapse" data-parent="#checkout-page" href="#shipping-address-content" class="accordion-toggle">
	                      Step 1: Delivery Details
	                    </a>
	                  </h2>
	                </div>
	                <div id="shipping-address-content" class="panel-collapse collapse">
	                  <div class="panel-body row">
	                    <div class="col-md-6 col-sm-6">
	                      <div class="form-group">
	                        <label for="firstname-dd"> Name <span class="require">*</span></label>
	                        <input type="text" name="name" value="{{Auth::guard('user_login')->user()->name}}" id="firstname-dd" class="form-control">
	                      </div>
	                      <div class="form-group">
	                        <label for="email-dd">E-Mail <span class="require">*</span></label>
	                        <input type="text" name="email" value="{{Auth::guard('user_login')->user()->email}}" id="email-dd" class="form-control">
	                      </div>
	                      <div class="form-group">
	                        <label for="telephone-dd">Mobile <span class="require">*</span></label>
	                        <input type="text" name="mobile" value="{{Auth::guard('user_login')->user()->mobile}}" id="mobile-dd" class="form-control">
	                      </div>
	                      
	                    </div>
	                    <div class="col-md-6 col-sm-6">
	                      <div class="form-group">
	                        <label for="address1-dd">Address 1</label>
	                        <input type="text" name="address1" id="address1-dd" class="form-control">
	                      </div>
	                      <div class="form-group">
	                        <label for="address2-dd">Address 2</label>
	                        <input type="text" name="address2" id="address2-dd" class="form-control">
	                      </div>
	                      <div class="form-group">
	                        <label for="city-dd">City <span class="require">*</span></label>
	                        <input type="text" name="city" id="city-dd" class="form-control">
	                      </div>
	                      <div class="form-group">
	                        <label for="post-code-dd">Post Code <span class="require">*</span></label>
	                        <input type="text" name="post_code" id="post-code-dd" class="form-control">
	                      </div>
	                      <div class="form-group">
	                        <label for="country-dd">Country <span class="require">*</span></label>
	                        <select class="form-control input-sm" name="country" id="country-dd">
	                          <option value=""> --- Please Select --- </option>
	                          <option value="244">Aaland Islands</option>
	                          <option value="1">Afghanistan</option>
	                          <option value="2">Albania</option>
	                        </select>
	                      </div>
	                      <div class="form-group">
	                        <label for="region-state-dd">Region/State <span class="require">*</span></label>
	                        <select class="form-control input-sm" name="state" id="region-state-dd">
	                          <option value=""> --- Please Select --- </option><option value="3513">Aberdeen</option><option value="3514">Aberdeenshire</option><option value="3515">Anglesey</option><option value="3516">Angus</option>
	                        </select>
	                      </div>
	                    </div>
	                    <div class="col-md-12">
	                      <button class="btn btn-primary  pull-right"  id="button-shipping-address" data-toggle="collapse" data-parent="#checkout-page" data-target="#shipping-method-content">Continue</button>
	                    </div>
	                  </div>
	                </div>
                </div>
              <!-- END SHIPPING ADDRESS -->

              <!-- BEGIN SHIPPING METHOD -->
                <div id="shipping-method" class="panel panel-default">
	                <div class="panel-heading">
	                  <h2 class="panel-title">
	                    <a data-toggle="collapse" data-parent="#checkout-page" href="#shipping-method-content" class="accordion-toggle">
	                      Step 4: Delivery Method
	                    </a>
	                  </h2>
	                </div>
	                <div id="shipping-method-content" class="panel-collapse collapse">
	                  <div class="panel-body row">
	                    <div class="col-md-12">
	                      <p>Please select the preferred shipping method to use on this order.</p>
	                      <h4>Flat Rate</h4>
	                      <div class="radio-list">
	                        <label>
	                          <input type="radio" name="FlatShippingRate" value="FlatShippingRate"> Flat Shipping Rate
	                        </label>
	                      </div>
	                      <div class="form-group">
	                        <label for="delivery-comments">Add Comments About Your Order</label>
	                        <textarea id="delivery-comments" rows="8" class="form-control"></textarea>
	                      </div>
	                      <button class="btn btn-primary  pull-right"  id="button-shipping-method" data-toggle="collapse" data-parent="#checkout-page" data-target="#confirm-content">Continue</button>
	                    </div>
	                  </div>
	                </div>
                </div>
              <!-- END SHIPPING METHOD -->

                <!-- BEGIN CONFIRM -->
                <div id="confirm" class="panel panel-default">
	                <div class="panel-heading">
	                  <h2 class="panel-title">
	                    <a data-toggle="collapse" data-parent="#checkout-page" href="#confirm-content" class="accordion-toggle">
	                      Step 6: Confirm Order
	                    </a>
	                  </h2>
	                </div>
	                <div id="confirm-content" class="panel-collapse collapse">
	                  <div class="panel-body row">
	                    <div class="col-md-12 clearfix">
	                      <div class="table-wrapper-responsive">
	                      <table>
	                        <tr>
	                          <th class="checkout-image">Image</th>
	                          <th class="checkout-description">Description</th>
	                          <th class="checkout-model">Model</th>
	                          <th class="checkout-quantity">Quantity</th>
	                          <th class="checkout-price">Price</th>
	                          <th class="checkout-total">Total</th>
	                        </tr>
	                        @if(isset($cart) && !$cart->isEmpty())
	                        @php $total=0;@endphp
	                        @foreach($cart as $key=>$result)
	                        @php
	                          $total=($result->quantity)*$result->product->price+$total; 
	                        @endphp
	                            <input type="hidden" name="product_id[]" value="{{Crypt::encrypt($result->product->id)}}">
		                        <tr>
		                          <td class="checkout-image">
		                            <a href="javascript:;"><img src="{{$result->product->getProductImageUrl()}}" alt="Berry Lace Dress"></a>
		                          </td>
		                          <td class="checkout-description">
		                            <h3><a href="javascript:;">{{$result->product->name}}</a></h3>
		                            <p><strong>Item 1</strong> - Color: Green; Size: S</p>
		                            <em>More info is here</em>
		                          </td>
		                          <td class="checkout-model">RES.193</td>
		                          <td class="checkout-quantity">{{$result->quantity}}</td>
		                          <td class="checkout-price"><strong><span>Rs.</span>{{$result->product->price}}</strong></td>
		                          <td class="checkout-total"><strong><span>Rs.</span>{{$result->product->price*$result->quantity}}</strong></td>
		                        </tr>
	                        @endforeach
	                        @endif
	                      
	                      </table>
	                      </div>
	                      <div class="checkout-total-block">
	                        <ul>
	                         <input type="hidden" name="amount" value="{{Crypt::encrypt($total)}}">
	                          <li class="checkout-total-price">
	                            <em>Total</em>
	                            <strong class="price"><span>Rs.</span>{{$total}}</strong>
	                          </li>
	                        </ul>
	                      </div>
	                      <div class="clearfix"></div>
	                      <button class="btn btn-primary pull-right" type="submit" id="button-confirm">Confirm Order</button>
	                      <button type="button" class="btn btn-default pull-right margin-right-20">Cancel</button>
	                    </div>
	                  </div>
	                </div>
                </div>
              <!-- END CONFIRM -->
              {{Form::close()}}
            </div>
            <!-- END CHECKOUT PAGE -->
          </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
@endsection
@section('javascript')
<script type="text/javascript">
      $(document).ready(function() {
        $(document).on('click', '.del-cart', function(event) {
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
            url: '{{route('front.cart.upd_quantity')}}',
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

@endsection