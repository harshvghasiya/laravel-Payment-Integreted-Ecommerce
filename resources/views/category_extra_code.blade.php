<div class="sidebar col-md-3 col-sm-4">
            <ul class="list-group margin-bottom-25 sidebar-menu">
              @if(isset($category) && $category != null)
                @foreach($category as $key=>$result)
                   <li class="list-group-item clearfix"><a href="{{route('front.category.index',$result->slug)}}"><i class="fa fa-angle-right"></i> {{$result->name}}</a></li>
                @endforeach
              @endif
            </ul>
          </div>