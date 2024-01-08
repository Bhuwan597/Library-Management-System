'use client';
import React, { useState } from 'react';
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

const LoginPage = () => {


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
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
            <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <div className="mt-2">
                                <Input
                                    name='email'
                                    autoComplete='email'
                                    type="email"
                                    label="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <Link href="#" className="font-semibold text-red-600 hover:text-red-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Input
                                    name='password'
                                    autoComplete='current-password'
                                    type="password"
                                    label="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <Button
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
