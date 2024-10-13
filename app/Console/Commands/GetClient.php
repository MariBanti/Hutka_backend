<?php

namespace App\Console\Commands;

use App\Models\Client;
use Illuminate\Console\Command;

class GetClient extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hutka:get-client {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Returns data from database about client';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $userId = $this->argument('id');
        $client = Client::query()->find($userId)->getClientAsJSON();
        $this->line(json_encode($client));
    }
}
