import React from 'react';

import Divider from "@/app/components/partials/Divider";
import TestimonialCards from "@/app/components/partials/TestimonialCards";

const Testimonials = () => {
    return (<>
            <div className="container mx-auto my-10 px-4">
                <div className="text-center mb-8">
                    <p className="text-sm text-red-500">Reviews and Thoughts</p>
                    <h2 className="text-3xl md:text-4xl font-bold">What People are saying</h2>
                    <Divider/>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <TestimonialCards name={"AsHim Shrestha"} avatarSrc={''} designation={'BCT Student'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus, tempora beatae ratione ipsam amet molestiae, quis quibusdam dicta suscipit id temporibus pariatur nulla placeat dignissimos atque deserunt autem soluta dolor? Ad, aliquam, doloribus earum doloremque velit excepturi eligendi, a pariatur eveniet maiores enim maxime sequi cum '}/>    <TestimonialCards name={"Bhuwan Acharya"} avatarSrc={''} designation={'BEI Student'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus, tempora beatae ratione ipsam amet molestiae, quis quibusdam dicta suscipit id temporibus pariatur nulla placeat dignissimos atque deserunt autem soluta dolor? Ad, aliquam, doloribus earum doloremque velit excepturi eligendi, a pariatur eveniet maiores enim maxime sequi cum '}/>    <TestimonialCards name={"Hari Har"} avatarSrc={''} designation={'BCE Student'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus, tempora beatae ratione ipsam amet molestiae, quis quibusdam dicta suscipit id temporibus pariatur nulla placeat dignissimos atque deserunt autem soluta dolor? Ad, aliquam, doloribus earum doloremque velit excepturi eligendi, a pariatur eveniet maiores enim maxime sequi cum '}/>
                </div>
            </div>


        </>);
};

export default Testimonials;