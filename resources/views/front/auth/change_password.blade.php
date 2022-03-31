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
@endsection
@section('javascript')
<script type="text/javascript">
  
</script>
@endsection