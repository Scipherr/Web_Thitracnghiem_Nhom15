<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Artisan; 

Route::get('/', function () {
    return view('welcome');
});


Route::get('/clear', function () {
    Artisan::call('optimize:clear');
    return 'Đã dọn dẹp toàn bộ Cache thành công!';
});

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);