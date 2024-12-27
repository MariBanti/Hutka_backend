<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->time('departureTime');
            $table->time('travelTime');
            $table->time('arrivalTime');
            $table->string('departureCity');
            $table->string('departureStation');
            $table->string('arrivalCity');
            $table->string('arrivalStation');
            $table->string('busModel');
            $table->string('busNumber');
            $table->string('price');
            $table->date('date');
            $table->smallInteger('seats_left')->nullable(false)->default(10);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
