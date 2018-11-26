import { Matrix } from "../matrix/matrix";
import { transformDetail } from "./transformation";

export const translate = (canvasDrawer, m, n) => {
    const { detailArray, auxLineArray } = canvasDrawer.dotsObject;
    const _detailArray = transformDetail(detailArray, Matrix.translate, m, n);
    const _auxLineArray = transformDetail(auxLineArray, Matrix.translate, m, n);

    return {
        ...canvasDrawer.dotsObject,
        detailArray: _detailArray,
        auxLineArray: _auxLineArray
    };
};

export const rotate = (canvasDrawer, angle, m, n) => {
    const { detailArray, auxLineArray } = canvasDrawer.dotsObject;
    const _detailArray = transformDetail(
        detailArray,
        Matrix.rotate,
        angle,
        m,
        n
    );
    const _auxLineArray = transformDetail(
        auxLineArray,
        Matrix.rotate,
        angle,
        m,
        n
    );

    return {
        ...canvasDrawer.dotsObject,
        detailArray: _detailArray,
        auxLineArray: _auxLineArray
    };
};
