<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/zaid', function () {
    return 'zaid salah';
});

// Route::resource('categories', 'CategoryController');
//any other we will return welcome method that have vue single page application
Route::get("{any}", function () {
    return view('welcome');
})->where("any",".*");