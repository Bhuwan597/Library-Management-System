'use client';

import React,{useState} from 'react';
import {Button, Input} from "@nextui-org/react";
import {FaEnvelope, FaLock, FaUserAlt} from "react-icons/fa";

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "email" && value.length !== 0) {
            setEmailTouched(true);
        } else {
            setEmailTouched(false);
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering with:", formData);
        console.log(isInvalid, isInvalidPassword);
    };
    const [emailTouched, setEmailTouched] = useState(false);
    const validateEmail = (value) =>
        value.match(/^pas\d{3}(bge|bct|bce|bme|bam|bel|bei)\d{3}@wrc\.edu\.np$/);
    const isInvalid = React.useMemo(() => {
        if (!emailTouched || formData?.email === "") return false;
        return !validateEmail(formData?.email);
    }, [emailTouched, formData?.email]);

    const isInvalidPassword = React.useMemo(() => {
        return formData?.password !== formData?.confirmPassword;
    }, [formData?.password, formData?.confirmPassword]);


    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <div className="mt-2">
                    <Input
                        isRequired
                        name="name"
                        type="text"
                        label="Name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        endContent={
                            <FaUserAlt
                                className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                </div>
            </div>

            <div>
                <div className="mt-2">
                    <Input
                        isRequired
                        name="email"
                        type="email"
                        autoComplete="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        description="Only WRC students can register."
                        isInvalid={isInvalid}
                        color={
                            isInvalid && emailTouched
                                ? "danger"
                                : !isInvalid && emailTouched
                                    ? "success"
                                    : "default"
                        }
                        errorMessage={
                            isInvalid &&
                            "Please enter a valid WRC student email (pasXXXXXXXXX@wrc.edu.np)"
                        }
                        endContent={
                            <FaEnvelope
                                className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                </div>
            </div>

            <div>
                <div className="mt-2">
                    <Input
                        isInvalid={isInvalidPassword}
                        isRequired
                        name="password"
                        type="password"
                        label="Password"
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                        color={
                            isInvalidPassword
                                ? "danger"
                                : !isInvalidPassword && formData?.password?.length !== 0
                                    ? "success"
                                    : "default"
                        }
                        errorMessage={isInvalidPassword && "Password doesn't match"}
                        endContent={
                            <FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                </div>
            </div>

            <div>
                <div className="mt-2">
                    <Input
                        isInvalid={isInvalidPassword}
                        isRequired
                        name="confirmPassword"
                        type="password"
                        autoComplete="confirm-password"
                        label="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        color={
                            isInvalidPassword
                                ? "danger"
                                : !isInvalidPassword && formData?.password?.length !== 0
                                    ? "success"
                                    : "default"
                        }
                        errorMessage={isInvalidPassword && "Password doesn't match"}
                        endContent={
                            <FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                </div>
            </div>

            <div>
                <Button
                    isDisabled={!(!isInvalid && !isInvalidPassword)}
                    type={!isInvalid && !isInvalidPassword ? "submit" : "button"}
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    Register
                </Button>
            </div>
        </form>
    );
};

export default RegisterForm;