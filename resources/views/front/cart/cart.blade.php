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
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="col-md-12 col-sm-12 no_item">
            <h1>Shopping cart</h1>
            @if(isset($cart_product) && !$cart_product->isEmpty())
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
                    @php $total=0; @endphp
                    @foreach($cart_product as $key=>$result )
                      @php 
                        $total =($result->product->price)*$result->quantity+$total;
                      @endphp
                      <tr>
                        <td class="goods-page-image">
                          <a href="javascript:;"><img src="{{$result->product->getProductImageUrl()}}" alt="Berry Lace Dress"></a>
                        </td>
                        <td class="goods-page-description">
                          <h3><a href="javascript:;">{{$result->product->name}}</a></h3>
                          <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                          <em>More info is here</em>
                        </td>
                        <td class="goods-page-ref-no">
                          javc2133
                        </td>
                        <td class="goods-page-quantity">
                          <div class="product-quantity">
                              <input id="product-quantity" data-cart_id="{{Crypt::encrypt($result->id)}}" type="text" value="{{$result->quantity}}"  data-price="{{$result->product->price}}" readonly class="form-control input-sm product_qu">
                          </div>
                        </td>
                        <td class="goods-page-price">
                          <strong><span>Rs.</span>{{$result->product->price}}</strong>
                        </td>
                        {{-- {{dd()}} --}}
                        <td class="goods-page-total" >
                          <strong><span>Rs.</span>{{($result->product->price)*$result->quantity}}</strong>
                        </td>
                        <td class="del-goods-col">
                          <a class="del-goods del-cart" data-cart_id="{{Crypt::encrypt($result->id)}}" href="javascript:;">&nbsp;</a>
                        </td>
                      </tr>
                     
                    @endforeach
                  </table>
                  </div>

                  <div class="shopping-total">
                    <ul>
                      <li class="shopping-total-price">
                        <em>Total</em>
                        <strong class="price total_price" data-total_price="{{$total}}"><span>Rs.</span>{{$total}}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a href="{{route('front.checkout.list')}}" class="btn btn-primary" type="submit">Checkout <i class="fa fa-check"></i></a>
              </div>  
            @else
             <h2 class="text-center ">No Product in cart</h2>
            @endif
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