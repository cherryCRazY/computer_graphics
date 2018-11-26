import { Matrix } from "../matrix/matrix";

const transform = (fn, dot, ...arg) => {
    const m = fn(...arg);
    return Matrix.multiplyVector(dot, m);
};

export const transformDetail = (arr, fn, ...arg) =>
    arr.map(element => element.map(el => transform(fn, el, ...arg)));

export const transformDetailText = (arr, fn, ...arg) =>
    arr.map(element => transform(fn, element, ...arg));
