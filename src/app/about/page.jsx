import React from "react";
import Link from "next/link";

const About = () => {
    return (
        <div className="py-20 px-4 max-w-6xl mx-auto text-red-800 rounded-md shadow-lg">
            <h1 className="text-5xl font-extrabold mb-8">
                Welcome to Krantikari Library
            </h1>

            <div className="text-center mb-12">
                <div className="w-16 h-1 bg-red-800 mb-3"></div>
                <p className="text-lg">
                    Your Journey to Extraordinary Knowledge Begins Here
                </p>
            </div>

            <div className="text-center mb-12">
                <p className="text-lg font-semibold mb-4">
                    Join Us on a Journey to Literary Excellence
                </p>
                <p className="text-lg">
                    Krantikari Library is not just a collection of books. It&apos;s a sanctuary of knowledge. Let&apos;s
                    turn your reading dreams into
                    reality and embark on a literary journey where every page tells a unique story.
                </p>
            </div>

            <p className="mb-12 text-lg">
                Connect with us and experience the Krantikari Library difference. Your adventure into the world of books
                is just a click away!
            </p>

            <div className="flex justify-center">
                <Link href="/">
                    <button
                        className="bg-red-800 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-80 focus:outline-none"
                    >
                        Explore Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
