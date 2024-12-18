import React from 'react';
import Title from './ui/Title';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <div id="about" className='w-full min-h-screen'>
            <Title level='h2' className='h-screen my-80 py-80'>
                About
            </Title>
            <div className=''>
                <div className='px-2 text-gray-100 text-justify dark:text-[#ecf0f3] snap-mandatory snap-y'>
                    <p>
                        I’ve lived in a few different places before settling in Sydney—India, Bahrain, Canada, and Sweden—each one leaving its mark on me and shaping the way I approach life and work.
                        These experiences have given me a unique perspective and a love for diverse cultures, which is why I’m so happy to now call Sydney home.
                    </p>
                    <br />
                    <p>
                        Currently, I’m a Full Stack Developer at Meydit, where I work on everything from revamping the frontend and improving backend notifications to integrating machine
                        learning into new products.
                    </p>
                    <br />
                    <p>
                        When I’m not coding, I’m likely modding mechanical keyboards, playing guitar, sketching, or getting creative with polymer clay. I also love building small coding projects
                        in my spare time, so if you’re interested in collaborating or building something cool together, feel free to reach out!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
