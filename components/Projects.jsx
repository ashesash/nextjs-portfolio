import React, { useEffect, useState } from 'react';
import { projectData } from './data/projectData.js';
import dynamic from 'next/dynamic';
import Title from './ui/Title';

const ParallaxCard = dynamic(() => import('./ui/ParallaxCard'));
const MobileCard = dynamic(() => import('./ui/MobileCard'));

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Handle initial check
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
        };

        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div id="projects" className="relative w-full h-1/2 snap-mandatory snap-y">
            <div className='py-20 grid place-items-center snap-start'>
                <Title level="h2" className="sticky top-10">
                    Projects
                </Title>
            </div>
            <div
                className="flex flex-col items-center snap-start sticky top-10"
            >
                {projectData.map((card, index) => (
                    isMobile ? (
                        <MobileCard
                            key={index}
                            image={card.img}
                            title={card.title}
                            tech={card.tech}
                            description={card.description}
                            gitUrl={card.gitUrl}
                            projectUrl={card.projectUrl}
                        />
                    ) : (
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
                    )
                ))}
            </div>
        </div>
    );
};

export default Projects;
