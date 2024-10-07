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
            $table->foreignId('vehicle')->references('id')->on('vehicles');
            $table->foreignId('driver')->references('id')->on('drivers');
            $table->foreignId('route')->references('id')->on('routes');
            $table->unsignedSmallInteger('price')->nullable(false)->default(0);
            $table->dateTime('time')->nullable(false)->default(now()->addWeek());
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
