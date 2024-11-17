<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientController extends Controller
{
    /**
     * @OA\Schema(
     *     schema="Client",
     *     type="object",
     *     description="Client model",
     *     properties={
     *         @OA\Property(property="id", type="string", description="Unique identifier of the client"),
     *         @OA\Property(property="surname", type="string", maxLength=40, description="Surname of the client"),
     *         @OA\Property(property="name", type="string", maxLength=40, description="Name of the client"),
     *         @OA\Property(property="father_name", type="string", maxLength=40, nullable=true, description="Father's name of the client"),
     *         @OA\Property(property="phone", type="string", maxLength=17, description="Phone number"),
     *         @OA\Property(property="phone_verified", type="boolean", description="Phone verification status"),
     *         @OA\Property(property="email", type="string", format="email", description="Email address"),
     *         @OA\Property(property="email_verified", type="boolean", description="Email verification status"),
     *         @OA\Property(property="created_at", type="string", format="date-time", description="Timestamp when the client was created"),
     *         @OA\Property(property="updated_at", type="string", format="date-time", description="Timestamp when the client was last updated"),
     *     }
     * )
     *
     *
     * @OA\Get(
     *     path="/api/clients",
     *     operationId="getClients",
     *     tags={"Clients"},
     *     summary="Get list of clients",
     *     description="Returns a list of all clients",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Client")
     *         )
     *     )
     * )
     */
    public function index()
    {
        $clients = Client::all();
        return response()->json($clients, Response::HTTP_OK);
    }

    /**
     * @OA\Post(
     *     path="/api/clients",
     *     operationId="createClient",
     *     tags={"Clients"},
     *     summary="Create a new client",
     *     description="Creates a new client with the given data",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Client")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Client created successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Client")
     *     )
     * )
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'surname' => 'required|string|max:40',
            'name' => 'required|string|max:40',
            'father_name' => 'nullable|string|max:40',
            'phone' => 'required|string|max:17',
            'phone_verified' => 'boolean',
            'email' => 'required|email',
            'email_verified' => 'boolean',
        ]);

        $client = Client::create($validatedData);

        return response()->json($client, Response::HTTP_CREATED);
    }

    /**
     * @OA\Get(
     *     path="/api/clients/{id}",
     *     operationId="getClient",
     *     tags={"Clients"},
     *     summary="Get a client by ID",
     *     description="Fetches a single client by their ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="Client ID",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Client")
     *     )
     * )
     */
    public function show(string $id)
    {
        $client = Client::query()->findOrFail($id);
        return response()->json($client, Response::HTTP_OK);
    }

    /**
     * @OA\Put(
     *     path="/api/clients/{id}",
     *     operationId="updateClient",
     *     tags={"Clients"},
     *     summary="Update an existing client",
     *     description="Updates a client's details",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="Client ID",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Client")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Client updated successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Client")
     *     )
     * )
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'surname' => 'sometimes|required|string|max:40',
            'name' => 'sometimes|required|string|max:40',
            'father_name' => 'nullable|string|max:40',
            'phone' => 'sometimes|required|string|max:17',
            'phone_verified' => 'boolean',
            'email' => 'sometimes|required|email',
            'email_verified' => 'boolean',
        ]);

        $client = Client::query()->findOrFail($id);
        $client->update($validatedData);

        return response()->json($client, Response::HTTP_OK);
    }

    /**
     * @OA\Delete(
     *     path="/api/clients/{id}",
     *     operationId="deleteClient",
     *     tags={"Clients"},
     *     summary="Delete a client",
     *     description="Deletes a client by their ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="Client ID",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Client deleted successfully"
     *     )
     * )
     */
    public function destroy(string $id)
    {
        $client = Client::query()->findOrFail($id);
        $client->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
