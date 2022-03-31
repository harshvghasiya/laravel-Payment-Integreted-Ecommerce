<div class="sidebar-navigation nmnm">
<div class="title">Request Catalogue</div>
	<div class="row">
        <?php echo e(Form::open([
          'id'=>'contactUsPage',
          'class'=>'FromSubmit',
          'url'=>route('front.contact_us.store'),
          'data-redirect_url'=>url()->full(),
          'name'=>'contactus',
          'enctype'           =>"multipart/form-data"
          ])); ?>

            <div class="Contact-us">
                <div class="form-group inwid col-md-12" >
                    <input type="text"  name="name" placeholder="Your Name" required style="width: 100%">
                </div>
                <div class="form-group col-md-12">
                    <input type="email" name="email" placeholder="Email" required style="width: 100%">
                </div>
                <div class="form-group col-md-12" >
                    <input type="text"  name="phone" placeholder="Phone" style="width: 100%">
                </div>
                <div class="form-group col-md-12" >
                    <input type="text"  name="company_name" placeholder="Company Name" style="width: 100%">
                </div>
                <div class="form-group col-md-12" >
                  <input type="text" name="message" placeholder="Address" style="width: 100%">
                </div>
            </div>
            <div class="form-submit col-md-12 text_ce">
	            <button type="submit" class="btn btn-primary btn-custom-6">Request</button>
	        </div>
        <?php echo e(Form::close()); ?>


    </div>
</div><?php /**PATH E:\laragon\www\amit_ecom\resources\views/front/common/_request_catalog.blade.php ENDPATH**/ ?>