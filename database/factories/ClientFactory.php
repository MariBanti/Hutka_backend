<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'surname' => $this->faker->lastName,
            'name' => $this->faker->firstName,
            'father_name' => $this->faker->firstName,
            'phone' => $this->faker->phoneNumber,
            'phone_verified' => $this->faker->boolean,
            'email' => $this->faker->email,
            'email_verified' => $this->faker->boolean
        ];
    }
}
