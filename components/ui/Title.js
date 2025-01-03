import React from "react";
import PropTypes from "prop-types";

const Title = ({ level = "h1", children, className = "" }) => {
    const HeadingTag = level;
    const baseStyles = "font-philosopher font-bold text-center tracking-widest uppercase snap-start text-astro-blue-900";
    const sizeStyles = {
        h2: "md:text-9xl text-6xl",
        h3: "md:text-5xl text-3xl",
        h4: "md:text-3xl text-2xl",
        h5: "md:text-2xl text-xl",
        h6: "md:text-lg text-base",
    };

    return (
        <HeadingTag className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
            {children}
        </HeadingTag>
    );
};

Title.propTypes = {
    level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Title;
