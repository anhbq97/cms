<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/test', function () {
    return response()->json('s');
});

Route::group(['prefix' => 'v1', 'name' => 'v1.'], function () {
    Route::group(['prefix' => 'auth', 'name' => 'auth.'], function () {
        Route::post('/register', [Api\v1\AuthController::class, 'register'])->name('register');
        Route::post('/login', [Api\v1\AuthController::class, 'login'])->name('login');
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
