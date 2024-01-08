'use client';
import React, {useState} from 'react';
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import {Button, Tooltip} from "@nextui-org/react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', formData);
    };

    return (
        <>
            <Navbar/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                                <Tooltip
                                    content="Use your college email address"
                                    className="ml-1 text-red-600"
                                >
                                    <span>*</span>
                                </Tooltip>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none text-left pl-1"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link href="#" className="font-semibold text-red-600 hover:text-red-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none text-left pl-1"
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                // isLoading
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don&apos;t Have an Account?{' '}
                        <Link className="font-semibold leading-6 text-red-600 hover:text-red-500" href='/register'>
                           Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
