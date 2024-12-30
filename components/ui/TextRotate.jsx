import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextRotate = ({ text, startOffset = 300, endOffset = 600 }) => {
    const { scrollY } = useScroll();

    // Changed rotation range from 45 to 0 instead of 90 to 0
    const rotateY = useTransform(
        scrollY,
        [startOffset, (startOffset + endOffset) / 2, endOffset],
        [45, 20, 0],
        { clamp: true }
    );

    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* Added a wrapper div for perspective */}
            <div className="perspective-[1000px] transform-gpu">
                <motion.h1
                    style={{ rotateY }}
                    className="text-4xl font-bold text-center transform-gpu backface-visible"
                >
                    {text}
                </motion.h1>
            </div>
        </div>
    );
};

export default TextRotate;