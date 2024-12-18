// export function getContrastYIQ(hexColor) {
//     // Convert hex to RGB
//     const r = parseInt(hexColor.substring(1, 3), 16);
//     const g = parseInt(hexColor.substring(3, 5), 16);
//     const b = parseInt(hexColor.substring(5, 7), 16);

//     // Calculate the brightness using the YIQ formula
//     const yiq = (r * 299 + g * 587 + b * 114) / 1000;

//     // Determine if the background is light or dark and return different shades accordingly
//     return yiq >= 128
//         ? { textColor: "text-black", contrastColor: "#333333" } // Dark text for light backgrounds
//         : { textColor: "text-white", contrastColor: "#eeeeee" }; // Light text for dark backgrounds
// }

export const getContrastYIQ = (hex) => {
    const rgb = hexToRgb(hex);
    const modifyRgb = rgb
        ? rgb
            .substring(4, rgb.length - 1)
            .replace(/ /g, '')
            .split(',')
        : [];
    const yiq = modifyRgb?.length
        ? ((modifyRgb[0]) * 299 + (modifyRgb[1]) * 587 + (modifyRgb[2]) * 114) / 1000
        : 0;
    return yiq >= 128 ? BackgroundTypes.Light : BackgroundTypes.Dark;
};