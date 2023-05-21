<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//get all states and regions
Route::get("/all", [ApiController::class, "index"])->middleware("cors");
//get all states
Route::get("/states", [ApiController::class, "states"])->middleware("cors");
//get region by alias
Route::get("/regions/{alias}", [ApiController::class, "regions"])->middleware("cors");
