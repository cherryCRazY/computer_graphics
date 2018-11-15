import CanvasDrawer from "./CanvasDrawer";
import { translate, rotate } from "./tools/transformation/euclidTransformation";
import athensTransformation from "./tools/transformation/athensTransformation";
import projectiveTransformation from "./tools/transformation/projectiveTransformation";
import * as defaultValues from "./tools/drawTools/defaultValues";
import drawArhimed from "./tools/arhimed/arhimed";

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
        canvas.dotsObject.textArray = [];

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

    arhimed = (a, b, aFinal) => {
        const canvas = this.canvas;
        canvas.clearCanvas(true, true);
        const arhimedArray = drawArhimed(a, b, aFinal, canvas.startPoint);
        canvas.drawingArhimedAsync(arhimedArray);
        console.log(arhimedArray);
    };

    arhimedTangent = (a, b, aFinal, x, y) => {
        const canvas = this.canvas;
        const ctx = canvas.ctx;
        const { sin, cos } = Math;
        const arhimedArray = drawArhimed(a, b, aFinal, canvas.startPoint);
        canvas.clearCanvas(true, true);
        canvas.drawingArhimed(arhimedArray);

        console.log(arhimedArray);

        const findI = (arr = arhimedArray) =>
            arr.filter(el => el.x === x && el.y === y);

        const derivative = () => {
            if (!findI()[0]) throw "No one dot";
            const { b, a, i } = findI()[0];

            return (
                (b * sin(i) + (a + b * i) * cos(i)) /
                (b * cos(i) - (a + b * i) * sin(i))
            );
        };

        const newDotLine = x1 => {
            return derivative() * (x1 - x) + y;
        };
        const newNormLine = x1 => {
            return (-1 / derivative()) * (x1 - x) + y;
        };
        const x0 = x - 100;
        const x1 = x + 100;
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x0, newDotLine(x0));
        ctx.lineTo(x1, newDotLine(x1));
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.moveTo(x0, newNormLine(x0));
        ctx.lineTo(x1, newNormLine(x1));
        ctx.stroke();
        ctx.closePath();
    };
}

export default CanvasService;
