
<head>
  <meta charset="utf-8">
  {{-- <title>Cool green dress with red bell | Metronic Shop UI</title> --}}
@yield("metaData")
    @yield("title")
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <meta content="Metronic Shop UI description" name="description">
  <meta content="Metronic Shop UI keywords" name="keywords">
  <meta content="keenthemes" name="author">

  <meta property="og:site_name" content="-CUSTOMER VALUE-">
  <meta property="og:title" content="-CUSTOMER VALUE-">
  <meta property="og:description" content="-CUSTOMER VALUE-">
  <meta property="og:type" content="website">
  <meta property="og:image" content="-CUSTOMER VALUE-"><!-- link to image for socio -->
  <meta property="og:url" content="-CUSTOMER VALUE-">
   <meta name="csrf-token" content="{{ csrf_token() }}" />

  <link rel="shortcut icon" href="favicon.ico">

  <!-- Fonts START -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all" rel="stylesheet" type="text/css"> 
  <!-- Fonts END -->

  <!-- Global styles START -->          
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Global styles END --> 
   
  <!-- Page level plugin styles START -->
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/fancybox/source/jquery.fancybox.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/carousel-owl-carousel/owl-carousel/owl.carousel.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css">
  <link href="https://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css"><!-- for slider-range -->
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/rateit/src/rateit.css" rel="stylesheet" type="text/css">

  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/slider-layer-slider/css/layerslider.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/slider-layer-slider/skins/fullwidth/skin.css" rel="stylesheet">
  <!-- Page level plugin styles END -->

  <!-- Theme styles START -->
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/css/components.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/css/style.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/css/style-shop.css" rel="stylesheet" type="text/css">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/css/style-responsive.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/css/themes/red.css" rel="stylesheet" id="style-color">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/css/portfolio.css" rel="stylesheet">
  <link href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/css/custom.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/admin/js/toaster/toastr.css">
  
  <!-- Theme styles END -->
  @yield('style')
</head>
