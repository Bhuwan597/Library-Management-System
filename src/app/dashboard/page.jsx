import React from 'react';
import DashSidebar from "@/app/components/DashSidebar";

const DashboardPage = () => {
    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className='md:w-56'>
                <DashSidebar/>
            </div>
            <h2>Dashboard Page</h2>
        </div>
    );
};

export default DashboardPage;