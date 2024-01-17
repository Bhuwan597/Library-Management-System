'use client';

import {Sidebar} from 'flowbite-react';
import {HiChartPie} from 'react-icons/hi';
import {FaSignOutAlt, FaUser} from "react-icons/fa";
import {usePathname} from "next/navigation";

const DashSidebar = () => {

    const pathname = usePathname();
    return (

        <Sidebar className='w-full md:w-56'>
            <Sidebar.Logo href="/" img="/favicon.ico" imgAlt="KrantiKari logo">
                KrantiKari Library
            </Sidebar.Logo>


            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-col gap-1'>
                    <Sidebar.Item active={pathname === '/profile'} href="/profile" icon={FaUser} label="User"
                                  labelColor="red">
                        Profile
                    </Sidebar.Item>

                    <Sidebar.Item active={pathname === '/dashboard'} href="/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>


                    <Sidebar.Item href="#" icon={FaSignOutAlt}>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>);
}

export default DashSidebar