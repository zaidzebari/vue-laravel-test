<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:2|confirmed'
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if ($user->save()) {
            return response()->json([
                'message' => 'user created succesfully',
                'status' => 201
            ], 201);
        } else {
            return response()->json([
                'message' => 'some error accurred',
                'status' => 500
            ], 500);
        }
    }
    public function login(Request $request)
    {
        // return response()->json($request->all());

        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'message' => 'invalid username or password',
                'status_code' => 401
            ], 401);
        }
        $user = $request->user();
        //   return $user;


        $tokenData = $user->createToken('Personal Access Token', [$user->role]);
        // if ($user->role == 'administrator') {
        //     // $tokenData = $user->createToken('My Token', ['place-orders'])->accessToken;
        //     $tokenData = $user->createToken('Personal Access Token', ['administrator']);
        // }else {
        //     //this token is for user
        //     $tokenData = $user->createToken('Personal Access Token', ['user']);
        // }

        $token = $tokenData->token;

        //check if it is make remembered_me 
        if ($request->remember_me) {
            $time =  Carbon::now()->addWeeks(1);
            $token->expires_at = $time;
        }
        if ($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expiries' => Carbon::parse($tokenData->token->expires_at)->toDayDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            response()->json([
                'message' => 'some error eccurred',
                'status_code' => 500
            ], 500);
        }
    }
    public function logout(Request $request)
    {
        // Auth::user()->token()->revoke();
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'logout successfully!',
            'status_code' => 200
        ], 200);
    }
    public function resetPasswordRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
        ]);
        $user = User::where('email', $request['email'])->first();
        if (!$user) {
            return response()->json([
                'message' => 'we have send a verification codeto your email address',
                'status_code' => 200,
            ], 200);
        } else {
            $random = rand(111111, 999999);
            $user->verification_code = $random;
            if ($user->save()) {
                $userData = array(
                    'email' => $user->email,
                    'full_name' => $user->name,
                    'random' => $random,
                );
                Mail::send('emails.reset', $userData, function ($message)  use($userData){
                    $message->from('no-replay@laravelandvue.com', 'passwrod request');
                    // $message->sender('john@johndoe.com','John Doe');
                    $message->to($userData['email'],$userData['full_name']);
                    // $message->cc('john@johndoe.com','John Doe');
                    // $message->bcc('john@johndoe.com','John Doe');
                    // $message->replyTo('john@johndoe.com','John Doe');
                    $message->subject('reset passwrod request(laravel vue)');
                    // $message->priority(3);
                    // $message->attach('john@johndoe.com','John Doe');
                });
                if (Mail::failures()) {
                    return response()->json([
                        'message' => 'Some erro accured, Please try again',
                        'status_code' => 500
                    ], 500);
                } else {
                    return response()->json([
                        'message' => 'we have send',
                        'status_code' => 200
                    ], 200);
                }
            } else {

                return response()->json([
                    'message' => 'Some error accured, Please try again',
                    'status_code' => 500,
                ], 500);
            }
        }
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'verification_code' => 'required|integer',
            'email' => 'required|string|email',
            'password' => 'required|string|min:2|confirmed'
        ]);
        $user = User::where('email', $request['email'])->where('verification_code',$request->verification_code)->first();
        if (!$user) {
            return response()->json([
                'message' => 'user not found/Invalid code',
                'status_code' => 401,
            ], 401);
        } else {    
            $user->password = bcrypt(trim($request->password));
            $user->verification_code = null;
            return response()->json([
                'message' => 'your Password has been updated successfully',
                'status_code' => 200,
            ], 200);
            if ($user->save()) {
            } else {
                return response()->json([
                    'message' => 'Some error accured, Please try again',
                    'status_code' => 500,
                ], 500);
            }
        }
    }
    public function profile(Request $request)
    {
        if ($request->user()) {
            return response()->json($request->user(), 200);
        }
        return response()->json([
            'message' => 'Not Logged in',
            'status_code' => 500,
        ], 500);
    }
}
