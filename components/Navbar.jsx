"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, Fa500Px, FaGithub, FaSun, FaRegMoon } from 'react-icons/fa'
import { PiSunBold, PiMoonBold } from 'react-icons/pi'
import {ImProfile} from 'react-icons/im'
import Logo from '../public/assets/ash.svg'
import { useTheme, resolvedTheme } from 'next-themes'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const { theme, setTheme } = useTheme()

    const handleNav = () => {
        setNav(!nav);
    };

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    useEffect(() => setMounted(true), [])


    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] dark:bg-[#0c121c] px-2' : 'fixed w-full h-20 z-[100] px-2'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'><Image src={Logo} alt="/" width='90' height='90' /></Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Contact</li>
                        </Link>
                        <li>
                            <button
                                className="ml-10 rounded"
                                onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
                            >
                                {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <PiSunBold/> : <PiMoonBold/>}
                            </button>
                        </li>
                    </ul>
                    <div className='flex md:hidden'>
                        <div>
                            <button
                                className="rounded"
                                onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
                            >
                                {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <PiSunBold/> : <PiMoonBold/>}
                            </button>
                        </div>
                        <div onClick={handleNav} className='ml-10'>
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md::w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#0c121c] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md::w-[45%] h-screen p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex items-start'><Image src={Logo} width='40' height='20' alt='/' /></div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                                <AiOutlineClose size={15} />
                            </div>
                        </div>
                    </div>
                    <div className='py-6 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={handleNav} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={handleNav} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={handleNav} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={handleNav} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={handleNav} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#4d797b]'> Let&#39;s Connect</p>
                            <div className='flex items-center justify-start my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/aishwaryasahu/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 md:p-6'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/ashesash'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 md:p-6'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='mailto:aishwarya.s@live.com'>
                                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 md:p-6'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='/assets/TechCV_ASahu.pdf ' download='asahuResume.pdf'>
                                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 md:p-6'>
                                        <ImProfile />
                                    </div>
                                </Link>
                                <a
                                    href='https://500px.com/p/aishwaryasahu'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 md:p-6'>
                                        <Fa500Px />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar