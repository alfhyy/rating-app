<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'idUser',
        'idMenu',
        'comment',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'id');
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'idMenu', 'id');
    }
}
