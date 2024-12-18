import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ParallaxCard from './ParallaxCard';
import { projectData } from './projectData';
import Title from './ui/Title';

const Projects = () => {
    // const container = useRef(null);
    // const isInView = useInView(container, { once:true });

    // // Track the scroll position of the entire Projects section
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start end", "start start"], //start of div meets end of container at 0, 
    // });

    // // Sticky heading stays still
    // // const headingY = useTransform(scrollYProgress, [0, 0.9], ["10%", "-50%"]);
    // // const headingY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

    return (
        <div id="projects" className="w-full min-h-screen">
            <Title level='h2' className='h-screen my-80 py-80'>
                Projects
            </Title>
            <div
                className="flex flex-col items-center gap-8 snap-mandatory snap-y"
            >
                {projectData.map((card, index) => (
                    <ParallaxCard
                        key={index}
                        image={card.img}
                        title={card.title}
                        tech={card.tech}
                        description={card.description}
                        gitUrl={card.gitUrl}
                        projectUrl={card.projectUrl}
                        isImageLeft={index % 2 === 0}
                        className="sticky top-0 snap-y"
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
