import React from 'react'
export default function Footer() {

    const date = new Date().getFullYear()
    return (
        <footer className='w-full h-2'>
            <div className="flex flex-col items-center mt-16 px-4 text-center">
                    <div> Crafted by yours truly with Next.js, Tailwind, & Netlify. {date} </div>
                </div>
        </footer>
    )
}