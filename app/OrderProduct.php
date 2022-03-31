<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $table="order_product";

    public function Order()
    {
    	return $this->belongsTo('\App\Order','order_id','id');
    }

    public function product()
    {
    	return $this->belongsTo('\App\Models\Product','product_id','id');
    }
}
