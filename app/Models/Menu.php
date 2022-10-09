<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'idCategory',
        'name',
        'description',
        'price',
        'ratingcount' => '0',
        'ratingsum' => '0'
    ];

    public function category()
    {
        return $this->belongsTo(Categories::class, 'idCategory', 'id');
    }
}
