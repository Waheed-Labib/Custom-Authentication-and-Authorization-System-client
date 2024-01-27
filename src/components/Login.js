import React, { useRef } from 'react';
import SubmitButton from './common/SubmitButton';
import FormControl from './common/FormControl';

const Login = () => {
    let emailFieldRef = useRef(null);
    let passwordFieldRef = useRef(null);

    const handleLogin = e => {
        e.preventDefault();

        console.log(emailFieldRef.current.value)
        console.log(passwordFieldRef.current.value)

        emailFieldRef.current.value = '';
        passwordFieldRef.current.value = '';

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* email field */}
                        <FormControl label='Email' type='email' ref={emailFieldRef}></FormControl>
                        {/* password field */}
                        <FormControl label='Password' type='password' ref={passwordFieldRef}></FormControl>
                        {/* submit button */}
                        <SubmitButton buttonText={'Login'}></SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;