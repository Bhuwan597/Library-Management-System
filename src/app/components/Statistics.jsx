import React from "react";
import {AcademicCapIcon, BookOpenIcon, LibraryIcon, UserIcon} from '@heroicons/react/solid';

const Statistics = () => {
    return (
        <>
            <div className="bg-white pb-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center">
                            <p className="text-sm text-red-500">Learn and Thrive</p>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Discover Knowledge at Krantikari Library
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Krantikari Library, a trusted source for inspiration and knowledge. Explore, learn, and
                                embark on
                                literary journeys with us.
                            </p>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">
                                    Active Users
                                </dt>
                                <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight text-gray-900">
                                    <UserIcon className="w-8 h-8 mr-2"/> 345
                                </dd>
                            </div>
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">
                                    Books Available
                                </dt>
                                <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight text-gray-900">
                                    <BookOpenIcon className="w-8 h-8 mr-2"/> 1.2k
                                </dd>
                            </div>
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">
                                    Borrowed Books
                                </dt>
                                <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight text-gray-900">
                                    <LibraryIcon className="w-8 h-8 mr-2"/> 546
                                </dd>
                            </div>
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">
                                    Satisfied Students
                                </dt>
                                <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight text-gray-900">
                                    <AcademicCapIcon className="w-8 h-8 mr-2"/> 98%
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
