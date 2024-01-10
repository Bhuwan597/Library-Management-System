import React from 'react';
import {Avatar, Card} from "@nextui-org/react";
import {FaStar} from 'react-icons/fa';

const TestimonialCards = ({name, content, designation, avatarSrc, rating}) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar key={i} className={`text-${i <= rating ? 'yellow-500' : 'gray-400'} text-xl mr-1`}/>
            );
        }
        return stars;
    };

    return (
        <Card
            isPressable
            className="max-w-md mx-auto p-6 rounded-md shadow-md bg-gray-50 hover:shadow-lg transition-transform transform hover:scale-105"
        >
            <p className="text-lg text-gray-700 mb-4">{content}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar isBordered radius="lg" src={avatarSrc}/>
                    <div className="ml-4">
                        <p className="font-semibold text-indigo-600 text-lg">{name}</p>
                        {designation && <p className="text-gray-600">{designation}</p>}
                    </div>
                </div>

                {rating && (
                    <div className="flex items-center ml-4">
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-1">Rating:</span>
                            {renderStars()}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default TestimonialCards;
