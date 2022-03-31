@extends('layouts.app')
@section('title')
    @if(isset($title) && $title !="")
        <title>{{$title}} - {{trans('lang_data.softtechover_com_label')}}</title>
    @else
        <title>{{trans('lang_data.welcome_to_softtechover_com')}}</title>
    @endif 
@endsection
@section('style')
@endsection
@section('content')

<div id="Contact" class="light-wrapper">
        <div class="container inner">
            <div class="row">
                <div class="col-md-8">
                    <div class="section-heading style-2">
                        <h4>{{$cmsPageDetail->name}}</h4>
                        <div class="line"></div>
                    </div>
                    <div style="text-align: center;">
                        {!! $cmsPageDetail->short_description !!}
                    </div>

                    <div class="row">
                        <div class="Contact-Form">
                            {{
                              Form::open([
                              'id'=>'contactUsPage',
                              'class'=>'FromSubmit',
                              'url'=>route('front.contact_us.store'),
                              'data-redirect_url'=>route('front.cms.details',$cmsPageDetail->slug),
                              'name'=>'contactus',
                              'enctype'           =>"multipart/form-data"
                              ])
                            }}
                                <div class="Contact-us">
                                    <div class="form-input col-md-4">
                                        <input type="text" name="name" placeholder="Your Name" required>
                                    </div>
                                    <div class="form-input col-md-4">
                                        <input type="email" name="email" placeholder="Email" required>
                                    </div>
                                    <div class="form-input col-md-4">
                                        <input type="text" name="phone" placeholder="Phone">
                                    </div>
                                    <div class="form-input col-md-12">
                                        <input type="text" name="company_name" placeholder="Company Name">
                                    </div>
                                    <div class="form-input col-md-12">
                                        <textarea class="txt-box textArea" name="message" cols="40" rows="7" id="messageTxt" placeholder="Address" spellcheck="true" required></textarea>
                                    </div>
                                    <div class="form-submit col-md-12">
                                        <button type="submit" class="btn btn-primary btn-custom-6">Request</button>
                                    </div>
                                </div>
                            {{ Form::close()}}
                        </div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="Contact-Info">
                        @if(isset($setting) && !empty($setting->mobile))
                        <div class="Block-Contact col-md-6">
                            <p>Phone :</p>
                            <ul>
                                <li>
                                    <i class="fa fa-phone color"></i> &nbsp; <a href="tel:+{{$setting->mobile}}">+{{$setting->mobile}}</a>
                                </li>
                            </ul>
                        </div>
                        @endif
                        @if(isset($setting) && !empty($setting->email))
                        <div class="Block-Contact col-md-6">
                            <p>Email :</p>
                            <ul>
                                <li>
                                    <i class="fa fa-envelope color"></i> &nbsp; 
                                    <a href="mailto:{{$setting->email}}">{{$setting->email}}</a>
                                    &nbsp;&nbsp;
                                </li>
                            </ul>
                        </div>
                        @endif
                        <div class="Block-Contact col-md-12">
                            <p>Address :</p>
                            <ul>
                                <li>{!! $setting->address !!}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@include('layouts.flashmessage')
@endsection
@section('javascript')
<script>
$(document).ready(function(){
    
    $("#contactUsPage").validate({
        rules: {
            name: {required:true,maxlength:30},
            company_name: {required:true,maxlength:30},
            email: {required:true,email:true},
            phone: {required:true,number:true,maxlength:12},
            message: {required:true,maxlength:300},
            
        },
        messages: {
            name: { required: "{{trans('lang_data.name_required')}}"},
            company_name: { required: "{{trans('lang_data.company_name_field_required')}}"},
            email: { required: "{{trans('lang_data.please_enter_your_email_address_label')}}"},
            phone: { required: "{{trans('lang_data.phone_number_field_required')}}"},
            message: { required: "{{trans('lang_data.address_is_required')}}"},
        }
    });

  })
</script>
@endsection
