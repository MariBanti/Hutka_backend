<?php

namespace App\Http\Controllers\Front;

use App\Models\Trip;

class TripController
{
    public function getTrips($stop_from, $stop_to, $date, $passengers)
    {
        $trips = Trip::query()->where('stop_from', '=', $stop_from)
            ->where('stop_to', '=', $stop_to)
            ->where('date', '=', $date)
            ->where('seats_left', '>=', $passengers);
        return json_encode($trips->get());
    }

    public function getTrip($id){
        $trip = Trip::query()->find($id);
        return json_encode($trip);
    }
}
