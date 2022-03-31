 <div class="pre-footer">
      <div class="container">
        <div class="row">
          <!-- BEGIN BOTTOM ABOUT BLOCK -->
          <div class="col-md-4 col-sm-6 pre-footer-col">
            <h2>Quick Links</h2>
            @if(isset($footerInformation) && !$footerInformation->isEmpty())
            <ul class="list-unstyled">
              @foreach($footerInformation as $key=>$result)
              <li><i class="fa fa-angle-right"></i> <a href="{{route('front.cms.details',$result->slug)}}">{{$result->name}}</a></li>
              @endforeach
            </ul>
            @endif
          </div>
          <!-- END BOTTOM ABOUT BLOCK -->
          <!-- BEGIN BOTTOM INFO BLOCK -->
          <div class="col-md-4 col-sm-6 pre-footer-col">
            <h2>Information</h2>
            <ul class="list-unstyled">
              <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Delivery Information</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Customer Service</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Order Tracking</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Shipping &amp; Returns</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="contacts.html">Contact Us</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Careers</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Payment Methods</a></li>
            </ul>
          </div>
          <!-- END INFO BLOCK -->

         
          
          <!-- BEGIN BOTTOM CONTACTS -->
          <div class="col-md-4 col-sm-6 pre-footer-col">
            <h2>Our Contacts</h2>
            <address class="margin-bottom-40">
              @if(isset($setting) && $setting->address != null) {!! $setting->address !!}@endif
              @if(isset($setting) && $setting->email !=null)Email: <a href="{{$setting->email}}">{{$setting->email}}</a><br>@endif
              @if(isset($setting) && $setting->mobile !=null)Phone: <a href="tel:+91{{$setting->mobile}}">{{$setting->mobile}}</a>@endif
            </address>
          </div>
          <!-- END BOTTOM CONTACTS -->
        </div>
        <hr>
        <div class="row">
          <!-- BEGIN SOCIAL ICONS -->

          <div class="col-md-6 col-sm-6">
            <ul class="social-icons">
              @if(isset($socialMediaContent) && !$socialMediaContent->isEmpty())
              @foreach($socialMediaContent as $key=>$result)
              <li><a class="{{$result->title}}" data-original-title="{{$result->title}}" href="{{$result->url}}"></a></li>
              @endforeach
              @endif
            </ul>
          </div>
          <!-- END SOCIAL ICONS -->
          <!-- BEGIN NEWLETTER -->
          <div class="col-md-6 col-sm-6">
            <div class="pre-footer-subscribe-box pull-right">
              <h2>Newsletter</h2>
              {{Form::open([
                'id'=>'NewsLetetrForm',
                'class'=>'FromSubmit',
                'url'=>route('front.news-letter.store'),
                'redirect_url'=>route('front.home'),
                'name'=>'socialMedia',
                'enctype' =>"multipart/form-data"
              ])}}
                <div class="input-group">
                  <input type="text" name="email" placeholder="youremail@mail.com" class="form-control">
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="submit">Subscribe</button>
                  </span>
                </div>
            {{ Form::close()}}
            </div> 
          </div>
          <!-- END NEWLETTER -->
        </div>
      </div>
    </div>
<div class="footer">
      <div class="container">
        <div class="row">
          <!-- BEGIN COPYRIGHT -->
          <div class="col-md-6 col-sm-6 padding-top-10">
            2021 ©  ALL Rights Reserved. 
          </div>
          <!-- END COPYRIGHT -->
          <!-- BEGIN PAYMENTS -->
          <div class="col-md-6 col-sm-6">
            <ul class="list-unstyled list-inline pull-right">
              <li><img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/img/payments/western-union.jpg" alt="We accept Western Union" title="We accept Western Union"></li>
              <li><img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/img/payments/american-express.jpg" alt="We accept American Express" title="We accept American Express"></li>
              <li><img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/img/payments/MasterCard.jpg" alt="We accept MasterCard" title="We accept MasterCard"></li>
              <li><img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/img/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal"></li>
              <li><img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/img/payments/visa.jpg" alt="We accept Visa" title="We accept Visa"></li>
            </ul>
          </div>
          <!-- END PAYMENTS -->
        </div>
      </div>
    </div>


     <div id="product-pop-up" style="display: none; width: 700px;">
            <div class="product-page product-pop-up">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-3">
                  <div class="product-main-image">
                    <img src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model7.jpg" alt="Cool green dress with red bell" class="img-responsive">
                  </div>
                  <div class="product-other-images">
                    <a href="javascript:;" class="active"><img alt="Berry Lace Dress" src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model3.jpg"></a>
                    <a href="javascript:;"><img alt="Berry Lace Dress" src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model4.jpg"></a>
                    <a href="javascript:;"><img alt="Berry Lace Dress" src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/img/products/model5.jpg"></a>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-9">
                  <h2>Cool green dress with red bell</h2>
                  <div class="price-availability-block clearfix">
                    <div class="price">
                      <strong><span>$</span>47.00</strong>
                      <em>$<span>62.00</span></em>
                    </div>
                    <div class="availability">
                      Availability: <strong>In Stock</strong>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat 
            Nostrud duis molestie at dolore.</p>
                  </div>
                  <div class="product-page-options">
                    <div class="pull-left">
                      <label class="control-label">Size:</label>
                      <select class="form-control input-sm">
                        <option>L</option>
                        <option>M</option>
                        <option>XL</option>
                      </select>
                    </div>
                    <div class="pull-left">
                      <label class="control-label">Color:</label>
                      <select class="form-control input-sm">
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Black</option>
                      </select>
                    </div>
                  </div>
                  <div class="product-page-cart">
                    <div class="product-quantity">
                        <input id="product-quantity2" type="text" value="1" readonly class="form-control input-sm">
                    </div>
                    <button class="btn btn-primary" type="submit">Add to cart</button>
                    <a href="shop-item.html" class="btn btn-default">More details</a>
                  </div>
                </div>

                <div class="sticker sticker-sale"></div>
              </div>
            </div>
    </div>


     <!-- Load javascripts at bottom, this will reduce page load time -->
    <!-- BEGIN CORE PLUGINS(REQUIRED FOR ALL PAGES) -->
    <!--[if lt IE 9]>
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/respond.min.js"></script>  
    <![endif]-->  
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/jquery.min.js" type="text/javascript"></script>
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>      
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/scripts/back-to-top.js" type="text/javascript"></script>
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/admin/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
    <!-- END CORE PLUGINS -->

    <!-- BEGIN PAGE LEVEL JAVASCRIPTS (REQUIRED ONLY FOR CURRENT PAGE) -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/fancybox/source/jquery.fancybox.pack.js" type="text/javascript"></script><!-- pop up -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/carousel-owl-carousel/owl-carousel/owl.carousel.min.js" type="text/javascript"></script><!-- slider for products -->
    <script src='{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/zoom/jquery.zoom.min.js' type="text/javascript"></script><!-- product zoom -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js" type="text/javascript"></script><!-- Quantity -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/rateit/src/jquery.rateit.js" type="text/javascript"></script>



    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/layout/scripts/layout.js" type="text/javascript"></script>

      <!-- BEGIN LayerSlider -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/slider-layer-slider/js/greensock.js" type="text/javascript"></script><!-- External libraries: GreenSock -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/slider-layer-slider/js/layerslider.transitions.js" type="text/javascript"></script><!-- LayerSlider script files -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/global/plugins/slider-layer-slider/js/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script><!-- LayerSlider script files -->
    <script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/assets/frontend/pages/scripts/layerslider-init.js" type="text/javascript"></script>
<script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/admin/js/toaster/toastr.min.js"></script>
<script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/js/common.js"></script>
<script src="{{UPLOAD_AND_DOWNLOAD_URL()}}public/front/js/jquery.bootstrap-growl.min.js"></script>
@include('layouts.flashmessage')
    <!-- END LayerSlider -->
    <script type="text/javascript">
        jQuery(document).ready(function() {
             Layout.init();    
            Layout.initOWL();
            LayersliderInit.initLayerSlider();
            Layout.initImageZoom();
            Layout.initTouchspin();
            Layout.initTwitter();
            
            Layout.initFixHeaderWithPreHeader();
            Layout.initNavScrolling();
        });
    </script>
    <!-- END PAGE LEVEL JAVASCRIPTS -->