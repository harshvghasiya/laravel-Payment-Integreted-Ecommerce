<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'images';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                    'name',
                    'path',
                    'extension',
                    'size',
                    'order_id',
                    'featured',
                    'imageable_id',
                    'imageable_type',
                ];

    /**
     * Get all of the owning imageable models.
     */
	public function imageable()
    {
        return $this->morphTo();
    }

    public function setFeatureAttribute($value)
    {
        if ((bool) $value) $this->attributes['featured'] = $value;
        else $this->attributes['featured'] = null;
    }

    // public function getUrlAttribute()
    // {
    //     return Storage::url($this->path);
    // }

    public function getUploadedTimeAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getSizeInKbAttribute()
    {
        return $this->size ? round($this->size / 1024, 2) : Null;
    }

}
