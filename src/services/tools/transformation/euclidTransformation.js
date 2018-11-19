import { findDistance, inRadius } from "../drawTools/euclidTools/euclidTools";
import { Matrix } from "../matrix/matrix";

const transform = (fn, dot, ...arg) => {
    const m = fn(...arg);
    console.log(m);
    console.log(dot);
    console.log(Matrix.multiplyVector(dot, m));
    return Matrix.multiplyVector(dot, m);
};
const transformDetail = (arr, fn, ...arg) =>
    arr.map(element => element.map(el => transform(fn, el, ...arg)));

export const translate = (canvasDrawer, m, n) => {
    console.log(canvasDrawer.dotsObject);
    const { detailArray, auxLineArray } = canvasDrawer.dotsObject;
    const _detailArray = transformDetail(detailArray, Matrix.translate, m, n);
    const _auxLineArray = transformDetail(auxLineArray, Matrix.translate, m, n);
    console.log(_detailArray);

    canvasDrawer.dotsObject = {
        ...canvasDrawer.dotsObject,
        detailArray: _detailArray,
        auxLineArray: _auxLineArray
    };
    console.log(canvasDrawer.dotsObject);

    canvasDrawer.drawAll(true, true, true, true);
};
