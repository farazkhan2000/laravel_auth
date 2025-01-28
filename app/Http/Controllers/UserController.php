<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request) {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        User::create($data);

        return response()->json(['message' => 'User registered successfully']);
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authentication')->plainTextToken; 
            return response()->json(['message' => 'Login successful', 'token' => $token], 200);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function logout() {
        Auth::logout();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

    public function getUser() {
        $user = Auth::user();
        return response()->json(['user' => $user], 200);
    }

    public function verifyPassword() {

        if (Hash::check('faraz@1234', '$2y$10$ShhNwrsauyYzxqVd2r/FqeElSu3MI8bCwRDQ.66xQ6mMHpzVQBR0C')) {
            return "Password matches!";
        } else {
            return "Invalid credentials.";
        }

    }
}
