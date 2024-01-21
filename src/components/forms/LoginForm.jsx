'use client';

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import ForgotModal from "@/components/partials/ForgotModal";
const LoginForm = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        console.log("Form data submitted:", formData);
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <div className="mt-2">
                    <Input
                        name="email"
                        autoComplete="email"
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        endContent={<FaEnvelope className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <ForgotModal text={'Forgot password?'}/>
                    </div>
                </div>
                <div className="mt-2">
                    <Input
                        name="password"
                        autoComplete="current-password"
                        type={isVisible ? "text" : "password"}
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
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
    );
};

export default LoginForm;
