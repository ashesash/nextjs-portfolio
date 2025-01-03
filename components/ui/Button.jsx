import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-4 py-2 rounded font-merriweather font-semibold text-astro-blue-700  hover:text-blizzard-blue-400";
    const variants = {
        primary: "bg-slate-200 dark:bg-slate-800",
        secondary: "bg-blue-500",
    };

    return (
        <div className="inline-block p-0.5 rounded-md hover:bg-gradient-to-r from-blizzard-blue-600 via-astro-blue-300 to-blizzard-blue-600 bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]">
            <button
                className={`${baseStyles} ${variants[variant]} ${className}`}
                onClick={onClick}
                aria-label="Base Button"
            >
                {children}
            </button>
        </div >
    );
};

export default Button;


