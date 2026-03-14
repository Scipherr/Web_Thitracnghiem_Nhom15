<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SavsoftUser; 
use Illuminate\Http\Request;

class UserController extends Controller
{
   
    public function index()
    {
        
        $users = SavsoftUser::all(); 
        
        return response()->json([
            'status' => 'success',
            'data' => $users
        ], 200);
    }

   
    public function show($id)
    {
        
      $user = SavsoftUser::find($id);

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'Không tìm thấy sinh viên này'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 200);
    }
}