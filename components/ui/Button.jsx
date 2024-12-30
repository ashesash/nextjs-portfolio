import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-4 py-2 rounded text-[grey] font-semibold  hover:text-teal-200";
    const variants = {
        primary: "bg-slate-100",
        secondary: "bg-blue-500",
    };

    return (
        <div className="inline-block p-0.5 rounded-md hover:bg-gradient-to-r from-teal-200 via-cyan-700 to-teal-200 bg-[length:200%] [animation:_gradient-move_3s_infinite_linear_reverse]">
            <button
                className={`${baseStyles} ${variants[variant]} ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        </div >
    );
};

export default Button;


