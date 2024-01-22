'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button, Input} from "@nextui-org/react";
import {FaEnvelope, FaEye, FaEyeSlash} from "react-icons/fa";

const AdminLoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [isVisible, setIsVisible] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className="rounded-sm border border-stroke shadow-default">
                <div className="flex flex-wrap items-center">
                    <div className="hidden w-full xl:block xl:w-1/2">
                        <div className="py-8 px-10 xl:px-16 text-center">
                            <Link className="mb-5.5 flex items-center" href="/">
                                <Image
                                    src={"/favicon.ico"}
                                    alt="Logo"
                                    width={50}
                                    height={32}
                                />
                                <span className="ml-2 font-bold text-lg">KrantiKari Library</span>
                            </Link>

                            <p className="text-gray-700">
                                Welcome to KrantiKari Library, where knowledge empowers change. As an admin, you have
                                the key to a vast collection of insightful books that can shape minds and spark
                                revolutions.
                            </p>

                            <Image height={400} width={600} alt={"Library Books"} src='/books-admin.jpg'
                                   className="mt-6 mx-auto"/>

                            <div className="mt-6">
                                <p className="text-gray-700">
                                    Explore the library, manage book inventory, and foster a culture of enlightenment.
                                    Your role is crucial in connecting people with the wisdom stored in these pages.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    Embrace the power of literature, and let the journey of knowledge transformation
                                    begin!
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full border-stroke xl:w-1/2 xl:border-l-2 ">
                        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                            <span className="mb-1.5 block font-medium text-red-600">Sign In As Admin</span>
                            <h2 className="mb-9 text-2xl font-bold text-red-800 sm:text-title-xl2">
                                Admin Login - KrantiKari Library
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="mb-2.5 block font-medium text-red-800"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            isRequired
                                            autoComplete="email"
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full rounded-lg md:w-[75%] lg:w-[90%]   bg-transparent outline-none focus:border-red-600 focus-visible:shadow-none"
                                            endContent={<FaEnvelope
                                                className="text-xl text-red-600 pointer-events-none flex-shrink-0"/>}
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="mb-2.5 block font-medium text-red-800"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete='password'
                                            isRequired
                                            id="password"
                                            type={isVisible ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="w-full rounded-lg md:w-[75%] lg:w-[90%] bg-transparent outline-none focus:border-red-600 focus-visible:shadow-none"
                                            endContent={<button className="focus:outline-none" type="button"
                                                                onClick={toggleVisibility}>
                                                {isVisible ? (<FaEyeSlash
                                                    className="text-2xl text-red-600 pointer-events-none"/>) : (
                                                    <FaEye
                                                        className="text-2xl text-red-600 pointer-events-none"/>)}
                                            </button>}
                                        />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <Button
                                        type="submit"
                                        className="flex w-full md:w-[75%] lg:w-[90%] justify-center rounded-md bg-red-600 px-3 py-1.5  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Sign in
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLoginPage;