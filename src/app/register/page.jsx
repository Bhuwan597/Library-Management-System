import React from "react";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import RegisterForm from "@/app/components/partials/RegisterForm";


const RegisterPage = () => {

    return (
        <>
            <Navbar/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
                        Create an Account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <RegisterForm/>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            className="font-semibold leading-6 text-red-600 hover:text-red-500"
                            href="/login"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
