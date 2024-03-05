'use client';
import { useRouter } from "next/navigation";
import "./login.css";
import ThemeProvider from "../components/themeprovider";
import { useState } from "react";
import Alert from "../components/alertProvider";

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setError] = useState(false);
    const history = useRouter();

    const handleLoginClick = () => {
        if (username && password) {
            resetAlertState();
            validateLoginCredentials();
        } else {
            const errorText = 'Please enter valid username and password';
            if (!isError) setError(true);
            if (errorMessage !== errorText) setErrorMessage(errorText);
        }
    };

    const validateLoginCredentials = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth/login`,
            {
                method: 'POST',
                headers: {
                    ['content-type']: 'application/json'
                },
                body: JSON.stringify({ username, password })
            }
        );
        const data = await response.json();
        if (data.isError) {
            setError(true);
            setErrorMessage(data.error);
        } else {
            console.log(data);
        }
    };

    const resetAlertState = () => {
        setError(false);
        setErrorMessage('');
    };

    return <div className="flex overflow-hidden justify-center w-screen h-screen">
        <ThemeProvider />
        <div className="flex flex-col justify-center items-center overflow-hidden login-input-container">
            <label className="flex justify-center w-full m-3 text-xl font-semibold">
                Login
            </label>
            <label className="input input-bordered flex items-center gap-2 w-11/12 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-11/12 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
            </label>
            <button className="btn btn-primary w-11/12 mt-6 mb-4 login-button" onClick={handleLoginClick}>
                Log In
            </button>
            <div className="divider ml-5 mr-5">Or</div>
            <button className="btn btn-neutral w-11/12 mt-4 login-button" onClick={() => history.push('/signup')}>Sign Up</button>
        </div>
        <Alert isAlertVisible={isError} alertText={errorMessage} clickHandler={resetAlertState} />
    </div>
};

export default Login;