<head>
<meta charset="utf-8"/>
<title>
<?php if(isset($title)): ?>
	<?php echo e($title); ?> |
<?php endif; ?>
<?php echo e(trans('lang_data.softtechover_com_label')); ?>

</title>
<meta name="csrf-token" content="<?php echo e(csrf_token()); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="" name="description"/>
<meta content="" name="author"/>
<link href="<?php echo e($setting->getsettineFaviconImgDynamic()); ?>" rel="icon">
<link href="<?php echo e($setting->getsettineFaviconImgDynamic()); ?>" rel="apple-touch-icon">
<link rel="stylesheet" type="text/css" href="<?php echo e(UPLOAD_AND_DOWNLOAD_URL()); ?>public/admin/mix/css/all.css">

</head><?php /**PATH E:\laragon\www\amit_ecom\Modules/Admin\Resources/views/layouts/head.blade.php ENDPATH**/ ?>