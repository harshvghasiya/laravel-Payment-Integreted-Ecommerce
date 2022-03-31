@extends('layouts.app')
@section('title')
  @if(isset($title) && $title !="")
        <title>{{$title}} - {{trans('lang_data.softtechover_com_label')}}</title>
    @else
        <title>{{trans('lang_data.welcome_to_softtechover_com')}}</title>
    @endif 
@endsection
@section('style')
<style type="text/css">
	.error{
		color: red;
	}
</style>
@endsection
@section('content')
  <div class="main">
      <div class="container">
        <ul class="breadcrumb">
            <li><a href="{{route('front.home')}}">Home</a></li>
            <li class="active">Create new account</li>
        </ul>
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="col-md-9 col-sm-9">
            <h1>Create an account</h1>
            <div class="content-form-page">
              
    	              {{ Form::open([
        				        'id'=>'RegisterForm',
        				        'class'=>'form-horizontal FromSubmit',
        				        'method'=>'POST',
        				        'url'=>route('front.user.register_store'),
        				        'redirect_url'=>route('front.user.login'),
        				        'redirect_back'=>route('front.user.login'),
        				        'name'=>'',
        				        'autocomplete'=>'off'
        				      ])
        				    }}
                    <fieldset>
                      <legend>Your personal details</legend>
                      <div class="form-group">
                        <label for="firstname" class="col-lg-4 control-label">Name <span class="require">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" name="name" class="form-control" id="name">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="firstname" class="col-lg-4 control-label">Mobile <span class="require">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" name="mobile" class="form-control" id="mobile">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="email" class="col-lg-4 control-label">Email <span class="require">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" name="email" class="form-control" id="email">
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend>Your password</legend>
                      <div class="form-group">
                        <label for="password" class="col-lg-4 control-label">Password <span class="require">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" name="password" class="form-control" id="password">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="confirm-password" class="col-lg-4 control-label">Confirm password <span class="require">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" name="password_confirmation" class="form-control" id="confirm-password">
                        </div>
                      </div>
                    </fieldset>
                    <div class="row">
                      <div class="col-lg-8 col-md-offset-4 padding-left-0 padding-top-20">                        
                        <button type="submit" class="btn btn-primary">Create an account</button>
                        <button type="button" class="btn btn-default">Cancel</button>
                      </div>
                    </div>
                {{Form::close()}}
            </div>
          </div>
        </div>
      </div>
    </div>

@endsection
@section('javascript')
<script>
  $(document).ready(function(){
    $("#RegisterForm").validate({
        rules: {
           'name': { required: true},
           'email': { required: true,email:true},
           'password': { required: true},
           'password_confirmation': { required: true,equalTo : '[name="password"]'},
        },
        messages:{
           'name': { required:"Name is required"},
           'email': { required:"Email is required",email:"Invalid Email Format"},
           'password': { required: "Password is required" },
           'password_confirmation': { required: "Confirm Password is required",equalTo:"Password did not match" },
        },
        errorPlacement: function(error, element) {
          $(element).closest('div').append(error);
        }
    });
});
</script>
@endsection