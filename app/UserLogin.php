<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;


class UserLogin extends Authenticatable
{
    protected $table="user_login";

    public function registerStore($request)
    {
    	$res=new self;
    	$res->name=$request->name;
    	$res->email=$request->email;
    	$res->password=\Hash::make($request->password);
    	$res->status=1;
    	$res->mobile=$request->mobile;
    	$res->save();

        $errors="";
        $msg="User Registered successfully";
        flashMessage('success',$msg);

        return response()->json(['success' => true,'msg'=>$msg, 'status'=>1,'errors' => $errors]);
    }

    public function userLogin($request)
    {
    	if(Auth::guard('user_login')->attempt(['email'=>$request->email, 'password'=>$request->password])){
    		// dd('dfgf');
    		$msg="Login successful";
    		$errors="";
    		flashMessage('success',$msg);
            $res=\App\Cart::where('ip',$request->ip())->get();
            if(isset($res) && !$res->isEmpty() && Auth::guard('user_login')->check()){
                foreach ($res as $key => $value) {
                    $value->user_id=Auth::guard('user_login')->user()->id;
                    $value->save();
                }
            }
          return response()->json(['success' => true,'msg'=>$msg, 'status'=>1,'errors' => $errors]);
    	}
        
        $msg="Invalid Credentials";
    	$errors="Login Fail";
    	flashMessage('error',$msg);
        return response()->json(['success' => false,'msg'=>$msg, 'status'=>0,'errors' => $errors]);

    }

    public function logout()
    {
    	Auth::guard('user_login')->logout();
    	$msg="Logout successfully";
        flashMessage('success',$msg);
        return redirect()->route('front.home');
    }
}
