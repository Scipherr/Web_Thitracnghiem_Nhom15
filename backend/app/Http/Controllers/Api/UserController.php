<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SavsoftUser; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
   public function login(Request $request)
    {
        $request->validate([
            'mssv' => 'required',
            'password' => 'required'
        ]);

      
        $user = SavsoftUser::where('studentid', $request->mssv)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Sai tài khoản hoặc mật khẩu'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Đăng nhập thành công',
            'data' => $user,
            'token' => $token
        ], 200);
    }
}