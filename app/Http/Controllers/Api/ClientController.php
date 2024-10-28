<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::all();
        return response()->json($clients, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $client = Client::query()->findOrFail($id);
        return response()->json($client, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
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
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = Client::query()->findOrFail($id);
        $client->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
