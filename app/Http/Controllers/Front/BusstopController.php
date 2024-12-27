<?php

namespace App\Http\Controllers\Front;

use App\Models\Busstop;

class BusstopController
{
    public function __invoke($id)
    {
        return Busstop::query()->select('name')->where('id', $id)->first();
    }
}
