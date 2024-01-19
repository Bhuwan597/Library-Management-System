'use client'
import React, {useState} from 'react';
import {Button, Input} from "@nextui-org/react";
import {FaEnvelope, FaLock, FaUser} from "react-icons/fa";

const ProfilePageForm = () => {
    const [formData, setFormData] = useState({
        name: "AsHim Shrestha",
        email: 'pas079bct007@wrc.edu.np',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [successMessage, setSuccessMessage] = useState('');


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };
    const isInvalidPassword = React.useMemo(() => {
        return formData?.newPassword !== formData?.confirmNewPassword;
    }, [formData?.newPassword, formData?.confirmNewPassword]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword === formData.currentPassword) {
            setSuccessMessage('');
            setErrorMessage("New password cannot be the same as the old password!!!");
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        if (isInvalidPassword) {
            return;
        }

        setSuccessMessage("Profile Updated Successfully!");
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (<form className="space-y-3" onSubmit={handleSubmit}>
        <div className="mt-1">
            <Input
                isRequired
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                type="text"
                label="Name"
                endContent={<FaUser className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
            />
        </div>

        <div className="mt-1">
            <Input
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                label="Email"
                disabled
                description={"You can't change your email."}
                endContent={<FaEnvelope className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
            />
        </div>

        <div className="mt-1">
            <Input
                isRequired
                onChange={handleChange}
                name="currentPassword"
                value={formData.currentPassword}
                type='password'
                autoComplete="current-password"
                label="Current Password"
                endContent={
                    <FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                }
            />
        </div>

        <div className="mt-1">
            <Input
                isRequired
                name="newPassword"
                type='password'
                autoComplete="new-password"
                label="New Password"
                onChange={handleChange}
                isInvalid={isInvalidPassword}
                value={formData.newPassword}
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

        <div className="mt-1">
            <Input
                isRequired
                name="confirmNewPassword"
                autoComplete="new-password"
                label="Confirm New Password"
                type='password'
                onChange={handleChange}
                value={formData.confirmNewPassword}
                isInvalid={isInvalidPassword}
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
                }/>
        </div>


        <p className="text-sm text-gray-500 mb-2 italic">Note: You can change your name and password.</p>
        {errorMessage && (<p className="text-red-500 text-center">{errorMessage}</p>)}
        {successMessage && (<p className="text-green-500 text-center">{successMessage}</p>)}


        <div className="mt-1">
            <Button
                isDisabled={!(!isInvalidPassword) || !!successMessage || !!errorMessage}
                type={!isInvalidPassword ? "submit" : "button"}
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
                Save Changes
            </Button>
        </div>
    </form>);
};

export default ProfilePageForm;