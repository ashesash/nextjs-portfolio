export const colorGenerator = () => {
    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    return {
        light1Color: randomColor(),
        light2Color: randomColor(),
        light3Color: randomColor(),
        light4Color: randomColor(),
    };
};
