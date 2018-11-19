export const canvasWidth = window.innerWidth * 0.99;
export const canvasHeight = window.innerHeight * 0.935;

export const defaultColor = "black";
export const defaultWidth = "2";
export const STEP_OF_GRID = 25;

export const startPoint = {
    x: Math.round(canvasWidth / 2 / STEP_OF_GRID) * STEP_OF_GRID,
    y: Math.round(canvasHeight / 2 / STEP_OF_GRID) * STEP_OF_GRID
};

export const defaultStyle = {
    lineWidth: defaultWidth,
    strokeStyle: defaultColor,
    setLineDash: [1, 1]
};
export const auxStyle = {
    lineWidth: "0.7",
    strokeStyle: defaultColor,
    setLineDash: [20, 10]
};
export const gridStyle = {
    lineWidth: "0.1",
    strokeStyle: "#42C14F",
    setLineDash: [1, 1]
};
export const cordStyle = {
    lineWidth: defaultWidth / 2,
    strokeStyle: defaultColor,
    setLineDash: [1, 1]
};
