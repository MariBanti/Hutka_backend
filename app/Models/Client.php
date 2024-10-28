<?php

namespace App\Models;

use http\Env\Request;
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

    public function removeClient()
    {
        $this->delete();
    }

    public function addClient(Request $request)
    {
        Client::create($request->all());
    }

    public function editClient(Request $request)
    {
        $this->fill($request->all());
        $this->save();
    }
}
