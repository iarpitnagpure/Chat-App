'use client';
import { useState } from "react";
import "./signup.css";
import Link from "next/link";
import ThemeProvider from "../components/themeprovider";

const Signup = () => {
    const [gender, setGender] = useState('male');

    const handleGenderRadioClick = (event) => {
        if (event.target.value !== gender) setGender(event.target.value);
    };

    return <div className="flex overflow-hidden justify-center w-screen h-screen">
        <ThemeProvider />
        <div className="flex flex-col justify-center items-center overflow-hidden signup-input-container">
            <label className="flex justify-center w-full m-3 text-xl font-semibold">
                Sign Up
            </label>
            <label className="input input-bordered flex items-center gap-2 w-11/12	m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-11/12	m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-11/12 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Password" />
            </label>
            <label className="flex items-center w-11/12 m-2">
                <input type="radio" name="gender" value="male" className="radio radio-primary mr-2 ml-0.5" checked={gender === 'male'} onChange={handleGenderRadioClick} />
                <span className="label-text mr-7">Male</span>
                <input type="radio" name="gender" value="female" className="radio radio-primary mr-2" checked={gender === 'female'} onChange={handleGenderRadioClick} />
                <span className="label-text">Female</span>
            </label>
            <label className="flex items-center w-11/12 m-2">
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary mr-2 ml-1" />
                <span className="label-text">Use Random Avatar</span>
            </label>
            <button className="btn btn-primary w-11/12 mt-6 mb-4 login-button">Sign Up</button>
            <label className="flex w-11/12 m-2 text-sm font-semibold">
                <span className="label-text mr-1"> Already have an account?</span>
                <Link href="/login" className="btn-link">Login</Link>
            </label>
        </div>
    </div>
};

export default Signup;