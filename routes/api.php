<?php

use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Auth\JWTAuthController;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('api')->group(function () {
    Route::apiResource('clients', ClientController::class);
});

Route::middleware([\App\Http\Middleware\JwtMiddleware::class])->group(function () {
    Route::get('user', [JWTAuthController::class, 'getUser']);
    Route::post('logout', [JWTAuthController::class, 'logout']);
});

Route::get('trips/{stop_from}/{stop_to}/{date}/{passengers}', function ($stop_from, $stop_to, $date, $passengers)
{$trips = Trip::query()->where('departureCity', '=', $stop_from)
    ->where('arrivalCity', '=', $stop_to)
    ->where('date', '=', $date)
    ->where('seats_left', '>=', $passengers);
return json_encode($trips->get());});
Route::get('trip/{id}', function ($id)
{$trip = Trip::query()->find($id);
    return json_encode($trip);});

Route::get('stops/{id}', \App\Http\Controllers\Front\BusstopController::class);
