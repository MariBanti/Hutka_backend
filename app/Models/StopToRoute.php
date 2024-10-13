<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StopToRoute extends Model
{
    use HasFactory;

    protected $fillable = [
        'stop',
        'route'
    ];
}
