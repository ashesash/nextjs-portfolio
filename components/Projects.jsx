import React, { useRef } from 'react';
import ParallaxCard from './ui/ParallaxCard';
import { projectData } from './projectData';
import TextRotate from './ui/TextRotate';
import Title from './ui/Title';

const Projects = () => {

    return (
        <div id="projects" className="relative w-full min-h-screen snap-mandatory snap-y">
            <div className='h-screen grid place-items-center snap-start'>
                <Title level="h2" className="sticky top-10">
                    Projects
                </Title>
            </div>
            <div
                className="flex flex-col items-center snap-start sticky top-10"
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
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
