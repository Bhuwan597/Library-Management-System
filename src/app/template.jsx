'use client';

import {motion} from 'framer-motion';

const animationVariants = {
    initial: {opacity: 0, scale: 0.8, translateY: -20},
    animate: {opacity: 1, scale: 1, translateY: 0},
    exit: {opacity: 0, scale: 0.8, translateY: -20}
};

const animationTransition = {ease: 'easeInOut', duration: 0.75, delay: 0.1};

export default function Template({children}) {
    return (
        <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationTransition}
        >
            {children}
        </motion.div>
    );
}
