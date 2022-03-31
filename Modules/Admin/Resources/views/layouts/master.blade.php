<!DOCTYPE html>
<html lang="en" class="no-js">
    @include("admin::layouts.head")
    <body class="page-header-fixed page-sidebar-closed-hide-logo page-sidebar-closed-hide-logo">
        @include("admin::layouts.header")
        <div class="page-container">
			@include("admin::layouts.sidebar")
				<div class="page-content-wrapper">
					<div class="page-content">
						@yield('style')
						@yield('content')			
					</div>
				</div>
		</div>
		@include("admin::layouts.footer")
        @include("admin::layouts.javascript")
        @include('admin::layouts.flashmessage')
        @yield('javascript')
    </body>
</html>
