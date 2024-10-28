<?php

namespace App\Models;

use http\Env\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $a = 5;
    protected $fillable = [
        'surname',
        'name',
        'father_name',
        'phone',
        'email',
    ];

    public function getClientAsJSON()
    {
        return $this->toJSON();
    }
}
