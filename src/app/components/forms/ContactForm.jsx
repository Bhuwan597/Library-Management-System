"use client"
import React, {useState} from 'react'
import {Button, Input, Textarea} from "@nextui-org/react";
import {FaEnvelope, FaEnvelopeOpenText, FaUserAlt} from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
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
        console.log("Form data submitted:", formData);
        setFormData({
            name: "",
            email: "",
            subject: "",
            description: "",
        });
    };
    return (
        <>
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

                <div className="flex flex-col mt-2 w-full">
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
                            className="col-span-12 mb-6 md:mb-0 w-full"
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
        </>
    )
}

export default ContactForm