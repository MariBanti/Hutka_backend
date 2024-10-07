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
        Schema::create('rides', function (Blueprint $table) {
            $table->foreignId('trip')->references('id')->on('trips');
            $table->foreignId('client')->references('id')->on('clients');
            $table->foreignId('vehicle')->references('id')->on('vehicles');
            $table->foreignId('driver')->references('id')->on('drivers');
            $table->foreignId('route')->references('id')->on('routes');
            $table->boolean('is_booked')->default(false);
            $table->dateTime('booked_at')->nullable();
            $table->boolean('is_paid')->default(false);
            $table->dateTime('paid_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};
