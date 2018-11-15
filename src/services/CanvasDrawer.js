import * as defaultValues from "./tools/drawTools/defaultValues";

class CanvasDrawer {
    constructor(context, startPoint = defaultValues.startPoint) {
        this.ctx = context;
        this.dotsObject = {
            detailArray: [],
            gridArray: [],
            systemCordArray: [],
            auxLineArray: [],
            textArray: []
        };
        this.arhimed = [];
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = "2";
        this.startPoint = startPoint;

        this.drawMyOwnDetail();
        this.drawGrid();
        this.drawSystemOfCord();
        this.ctx.closePath();
        // this.drawAll(true, true, true, true);
    }
    drawLine = (
        x1,
        y1,
        x2,
        y2,
        arr,
        dotsObject = this.dotsObject,
        z1 = 1,
        z2 = 1
    ) => {
        switch (arr) {
            case "aux": {
                dotsObject.auxLineArray.push([
                    { x: x1, y: y1, z: z1, ...defaultValues.auxStyle },
                    { x: x2, y: y2, z: z2, ...defaultValues.auxStyle }
                ]);
                break;
            }
            case "grid": {
                dotsObject.gridArray.push([
                    { x: x1, y: y1, z: z1, ...defaultValues.gridStyle },
                    { x: x2, y: y2, z: z2, ...defaultValues.gridStyle }
                ]);
                break;
            }
            case "cord": {
                dotsObject.systemCordArray.push([
                    { x: x1, y: y1, z: z1, ...defaultValues.cordStyle },
                    { x: x2, y: y2, z: z2, ...defaultValues.cordStyle }
                ]);
                break;
            }
            default: {
                dotsObject.detailArray.push([
                    { x: x1, y: y1, z: z1, ...defaultValues.defaultStyle },
                    { x: x2, y: y2, z: z2, ...defaultValues.defaultStyle }
                ]);
                break;
            }
        }
    };

    drawArc = (
        R = 10,
        start = 0,
        end = 360,
        startX = this.startPoint.x,
        startY = this.startPoint.y
    ) => {
        let angle = start;
        const coef = Math.PI / 180;

        if (end > 360 || end < start)
            throw new Error("end > 360 || end < start");

        R = start <= 0 ? -R : R;
        while (angle < end) {
            this.drawLine(
                startX + R * Math.cos(angle * coef),
                startY + R * Math.sin(angle * coef),
                startX + R * Math.cos((angle + 1) * coef),
                startY + R * Math.sin((angle + 1) * coef)
            );
            angle++;
        }
    };
    //this function collects all point for drawing Text
    drawText = (text, x, y, style, z = 1) => {
        this.dotsObject.textArray.push({
            text: text,
            x: x,
            y: y,
            z: z,
            style: style
        });
    };

    //this function collects all point for drawing Detail
    drawMyOwnDetail = (R1 = 15, R2 = 35, R3 = 36, R4 = 25, A = 150) => {
        this.dotsObject.detailArray = [];
        this.dotsObject.auxLineArray = [];
        const drawLine = this.drawLine;
        const drawArc = this.drawArc;
        const { x, y } = this.startPoint; //destructure of obj
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
        return;
    };

    //this function collects all point for drawing  SystemOfCord
    drawSystemOfCord = (
        width = defaultValues.canvasWidth,
        height = defaultValues.canvasHeight
    ) => {
        const STEP_OF_GRID = defaultValues.STEP_OF_GRID;
        const drawLine = this.drawLine;
        const drawText = this.drawText;

        const k1 = 1.6; //coefficient of deeper point of arrow
        const k2 = 0.4; //coefficient of higher point of arrow
        const k3 = 3.5; // coefficient of ended point of arrow
        const k4 = 2; // coefficient of start  point of  arrow where faced line

        //X
        drawLine(
            0,
            STEP_OF_GRID,
            width - STEP_OF_GRID * k4,
            STEP_OF_GRID,
            "cord"
        );

        drawLine(
            width - STEP_OF_GRID * k4,
            STEP_OF_GRID,
            width - STEP_OF_GRID * k3,
            STEP_OF_GRID * k1,
            "cord"
        );
        drawLine(
            width - STEP_OF_GRID * k3,
            STEP_OF_GRID * k1,
            width - STEP_OF_GRID * k3,
            STEP_OF_GRID * k2,
            "cord"
        );
        drawLine(
            width - STEP_OF_GRID * k3,
            STEP_OF_GRID * k2,
            width - STEP_OF_GRID * k4,
            STEP_OF_GRID,
            "cord"
        );

        //Y

        drawLine(STEP_OF_GRID, 0, STEP_OF_GRID, height - STEP_OF_GRID, "cord");
        drawLine(
            STEP_OF_GRID,
            height - STEP_OF_GRID,
            STEP_OF_GRID * k1,
            height - STEP_OF_GRID * 2.5,
            "cord"
        );
        drawLine(
            STEP_OF_GRID * k1,
            height - STEP_OF_GRID * 2.5,
            STEP_OF_GRID * k2,
            height - STEP_OF_GRID * 2.5,
            "cord"
        );
        drawLine(
            STEP_OF_GRID * k2,
            height - STEP_OF_GRID * 2.5,
            STEP_OF_GRID,
            height - STEP_OF_GRID,
            "cord"
        );

        for (let i = STEP_OF_GRID; i < width - 100; i += STEP_OF_GRID * 2) {
            drawLine(i, STEP_OF_GRID - 10, i, STEP_OF_GRID + 10, "cord");
            if (i < height - 80) {
                drawLine(STEP_OF_GRID - 10, i, STEP_OF_GRID + 10, i, "cord");
                drawText(`${i > STEP_OF_GRID ? i : ""}`, 45, i + 5, {
                    font: "40 bold Georgia  ",
                    ...defaultValues.defaultStyle
                });
            }
            if (i < width - STEP_OF_GRID * 3) {
                drawText(`${i > STEP_OF_GRID ? i : ""}`, i, STEP_OF_GRID * 2, {
                    font: "11px bold Georgia",
                    ...defaultValues.defaultStyle
                });
            }
        }
        drawText("X ", width - 70, STEP_OF_GRID * 2, {
            font: "40 bold Georgia  ",
            ...defaultValues.defaultStyle
        });

        drawText("Y", STEP_OF_GRID * 1.5, height - STEP_OF_GRID, {
            font: "40 bold Georgia  ",
            ...defaultValues.defaultStyle
        });
    };

    //this function collects all point for drawing Grid
    drawGrid = (
        w = defaultValues.canvasWidth,
        h = defaultValues.canvasHeight,
        step = defaultValues.STEP_OF_GRID
    ) => {
        const drawLine = this.drawLine;
        for (let i = 0; i < w; i += step) {
            drawLine(i, 0, i, h, "grid");
        }
        for (let i = 0; i < h; i += step) {
            drawLine(0, i, w, i, "grid");
        }
    };

    clearCanvas = (grid = true, cord = false) => {
        this.ctx.clearRect(
            0,
            0,
            defaultValues.canvasWidth,
            defaultValues.canvasHeight
        );
        if (grid) this.drawAll(0, true);
        if (cord) this.drawAll(0, 0, true);
    };
    drawingArhimed = (drawingArray = this.dotsObject.detailArray) => {
        const ctx = this.ctx;
        let temp = this.startPoint;

        const lineDrawer = (x1, y1, x2, y2, z1 = 1, z2 = 1) => {
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
        };

        const draw = dot => {
            const { lineWidth, strokeStyle, setLineDash, x, y } = dot;
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = strokeStyle;
            ctx.setLineDash(setLineDash);

            lineDrawer(temp.x, temp.y, x, y);

            ctx.stroke();
            ctx.closePath();
            temp = dot;

            return dot;
        };

        drawingArray.map(draw);
        return;
    };

    drawingArhimedAsync = (drawingArray = this.dotsObject.detailArray) => {
        const ctx = this.ctx;
        let temp = this.startPoint;

        const lineDrawer = (x1, y1, x2, y2, z1 = 1, z2 = 1) => {
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
        };

        const draw = dot => {
            return setTimeout(() => {
                const { lineWidth, strokeStyle, setLineDash, x, y } = dot;
                ctx.beginPath();
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = strokeStyle;
                ctx.setLineDash(setLineDash);

                lineDrawer(temp.x, temp.y, x, y);

                ctx.stroke();
                ctx.closePath();
                temp = dot;

                return dot;
            }, 1500);
        };

        drawingArray.map(draw);
        return;
    };

    drawing = (drawingArray = this.dotsObject.detailArray) => {
        const ctx = this.ctx;

        const lineDrawer = (x1, y1, x2, y2, z1 = 1, z2 = 1) => {
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
        };

        drawingArray.map(dots => {
            const { x: x0, y: y0 } = dots[0];
            const { x: x1, y: y1 } = dots[1];
            const { lineWidth, strokeStyle, setLineDash } = dots[0];
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = strokeStyle;
            ctx.setLineDash(setLineDash);

            lineDrawer(x0, y0, x1, y1);

            ctx.stroke();
            ctx.closePath();
            return dots;
        });
        return;
    };

    drawingText = (textArray = this.dotsObject.textArray) => {
        const ctx = this.ctx;
        textArray.forEach(el => {
            ctx.font = el.style.font;
            ctx.fillText(el.text, el.x, el.y);
            ctx.stroke();
        });
    };

    drawAll = (detail, grid, cord, aux) => {
        const ctx = this.ctx;
        const drawing = this.drawing;
        const {
            detailArray,
            gridArray,
            systemCordArray,
            auxLineArray,
            textArray
        } = this.dotsObject;

        if (detail) {
            ctx.beginPath();
            drawing(detailArray);
            ctx.closePath();
        }
        if (grid) {
            ctx.beginPath();
            drawing(gridArray);
            ctx.closePath();
        }

        if (cord) {
            ctx.beginPath();
            drawing(systemCordArray);
            this.drawingText(textArray);
            ctx.closePath();
        }
        if (aux) {
            ctx.beginPath();
            drawing(auxLineArray);
            ctx.closePath();
        }
    };
}

export default CanvasDrawer;
