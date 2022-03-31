<?php

namespace App\Http\Controllers;

use App\UserLogin;
use Illuminate\Http\Request;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserLoginRequest;


class UserLoginController extends Controller
{
    public function __construct()
    {
        $this->Model=new UserLogin;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $title="Login";
        return view('front.auth.login',compact('title'));
    }

    public function registerView()
    {
        $title="Register";
        return View('front.auth.register',compact('title'));
    }

    public function registerStore(UserRegisterRequest $request)
    {
       return $this->Model->registerStore($request);
    }

    public function login(UserLoginRequest $request)
    {
        return $this->Model->userLogin($request);
    }

    public function logout()
    {
        return $this->Model->logout();
    }

    public function changePassword()
    {
        $title="Change Password";
        return view('front.auth.change_password',compact('title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserLogin  $userLogin
     * @return \Illuminate\Http\Response
     */
    public function show(UserLogin $userLogin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserLogin  $userLogin
     * @return \Illuminate\Http\Response
     */
    public function edit(UserLogin $userLogin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserLogin  $userLogin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserLogin $userLogin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserLogin  $userLogin
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserLogin $userLogin)
    {
        //
    }
}
