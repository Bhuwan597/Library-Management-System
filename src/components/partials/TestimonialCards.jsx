import React from 'react';
import {Avatar, Card} from "@nextui-org/react";
import Link from "next/link";

const TestimonialCards = ({name, content, designation, avatarSrc}) => {
    return (
        <Card
            isPressable
            className="max-w-md mx-auto p-6 rounded-md shadow-md bg-gray-50 hover:shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
            <p className="text-lg text-gray-700 mb-4">{content}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link target='_blank' href="#" passHref>
                        <div className="flex items-center">
                            <Avatar isBordered radius="lg" src={avatarSrc}/>
                            <div className="ml-4">
                                <p className="font-semibold text-indigo-600 text-lg">{name}</p>
                                {designation && <p className="text-gray-600 text-sm">{designation}</p>}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default TestimonialCards;
