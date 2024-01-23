'use client'
import React, {useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {FaCheckCircle, FaEnvelope, FaLock, FaUser} from "react-icons/fa";
import {HiOutlineExclamationCircle} from "react-icons/hi";


const ProfilePageForm = () => {
    const [formData, setFormData] = useState({
        name: "AsHim Shrestha",
        email: 'pas079bct007@wrc.edu.np',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const isInvalidPassword = React.useMemo(() => {
        return formData?.newPassword !== formData?.confirmNewPassword;
    }, [formData?.newPassword, formData?.confirmNewPassword]);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSuccessMessage(''); // Reset success message when closing modal
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword === formData.currentPassword) {
            handleOpenModal();
            return;
        }

        if (isInvalidPassword) {
            return;
        }

        // Your form submission logic here

        setSuccessMessage("Profile Updated Successfully!"); // Set success message after successful submission
        handleOpenModal();
    };
    return (
        <>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="mt-1">
                    <Input
                        isRequired
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        type="text"
                        label="Name"
                        endContent={<FaUser className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                    />
                </div>

                <div className="mt-1">
                    <Input
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        label="Email"
                        disabled
                        description={"You can't change your email."}
                        endContent={<FaEnvelope
                            className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                    />
                </div>

                <div className="mt-1">
                    <Input
                        isRequired
                        onChange={handleChange}
                        name="currentPassword"
                        value={formData.currentPassword}
                        type='password'
                        autoComplete="current-password"
                        label="Current Password"
                        endContent={<FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                    />
                </div>

                <div className="mt-1">
                    <Input
                        isRequired
                        name="newPassword"
                        type='password'
                        autoComplete="new-password"
                        label="New Password"
                        onChange={handleChange}
                        isInvalid={isInvalidPassword}
                        value={formData.newPassword}
                        color={isInvalidPassword ? "danger" : !isInvalidPassword && formData?.password?.length !== 0 ? "success" : "default"}
                        errorMessage={isInvalidPassword && "Password doesn't match"}
                        endContent={<FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}
                    />
                </div>

                <div className="mt-1">
                    <Input
                        isRequired
                        name="confirmNewPassword"
                        autoComplete="new-password"
                        label="Confirm New Password"
                        type='password'
                        onChange={handleChange}
                        value={formData.confirmNewPassword}
                        isInvalid={isInvalidPassword}
                        color={isInvalidPassword ? "danger" : !isInvalidPassword && formData?.password?.length !== 0 ? "success" : "default"}
                        errorMessage={isInvalidPassword && "Password doesn't match"}
                        endContent={<FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>}/>
                </div>


                <p className="text-sm text-gray-500 mb-2 italic">Note: You can change your name and password.</p>

                <div className="mt-1">
                    <Button
                        isDisabled={!(!isInvalidPassword)}
                        type={!isInvalidPassword ? "submit" : "button"}
                        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Save Changes
                    </Button>
                </div>
            </form>

            {showModal && (
                <Modal isOpen={showModal} onClose={handleCloseModal} size="lg">
                    <ModalContent>
                        <ModalHeader>
                            {successMessage ? 'Success' : 'Password Warning'}
                        </ModalHeader>
                        <ModalBody>
                            <div className="text-center">
                                {successMessage ? (
                                    <>
                                        <FaCheckCircle className='h-14 w-14 text-green-500 mb-4 mx-auto'/>
                                        <h3 className='mb-5 text-lg text-green-500'>
                                            {successMessage}
                                        </h3>
                                    </>
                                ) : (<>
                                        <div className="flex items-center justify-center">
                                            <HiOutlineExclamationCircle
                                                className='h-14 w-14 text-red-700 mb-4 mx-auto animate-bounce'/>
                                        </div>
                                        <h3 className='mb-5 text-lg text-red-500 text-center font-bold'>
                                            Please choose a new password that is different from the current one.
                                        </h3>

                                    </>

                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div className='flex justify-center gap-4'>
                                <Button color='gray' onClick={handleCloseModal}>
                                    Cancel
                                </Button>
                            </div>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default ProfilePageForm;