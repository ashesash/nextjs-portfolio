import React, { useEffect, useState } from 'react';
import { projectData } from './data/projectData.js';
import dynamic from 'next/dynamic';
import Title from './ui/Title';

const ParallaxCard = dynamic(() => import('./ui/ParallaxCard'));
const MobileCard = dynamic(() => import('./ui/MobileCard'));

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div id="projects" className="relative w-full min-h-[200vh]">
            <div className='py-20 h-screen grid place-items-center'>
                <Title level="h2" className="sticky top-80">
                    Projects
                </Title>
            </div>
            <div className="flex flex-col items-center"> 
                {projectData.map((card, index) => {
                    const targetScale = 1 - ((projectData.length - index) * 0.05);
                    return (
                        isMobile ? (
                            <MobileCard
                                key={index}
                                i={index}
                                image={card.img}
                                title={card.title}
                                tech={card.tech}
                                description={card.description}
                                gitUrl={card.gitUrl}
                                projectUrl={card.projectUrl}
                                targetScale={targetScale}
                            />
                        ) : (
                            <ParallaxCard
                                key={index}
                                i={index}
                                image={card.img}
                                title={card.title}
                                tech={card.tech}
                                description={card.description}
                                gitUrl={card.gitUrl}
                                projectUrl={card.projectUrl}
                                isImageLeft={index % 2 === 0}
                                targetScale={targetScale}
                            />
                        )
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;
