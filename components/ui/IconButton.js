import React from "react";

const IconButton = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "rounded-full p-2 hover:scale-110 ease-in duration-300 text-3xl";
    const variants = {
        primary:"bg-slate-100 hover:bg-gradient-to-r from-teal-200 via-cyan-700 to-teal-200 ",
        secondary: "bg-blue-500 hover:bg-blue-600",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default IconButton;
