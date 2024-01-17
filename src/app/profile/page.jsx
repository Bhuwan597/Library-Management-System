import React from 'react';
import DashSidebar from '@/app/components/DashSidebar';
import {Input, Button} from '@nextui-org/react';
import {FaEnvelope, FaEyeSlash, FaUser} from 'react-icons/fa';

const ProfilePage = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-56">
                <DashSidebar/>
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
                        My Profile
                    </h2>
                </div>
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3">
                        <div className="mt-1">
                            <Input
                                name="name"
                                value={"AsHim Shrestha"}
                                autoComplete="name"
                                type="text"
                                label="Name"
                                endContent={<FaUser
                                    className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                            />
                        </div>

                        <div className="mt-1">
                            <Input
                                name="email"
                                autoComplete="email"
                                value={'pas079bct007@wrc.edu.np'}
                                type="email"
                                label="Email"
                                disabled
                                description={"You can't change your email."}
                                endContent={
                                    <FaEnvelope
                                        className="text-xl text-default-400 pointer-events-none flex-shrink-0"
                                    />
                                }
                            />
                        </div>

                        <div className="mt-1">
                            <Input
                                name="currentPassword"
                                autoComplete="current-password"
                                type="password"
                                label="Current Password"
                                endContent={
                                    <FaEyeSlash
                                        className="text-xl text-default-400 pointer-events-none flex-shrink-0"
                                    />
                                }
                            />
                        </div>

                        <div className="mt-1">
                            <Input
                                name="newPassword"
                                autoComplete="new-password"
                                type="password"
                                label="New Password"
                                endContent={
                                    <FaEyeSlash
                                        className="text-xl text-default-400 pointer-events-none flex-shrink-0"
                                    />
                                }
                            />
                        </div>

                        <div className="mt-1">
                            <Input
                                name="confirmNewPassword"
                                autoComplete="new-password"
                                type="password"
                                label="Confirm New Password"
                                endContent={
                                    <FaEyeSlash
                                        className="text-xl text-default-400 pointer-events-none flex-shrink-0"
                                    />
                                }
                            />
                        </div>


                        <p className="text-sm text-gray-500 mb-2 italic">Note: You can change your name and
                            password.</p>
                        <div className="mt-1">
                            <Button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
