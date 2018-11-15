import * as defaultValues from "../drawTools/defaultValues";

const collectArhimedPoint = (a, n, aFinal, startPoint) => {
    const arhimed = [];
    const { sin, cos } = Math;
    const b = (aFinal - a) / (2 * Math.PI * n);
    const border = (aFinal - a) / Math.abs(b);
    for (let i = 0; i < border; i += 0.01) {
        const x = (a + b * i) * cos(i) + startPoint.x;
        const y = (a + b * i) * sin(i) + startPoint.y;
        arhimed.push({ x, y, i, b, a, ...defaultValues.cordStyle });
        //console.log(x, y);
    }
    return arhimed;
};

export default collectArhimedPoint;
