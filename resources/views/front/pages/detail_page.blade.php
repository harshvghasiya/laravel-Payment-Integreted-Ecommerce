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
<div class="vizew-breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('front.home')}}"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{$cmsPageDetail->name}}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-7 col-lg-12">
                    <div class="section-heading style-2">
                    </div>
                        <h4>{{$cmsPageDetail->name}}</h4>
                        <?php echo $cmsPageDetail->long_description; ?>
                </div>
            </div>
        </div>
    </div>
</div>
@include('layouts.flashmessage')
@endsection
@section('javascript')
@endsection
