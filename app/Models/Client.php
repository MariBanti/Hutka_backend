<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

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
