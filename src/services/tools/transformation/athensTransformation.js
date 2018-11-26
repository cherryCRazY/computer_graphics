import { Matrix } from "../matrix/matrix";
import { transformDetail, transformDetailText } from "./transformation";

const athensTransformation = (canvasDrawer, Xx, Yx, Xy, Yy, X0, Y0) => {
    const {
        detailArray,
        auxLineArray,
        gridArray,
        systemCordArray,
        textArray
    } = canvasDrawer.dotsObject;

    console.log(textArray);
    console.log(auxLineArray);

    const _detailArray = transformDetail(
        detailArray,
        Matrix.athens,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0
    );
    const _textArray = transformDetailText(
        textArray,
        Matrix.athens,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0
    );
    const _auxLineArray = transformDetail(
        auxLineArray,
        Matrix.athens,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0
    );
    const _gridArray = transformDetail(
        gridArray,
        Matrix.athens,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0
    );
    const _systemCordArray = transformDetail(
        systemCordArray,
        Matrix.athens,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0
    );

    return {
        detailArray: _detailArray,
        gridArray: _gridArray,
        systemCordArray: _systemCordArray,
        auxLineArray: _auxLineArray,
        textArray: _textArray
    };
};

export default athensTransformation;
