<?php

namespace Tests\Feature;

use App\Models\Client;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ClientTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_a_client()
    {
        $clientData = [
            'surname' => 'Ivanov',
            'name' => 'Ivan',
            'father_name' => 'Ivanovich',
            'phone' => '+12345678901',
            'phone_verified' => false,
            'email' => 'ivanov@example.com',
            'email_verified' => false,
        ];

        $response = $this->postJson('/api/clients', $clientData);

        $response->assertStatus(201)
            ->assertJsonFragment(['surname' => 'Ivanov']);

        $this->assertDatabaseHas('clients', ['surname' => 'Ivanov']);
    }

    /** @test */
    public function it_can_get_a_client()
    {
        $client = Client::factory()->create();

        $response = $this->getJson("/api/clients/{$client->id}");

        $response->assertStatus(200)
            ->assertJsonFragment(['surname' => $client->surname]);
    }

    /** @test */
    public function it_can_update_a_client()
    {
        $client = Client::factory()->create();
        $updatedData = ['surname' => 'Petrov'];

        $response = $this->putJson("/api/clients/{$client->id}", $updatedData);

        $response->assertStatus(200)
            ->assertJsonFragment(['surname' => 'Petrov']);

        $this->assertDatabaseHas('clients', ['id' => $client->id, 'surname' => 'Petrov']);
    }

    /** @test */
    public function it_can_delete_a_client()
    {
        $client = Client::factory()->create();

        $response = $this->deleteJson("/api/clients/{$client->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('clients', ['id' => $client->id]);
    }
}
