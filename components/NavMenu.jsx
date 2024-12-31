"use client";
import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";

const sidebar = {
    open: (height = 500) => ({
        clipPath: `circle(${height * 2 + 200}px at 250px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(25px at 184px 50px)",
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
        className="absolute top-[28px] right-[28px] w-[50px] h-[50px] rounded-full bg-transparent cursor-pointer z-50"
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
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
                        y: { stiffness: 1000, velocity: -100 }
                    }
                },
                closed: {
                    y: 50,
                    opacity: 0,
                    transition: {
                        y: { stiffness: 1000 }
                    }
                }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-5 flex items-center cursor-pointer"
        >
            <Link href={href} className="text-2xl font-bold">
                {children}
            </Link>
        </motion.li>
    );
};

const Navigation = () => (
    <motion.ul
        variants={{
            open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
            },
            closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
            }
        }}
        className="p-6 absolute top-24 right-8 z-50"
    >
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/#projects">Projects</MenuItem>
        <MenuItem href="/#about">About</MenuItem>
        <MenuItem href="/#contact">Contact</MenuItem>
    </motion.ul>
);

const NavMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
            className="fixed top-0 right-0 bottom-0 w-[250px] z-40"
        >
            <motion.div
                className="absolute top-0 right-0 bottom-0 w-full bg-blue-300 shadow-lg"
                variants={sidebar}
            />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default NavMenu;