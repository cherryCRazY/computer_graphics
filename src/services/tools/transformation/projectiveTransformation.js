import { Matrix } from "../matrix/matrix";
import { transformDetail, transformDetailText } from "./transformation";

const projectiveTransformation = (
    canvasDrawer,
    Xx,
    Yx,
    Xy,
    Yy,
    X0,
    Y0,
    Wx,
    Wy,
    W0
) => {
    const {
        detailArray,
        auxLineArray,
        gridArray,
        systemCordArray,
        textArray
    } = canvasDrawer.dotsObject;

    const correctProjective = dot =>
        dot.map(element =>
            element.map(el => {
                return {
                    ...el,
                    x: el.x / el.z,
                    y: el.y / el.z,
                    z: el.z / el.z
                };
            })
        );
    const correctProjectiveText = dot =>
        dot.map(el => {
            return {
                ...el,
                x: el.x / el.z,
                y: el.y / el.z,
                z: el.z / el.z
            };
        });

    const _detailArray = transformDetail(
        detailArray,
        Matrix.projective,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0,
        Wx,
        Wy,
        W0
    );
    const _auxLineArray = transformDetail(
        auxLineArray,
        Matrix.projective,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0,
        Wx,
        Wy,
        W0
    );
    const _gridArray = transformDetail(
        gridArray,
        Matrix.projective,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0,
        Wx,
        Wy,
        W0
    );
    const _systemCordArray = transformDetail(
        systemCordArray,
        Matrix.projective,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0,
        Wx,
        Wy,
        W0
    );
    const _textArray = transformDetailText(
        textArray,
        Matrix.projective,
        Xx,
        Yx,
        Xy,
        Yy,
        X0,
        Y0,
        Wx,
        Wy,
        W0
    );

    const correct_detailArray = correctProjective(_detailArray);
    const correct_auxLineArray = correctProjective(_auxLineArray);
    const correct_gridArray = correctProjective(_gridArray);
    const correct_systemCordArray = correctProjective(_systemCordArray);
    const correct_textArray = correctProjectiveText(_textArray);

    console.log(detailArray);
    console.log({
        detailArray: correct_detailArray,
        auxLineArray: correct_auxLineArray,
        gridArray: correct_gridArray,
        systemCordArray: correct_systemCordArray,
        textArray: correct_textArray
    });

    return {
        detailArray: correct_detailArray,
        auxLineArray: correct_auxLineArray,
        gridArray: correct_gridArray,
        systemCordArray: correct_systemCordArray,
        textArray: correct_textArray
    };
};

export default projectiveTransformation;
