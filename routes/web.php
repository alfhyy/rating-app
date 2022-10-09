<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CommentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [MenuController::class, 'index'])->name('index');

Route::get('/menu', [MenuController::class, 'create']);

Route::get('/category', [CategoriesController::class, 'create']);

Route::get('/comment/{id?}', [CommentController::class, 'create']);

Route::post('/menu', [MenuController::class, 'store']);

Route::post('/category', [CategoriesController::class, 'store']);

Route::post('/comment', [CommentController::class, 'store']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
