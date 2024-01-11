'use client';

import React, { useEffect , useRef} from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeInDown } from "react-animations/lib/fade-in-down";
import { tada } from "react-animations/lib/tada";
import { fadeIn } from "react-animations/lib/fade-in";
import Link from "next/link";


const About = () => {
    const containerAnimation = useAnimation();
    const textAnimation = useAnimation();
    const iconAnimation = useAnimation();

    const startAnimations = async () => {
        await Promise.all([
            containerAnimation.start({ opacity: 1, y: 0 }),
            textAnimation.start({ opacity: 1, y: 0 }),
            iconAnimation.start({ rotate: 360 }),
        ]);
    };

    const isMounted = useRef(true);

    useEffect(() => {
        const initAnimations = async () => {
            await startAnimations();
        };

        initAnimations();


        return () => {
            isMounted.current = false;
        };
    }, [startAnimations]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={containerAnimation}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="py-20 px-4 max-w-6xl mx-auto text-red-800 rounded-md shadow-lg"
        >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={textAnimation}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-5xl font-extrabold mb-8"
            >
                Welcome to Krantikari Library
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={textAnimation}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <div className="w-16 h-1 bg-red-800 mb-3"></div>
                <motion.p className="text-lg" variants={fadeInDown}>
                    Your Journey to Extraordinary Knowledge Begins Here
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={textAnimation}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <motion.p className="text-lg font-semibold mb-4" variants={tada}>
                    Join Us on a Journey to Literary Excellence
                </motion.p>
                <motion.p className="text-lg" variants={fadeIn}>
                    Krantikari Library is not just a collection of books. It&apos;s a sanctuary of knowledge. Let&apos;s turn your reading dreams into
                    reality and embark on a literary journey where every page tells a unique story.
                </motion.p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={textAnimation}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                className="mb-12 text-lg"
            >
                Connect with us and experience the Krantikari Library difference. Your adventure into the world of books is just a click away!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={textAnimation}
                transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                className="flex justify-center"
            >
                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-800 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-80 focus:outline-none"
                    >
                        Explore Now
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default About;
