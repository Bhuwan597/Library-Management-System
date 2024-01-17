import React from 'react';
import DashSidebar from "@/app/components/DashSidebar";

const ProfilePage = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col md:flex-row'>
                <div className='md:w-56'>
                    <DashSidebar/>
                </div>
            </div>
            <h1>I am Profile Page</h1>
        </>
    );


}

export default ProfilePage;