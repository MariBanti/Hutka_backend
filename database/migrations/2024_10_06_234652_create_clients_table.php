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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('surname',40)->nullable(false);
            $table->string('name',40)->nullable(false);
            $table->string('father_name',40);
            $table->string('phone', 17)->nullable(false);
            $table->boolean('phone_verified')->default(false);
            $table->string('email')->nullable(false);
            $table->boolean('email_verified')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
