<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required',
            'mobile'=>'required',
            'email'=>'required|email',
            'password'=>'required|confirmed',
        ];
    }

    public function messages()
    {
        return[
            'name.required'=>"Name is required",
            'mobile.required'=>"Mobile is required",
            'email.required'=>'Email is required',
            'password.required'=>'Password is required',
            'email.email'=>'Email is Invalid',
            'password.confirmed'=>'Password did not matched',
        ];
    }
}
