import CanvasDrawer from "./CanvasDrawer";
import { translate, rotate } from "./transformation/euclidTransformation";
import athensTransformation from "./transformation/athensTransformation";
import projectiveTransformation from "./transformation/projectiveTransformation";
import * as defaultValues from "./drawTools/defaultValues";

class CanvasService {
    constructor(context) {
        this.canvas = new CanvasDrawer(context);
        this.canvas.clearCanvas();
        this.canvas.drawAll(1, 1, 1, 1);
        this.canvas.drawMyOwnDetail();
    }

    draw = (R1, R2, R3, R4, A) => {
        const canvas = this.canvas;
        canvas.clearCanvas(1, 1);
        this.canvas.drawMyOwnDetail(R1, R2, R3, R4, A);
        canvas.drawAll(1, 1, 1, 1);
    };

    translate = (m, n) => {
        const _m = m * defaultValues.STEP_OF_GRID;
        const _n = n * defaultValues.STEP_OF_GRID;
        const canvas = this.canvas;
        canvas.clearCanvas(1, 1);
        const newDotsArray = translate(this.canvas, _m, _n);
        this.canvas.dotsObject = newDotsArray;
        canvas.drawAll(1, 1, 1, 1);
    };

    rotate = (angle, m, n) => {
        const canvas = this.canvas;
        canvas.clearCanvas(1, 1);
        const newDotsArray = rotate(
            this.canvas,
            angle,
            m + defaultValues.STEP_OF_GRID,
            n + defaultValues.STEP_OF_GRID
        );
        this.canvas.dotsObject = newDotsArray;
        canvas.drawAll(1, 1, 1, 1);
    };

    athens = (Xx, Yx, Xy, Yy, X0, Y0) => {
        const canvas = this.canvas;
        canvas.clearCanvas(false, false);
        console.log(canvas.dotsObject);
        const newDotsArray = athensTransformation(
            this.canvas,
            Xx,
            Yx,
            Xy,
            Yy,
            X0,
            Y0
        );
        canvas.dotsObject = newDotsArray;
        console.log(newDotsArray);
        canvas.drawAll(1, 1, 1, 1);
    };

    projectiv = (Xx, Yx, Xy, Yy, X0, Y0, Wx, Wy, W0) => {
        const canvas = this.canvas;
        canvas.dotsObject.systemCordArray = [];
        canvas.dotsObject.gridArray = [];
        canvas.drawSystemOfCord(
            defaultValues.canvasWidth / Yy,
            defaultValues.canvasHeight / Xx
        );
        canvas.drawGrid(
            defaultValues.canvasWidth / Yy,
            defaultValues.canvasHeight / Xx
        );
        canvas.clearCanvas(false, false);
        const newDotsArray = projectiveTransformation(
            canvas,
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
        this.canvas.dotsObject = newDotsArray;
        console.log(newDotsArray);
        canvas.drawAll(1, 1, 1, 1);
    };
}

export default CanvasService;
