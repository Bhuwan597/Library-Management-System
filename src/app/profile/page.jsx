
import React from 'react';
import ProfilePageForm from "@/app/components/forms/ProfilePageForm";

const ProfilePage = () => {


    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
                        My Profile
                    </h2>
                </div>
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                 <ProfilePageForm/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
