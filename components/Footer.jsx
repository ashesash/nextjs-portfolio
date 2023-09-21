import React from 'react'

export default function Footer() {

    const date = new Date().getFullYear()
    return (
        <footer>
            <div className="flex flex-col items-center mt-16 px-4">
                <div className="flex mb-5 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div> Made with Next.js, Tailwind, & Netlify. {date} Aishwarya Sahu. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}