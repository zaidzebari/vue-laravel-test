<?php

use App\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::created([
            'name' => 'zaid salah',
            'email' => 'zaid@admin.com',
            'password' => bcrypt('zaiditit'),
            'role' => 'administrator'
        ]);
    }
}
