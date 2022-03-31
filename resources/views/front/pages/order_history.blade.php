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
          <div class="sidebar col-md-3 col-sm-3">
            <ul class="list-group margin-bottom-25 sidebar-menu">
              <li class="list-group-item clearfix"><a href="{{route('front.user.change_password_index')}}"><i class="fa fa-angle-right"></i> Change Password</a></li>
              <li class="list-group-item clearfix"><a href="{{route('front.order.history')}}"><i class="fa fa-angle-right"></i> Order History</a></li>
              <li class="list-group-item clearfix"><a href="{{route('front.cart.index')}}"><i class="fa fa-angle-right"></i> Cart</a></li>
            </ul>
          </div>
          <div class="col-md-9 col-sm-9">
            <h1>Order History</h1>
             @if(isset($orders) && !$orders->isEmpty())
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
                    
                     @php $total=0; @endphp
                    @foreach($orders as $key=>$result )
                      @php 
                        $total =100;
                      @endphp
                      @if($result->order_product !=null)
                      @foreach($result->order_product as $key=>$value)
                      @if($value->product != null)
                      <tr>
                        <td class="goods-page-image">
                          <a href="javascript:;"><img src="{{$value->product->getProductImageUrl()}}" alt="Berry Lace Dress"></a>
                        </td>
                        <td class="goods-page-description">
                          <h3><a href="javascript:;">{{$value->product->name}}</a></h3>
                          <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                          <em>More info is here</em>
                        </td>
                        <td class="goods-page-quantity">
                          <div class="product-quantity">
                             <strong><span>{{$value->quantity}}</span></strong>
                          </div>
                        </td>
                       
                        <td class="goods-page-total" >
                          <strong><span>Rs.</span>{{($value->product->price)*$value->product->price}}</strong>
                        </td>
                         <td class="goods-page-total" >
                          <strong>@if($value->is_delivered==1)<span class="text-success">Delivered </span>@else <span > Not Delivered </span>@endif</strong>
                        </td>
                      </tr>
                      @endif
                      @endforeach
                      @endif
                  @endforeach   
                  </table>
                  </div>
                </div>        
              </div>  
            @else
             <h2 class="text-center ">You Order Nothing, Start Shoping Now!!</h2>
            @endif
           </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
@endsection
@section('javascript')
@endsection