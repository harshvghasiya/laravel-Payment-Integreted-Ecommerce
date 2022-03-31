<head>
<meta charset="utf-8"/>
<title>
@if(isset($title))
	{{$title}} |
@endif
{{trans('lang_data.softtechover_com_label')}}
</title>
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="" name="description"/>
<meta content="" name="author"/>
<link href="{{$setting->getsettineFaviconImgDynamic()}}" rel="icon">
<link href="{{$setting->getsettineFaviconImgDynamic()}}" rel="apple-touch-icon">
<link rel="stylesheet" type="text/css" href="{{UPLOAD_AND_DOWNLOAD_URL()}}public/admin/mix/css/all.css">

</head>