"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaBars, FaBook, FaCalendarPlus, FaCog, FaEnvelopeOpenText, FaHome, FaUser, FaUsers } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false)
  const sidebarRef = useRef();
  useEffect(() => {
    if (typeof window === "undefined" || !domLoaded) return;
    setDomLoaded(true);
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <>
      <div className="flex items-center justify-between h-14 border-b sticky top-0 bg-white">
        <h1 className="text-xl font-bold ml-2">Admin Dashboard</h1>
        <div className="mr-4">
          {isOpen ? (
            <>
              <FaArrowLeft
                className="cursor-pointer ease-in-out duration-200"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </>
          ) : (
            <>
              <FaBars
                className="cursor-pointer ease-in-out	 duration-200"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </>
          )}
        </div>
      </div>
      <div
        className={`min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-[-400px]"
        } fixed left-0 transition-all delay-200`}
        ref={sidebarRef}
      >
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FaHome/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                   <FaEnvelopeOpenText/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Messages
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                   <FaBook/>
                   </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Books
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                    1.2k
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Tasks
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                   <FaCalendarPlus/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Assign Books
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                   <FaUsers/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                   Users
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                    15
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/admin/profile"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                   <FaUser/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/settings"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FaCog/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                   <FaArrowLeft/>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
