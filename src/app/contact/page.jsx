'use client';

import React, {useState} from 'react';
import Navbar from "@/app/components/Navbar";
import {Button, Input, Textarea} from "@nextui-org/react";
import {FaEnvelope, FaEnvelopeOpenText, FaUserAlt} from "react-icons/fa";

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        description: '',
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setFormData({
            name: '',
            email: '',
            subject: '',
            description: '',
        });
    };
    return (
        <>
            <Navbar/>
            <div className="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100  sm:rounded-lg">
                                <h1 className="text-4xl sm:text-5xl text-red-600  font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-red-400 mt-2">
                                    Share thoughts on your library experience. Contact us through this form about your
                                    feedbacks and issues. Your feedback helps us improve services and create a better
                                    environment for everyone. Thanks!
                                </p>

                                <div className="flex items-center mt-8 text-gray-600 ">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">

                                        <a href="https://www.google.com/maps/place/%E0%A4%AA%E0%A4%B6%E0%A5%8D%E0%A4%9A%E0%A4%BF%E0%A4%AE%E0%A4%BE%E0%A4%9E%E0%A5%8D%E0%A4%9A%E0%A4%B2+%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%B8/@28.2551339,83.9743984,17z/data=!4m10!1m2!2m1!1sPaschimanchal+Campus+!3m6!1s0x3995947ddb83ddc5:0xcd98c6b6d110d582!8m2!3d28.2538926!4d83.9764104!15sChRQYXNjaGltYW5jaGFsIENhbXB1c5IBEmdvdmVybm1lbnRfY29sbGVnZeABAA!16s%2Fm%2F011pz_5h?entry=ttu"
                                           target="_blank" rel="noopener noreferrer">
                                            Pashchimanchal Campus,
                                            Lamachaur, Pokhara
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600 ">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +44 1234567890
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600 ">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        <a href="mailto:ashimsth89@gmail.com" className=" hover:underline">
                                            ashimsth89@gmail.com
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <Input
                                        isRequired
                                        name="name"
                                        type="text"
                                        label="Name"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        endContent={
                                            <FaUserAlt
                                                className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                                        }
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <Input
                                        name="email"
                                        autoComplete="email"
                                        isRequired
                                        type="email"
                                        label="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        endContent={<FaEnvelope
                                            className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="name" className="hidden">Subject</label>
                                    <Input
                                        isRequired
                                        name="subject"
                                        type="text"
                                        label="Subject"
                                        autoComplete="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        endContent={
                                            <FaEnvelopeOpenText
                                                className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                                        }
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="hidden">Description</label>
                                    <div className="w-full grid grid-cols-12 gap-4">
                                        <Textarea
                                            variant={'underlined'}
                                            description={formData.description.length < 1 ? "Explain your thoughts about the library!" : null}
                                            label="Description"
                                            labelPlacement="outside"
                                            isRequired
                                            name="description"
                                            placeholder={formData.description.length >= 1 ? "Enter your description" : null}
                                            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            errorMessage={formData.description.length < 50 && formData.description.length >= 1 && 'Description must be at least 50 characters long!'}
                                        />
                                    </div>
                                </div>

                                <Button type="submit"
                                        className="md:w-32 bg-red-600  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-500 transition ease-in-out duration-300">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
