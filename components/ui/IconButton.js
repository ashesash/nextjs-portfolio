import React from "react";

const IconButton = ({ children, onClick, variant = "primary", className = ""}) => {
    const baseStyles = "rounded-full p-2 hover:scale-110 ease-in duration-300 text-3xl";
    const variants = {
        primary:"bg-slate-100 hover:bg-gradient-to-r from-blizzard-blue-600 via-astro-blue-300 to-blizzard-blue-600 dark:bg-slate-800",
        secondary: "bg-blue-500 hover:bg-blue-600",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            aria-label="Icon Base Button"
        >
            {children}
        </button>
    );
};

export default IconButton;
