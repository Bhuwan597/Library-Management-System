import React from 'react';
import DashSidebar from "@/app/components/DashSidebar";

const DashboardPage = () => {
    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className='md:w-56'>
                <DashSidebar/>
            </div>
        </div>
    );
};

export default DashboardPage;