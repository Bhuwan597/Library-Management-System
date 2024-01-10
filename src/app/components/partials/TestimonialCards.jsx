import React from 'react';
import { Avatar, Card } from "@nextui-org/react";
import { FaBriefcase } from 'react-icons/fa';

const TestimonialCards = ({ name, content, designation, avatarSrc }) => {
    return (
        <Card isPressable className="max-w-md mx-auto p-6 rounded-md shadow-md bg-gray-50 hover:bg-gray-200 transition-transform transform hover:scale-105">
            <p className="text-lg text-gray-700 mb-4">
                {content}
            </p>

            <div className="flex items-center">
                <div className="flex items-center">
                    <Avatar isBordered radius="lg" src={avatarSrc} />
                    <p className="font-semibold text-indigo-600 ml-4 text-lg">{name}</p>
                </div>

                {designation && (
                    <div className="flex items-center ml-4">
                        <FaBriefcase className="mr-2 text-gray-600" />
                        <p className="text-gray-600">{designation}</p>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default TestimonialCards;
