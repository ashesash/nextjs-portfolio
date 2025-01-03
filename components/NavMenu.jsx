import React, { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { PiSunBold, PiMoonBold } from 'react-icons/pi'
import { useTheme, resolvedTheme } from 'next-themes'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 50px)`,
        transition: {
            type: "spring",
            stiffness: 30,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(19px at calc(100% - 40px) 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button
        onClick={toggle}
        className="absolute top-[32px] right-[12px] w-[38px] h-[38px] rounded-full bg-transparent cursor-pointer pointer-events-auto"
    >
        {/* burger */}
        <svg width="18" height="18" viewBox="0 0 20 20">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

const MenuItem = ({ href, children }) => {
    return (
        <motion.li
            variants={{
                open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        y: { stiffness: 1000, velocity: -300 }
                    }
                },
                closed: {
                    y: 40,
                    opacity: 0,
                    transition: {
                        y: { stiffness: 1000 }
                    }
                }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-10 flex items-center cursor-pointer"
        >
            <Link href={href} className="text-2xl">
                {children}
            </Link>
        </motion.li>
    );
};

const Navigation = ({ isOpen }) => (
    <motion.ul
        variants={{
            open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
            },
            closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
            }
        }}
        className={`absolute flex flex-col sm:flex-row items-center sm:items-start sm:justify-center w-full h-screen sm:top-9 pt-36 sm:pt-0 gap-10 sm:gap-20 uppercase font-philosopher ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}    >
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/#projects">Projects</MenuItem>
        <MenuItem href="/#about">About</MenuItem>
        <MenuItem href="/#contact">Contact</MenuItem>
    </motion.ul>
);

const DarkToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null;

    return (
        <button
            className="fixed top-8 right-20 text-xl pointer-events-auto z-50 bg-astro-blue-700 rounded-full p-2"
            onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <PiSunBold /> : <PiMoonBold />}
        </button>
    );
};

const NavMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <>
            <DarkToggle />
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                className={`fixed top-0 right-0 bottom-0 w-full h-24 pointer-events-none ${isOpen ? 'z-40' : 'z-30'}`}
            >
                <motion.div
                    className={`absolute top-0 right-0 bottom-0 w-full max-sm:h-[100vh] bg-astro-blue-700 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    variants={sidebar}
                />
                <Navigation isOpen={isOpen} />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </>
    );
};

export default NavMenu;