import * as defaulValues from "./defaultValues";

export const drawLine = (x1, y1, x2, y2, arr) => {
    switch (arr) {
        case "aux": {
            defaulValues.dotsObject.auxLineArray.push([
                { x: x1, y: y1, ...defaulValues.auxStyle },
                { x: x2, y: y2, ...defaulValues.auxStyle }
            ]);
            break;
        }
        case "grid": {
            defaulValues.dotsObject.gridArray.push([
                { x: x1, y: y1, ...defaulValues.gridStyle },
                { x: x2, y: y2, ...defaulValues.gridStyle }
            ]);
            break;
        }
        case "cord": {
            defaulValues.dotsObject.systemCordArray.push([
                { x: x1, y: y1, ...defaulValues.cordStyle },
                { x: x2, y: y2, ...defaulValues.cordStyle }
            ]);
            break;
        }
        default: {
            defaulValues.dotsObject.detailArray.push([
                { x: x1, y: y1, ...defaulValues.defaultStyle },
                { x: x2, y: y2, ...defaulValues.defaultStyle }
            ]);
            break;
        }
    }
};

export const drawArc = (
    R = 10,
    start = 0,
    end = 360,
    startX = defaulValues.startPoint.x,
    startY = defaulValues.startPoint.y
) => {
    let angle = start;
    const coef = Math.PI / 180;

    if (end > 360 || end < start) throw new Error("end > 360 || end < start");

    R = start <= 0 ? -R : R;
    while (angle < end) {
        drawLine(
            startX + R * Math.cos(angle * coef),
            startY + R * Math.sin(angle * coef),
            startX + R * Math.cos((angle + 1) * coef),
            startY + R * Math.sin((angle + 1) * coef)
        );
        angle++;
    }
};

export const drawText = (text, x, y, style) => {
    defaulValues.textArray.push({ tetx: text, x: x, y: y, style: style });
};
