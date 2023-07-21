import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, Fa500Px, FaGithub } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >=90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] px-4':'fixed w-full h-20 z-[100] bg-[#ecf0f3] px-4'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/../public/assets/as.png" alt="/" width='130' height='50'></Image>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md::w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md::w-[45%] h-screen p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex items-start'><Image src="/../public/assets/as.png" width='40' height='20' alt='/' /></div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                                <AiOutlineClose size={15} />
                            </div>
                        </div>
                        {/* <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let's build some great products!
                            </p>
                        </div> */}
                    </div>
                    <div className='py-6 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#4d797b]'> Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <Fa500Px />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover-scale-105 ease-in duration-500'>
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar