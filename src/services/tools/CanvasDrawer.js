import { drawLine, drawArc, drawText } from "./drawTools/drawElementary";
import * as defaultValues from "./drawTools/defaultValues";

class CanvasDrawer {
    constructor(context) {
        this.context = context;
    }

    drawMyOwnDetail = (R1 = 15, R2 = 35, R3 = 36, R4 = 25, A = 150) => {
        defaultValues.dotsObject.detailArray = [];
        defaultValues.dotsObject.auxLineArray = [];
        const { x, y } = defaultValues.startPoint; //destructure of obj
        const diag = A * 2 ** (1 / 2);
        const Xc = (A / 2) * Math.cos((45 * Math.PI) / 180);
        //central circles
        drawArc(R1);
        drawArc(R2);
        //border Square
        drawLine(x, y + diag / 2 - R4, x + R4, y + diag / 2 - R4);
        drawLine(x + R4, y + diag / 2 - R4, x + diag / 2 - R4, y + R4);
        drawLine(x + diag / 2 - R4, y + R4, x + diag / 2 - R4, y - R4);
        drawLine(x + diag / 2 - R4, y - R4, x + R4, y - diag / 2 + R4);
        drawLine(x - R4, y - diag / 2 + R4, x + R4, y - diag / 2 + R4);
        drawLine(x + R4, y - diag / 2 + R4, x - R4, y - diag / 2 + R4);
        drawLine(x - R4, y - diag / 2 + R4, x - diag / 2 + R4, y - R4);
        drawLine(x - diag / 2 + R4, y - R4, x - diag / 2 + R4, y + R4);
        drawLine(x - diag / 2 + R4, y + R4, x - R4, y + diag / 2 - R4);
        drawLine(x - R4, y + diag / 2 - R4, x, y + diag / 2 - R4);

        //circles inside
        drawArc(R3, -45, 135, x + Xc, y + Xc);
        drawArc(R3, -135, 45, x + Xc, y - Xc);
        drawArc(R3, -225, -45, x - Xc, y - Xc);
        drawArc(R3, -315, -135, x - Xc, y + Xc);
        //circles outside
        drawArc(R4, -270, -90, x + diag / 2 - R4, y);
        drawArc(R4, 90, 270, x - diag / 2 + R4, y);
        drawArc(R4, -180, 0, x, y + diag / 2 - R4);
        drawArc(R4, 0, 180, x, y - diag / 2 + R4);

        //auxline
        drawLine(x, y, x, y + diag / 2 + 10, "aux");
        drawLine(x, y, x, y - diag / 2 - 10, "aux");
        drawLine(x, y, x - diag / 2 - 10, y, "aux");
        drawLine(x, y, x + diag / 2 + 10, y, "aux");
        drawLine(x, y, x + Xc + 10, y - Xc - 10, "aux");
        drawLine(x, y, x - Xc - 10, y + Xc + 10, "aux");
        drawLine(x, y, x + Xc + 10, y + Xc + 10, "aux");
        drawLine(x, y, x - Xc - 10, y - Xc - 10, "aux");

        console.log(defaultValues.dotsObject);
        return;
    };
    drawSystemOfCord = (
        width = defaultValues.canvasWidth,
        height = defaultValues.canvasHeight
    ) => {
        const STEP_OF_GRID = defaultValues.STEP_OF_GRID;
        //X
        drawLine(STEP_OF_GRID, STEP_OF_GRID, width - 50, STEP_OF_GRID, "cord");
        drawLine(width - 50, STEP_OF_GRID, width - 80, 10, "cord");
        drawLine(width - 80, 10, width - 80, 30, "cord");
        drawLine(width - 80, 30, width - 50, 20, "cord");
        //Y
        drawLine(STEP_OF_GRID, STEP_OF_GRID, STEP_OF_GRID, height - 50, "cord");
        drawLine(20, height - 50, 30, height - 80, "cord");
        drawLine(30, height - 80, 10, height - 80, "cord");

        drawLine(10, height - 80, STEP_OF_GRID, height - 50, "cord");

        for (let i = STEP_OF_GRID; i < width - 100; i += 50) {
            drawLine(i, 5, i, 35, "cord");
            if (i < height - 80) {
                drawLine(5, i, 35, i, "cord");
                drawText(
                    `${i - STEP_OF_GRID > 0 ? i - STEP_OF_GRID : ""}`,
                    45,
                    i + 5
                );
            }
            drawText(`      ${i - STEP_OF_GRID}`, i - 19, 45, {
                font: "15px bold Georgia",
                ...defaultValues.defaultStyle
            });
        }
        drawText("X ", width - 70, 40, {
            font: "40 bold Georgia  ",
            ...defaultValues.defaultStyle
        });

        drawText("Y", 30, height - 60, {
            font: "40 bold Georgia  ",
            ...defaultValues.defaultStyle
        });
    };

    drawGrid = (
        w = defaultValues.canvasWidth,
        h = defaultValues.canvasHeight,
        step = defaultValues.STEP_OF_GRID
    ) => {
        for (let i = 0; i < w; i += step) {
            drawLine(i, 0, i, h, "grid");
        }
        for (let i = 0; i < h; i += step) {
            drawLine(0, i, w, i, "grid");
        }
    };

    clearCanvas = (grid = true, cord = false) => {
        this.context.clearRect(
            0,
            0,
            defaultValues.canvasWidth,
            defaultValues.canvasHeight
        );
        defaultValues.dotsObject.gridArray = [];
        if (grid) this.drawGrid();
    };
}

export default CanvasDrawer;
