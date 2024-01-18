'use client'
import React, {useState} from 'react';
import {Button, Input} from "@nextui-org/react";
import {FaEnvelope, FaEyeSlash, FaUser} from "react-icons/fa";

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

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessMessage('Profile Updated Successfully.');

        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="mt-1">
                <Input
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
                    type="email"
                    label="Email"
                    disabled
                    description={"You can't change your email."}
                    endContent={<FaEnvelope className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                />
            </div>

            <div className="mt-1">
                <Input
                    name="currentPassword"
                    autoComplete="current-password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    type="password"
                    label="Current Password"
                    endContent={<FaEyeSlash className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                />
            </div>

            <div className="mt-1">
                <Input
                    name="newPassword"
                    autoComplete="new-password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    type="password"
                    label="New Password"
                    endContent={<FaEyeSlash className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                />
            </div>

            <div className="mt-1">
                <Input
                    name="confirmNewPassword"
                    autoComplete="new-password"
                    value={formData.confirmNewPassword}
                    onChange={handleChange}
                    type="password"
                    label="Confirm New Password"
                    endContent={<FaEyeSlash className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                />
            </div>

            <p className="text-sm text-gray-500 mb-2 italic">Note: You can change your name and password.</p>

            {successMessage && (
                <p className="text-green-500 text-center">{successMessage}</p>
            )}

            <div className="mt-1">
                <Button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    Save Changes
                </Button>
            </div>
        </form>
    );
};

export default ProfilePageForm;
