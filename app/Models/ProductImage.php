<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Yajra\Datatables\Datatables;
use Crypt;

class ProductImage extends Model
{
    protected $table="product_images";
    const STATUS_ACTIVE ='1';
    const STATUS_INACTIVE ='0';

    public function getProductImageUrl(){

      $imageUrl_u ='';
      $imagePath=PRODUCT_IMAGE_UPLOAD_PATH().$this->name;
      $imageUrl= PRODUCT_IMAGE_UPLOAD_URL().$this->name;
      if (isset($this->name) && !empty($this->name) && file_exists($imagePath) ) {
          return $imageUrl;
      }else{
          $imageUrl=$imageUrl_u;
      }
      return $imageUrl;
    }    
}
