// components/Button.js
import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-4 py-2 rounded text-white font-semibold";
    const variants = {
        primary:"bg-custom-selective_yellow",
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

export default Button;
