export const Matrix = (function Matrix() {
    class Matrix {
        translate(m, n) {
            return [[1, 0, 0], [0, 1, 0], [m, n, 1]];
        }

        scale(scaleX, scaleY) {
            return [[scaleX, 0, 0], [0, scaleY, 0], [0, 0, 1]];
        }

        rotate(angle, m = 0, n = 0) {
            const rad = (angle * Math.PI) / 180;

            return [
                [Math.cos(rad), Math.sin(rad), 0],
                [-Math.sin(rad), Math.cos(rad), 0],
                [m, n, 1]
            ];
        }

        multiplyVector(_dot, matrix) {
            const { x, y, z } = _dot;
            const dot = [+x, +y, +z];
            const newVector = [];

            for (let i = 0; i < matrix.length; i++) {
                newVector[i] = 0;
                for (let j = 0; j < matrix.length; j++) {
                    newVector[i] += dot[j] * matrix[j][i];
                }
            }
            return {
                ..._dot,
                x: newVector[0],
                y: newVector[1],
                z: newVector[2]
            };
        }
        multiplyMatrix(A, B) {
            let rowsA = A.length,
                colsA = A[0].length,
                rowsB = B.length,
                colsB = B[0].length,
                C = [];
            if (colsA !== rowsB) return false;
            for (let i = 0; i < rowsA; i++) C[i] = [];
            for (let k = 0; k < colsB; k++) {
                for (let i = 0; i < rowsA; i++) {
                    let t = 0;
                    for (let j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
                    C[i][k] = t;
                }
            }
            return C;
        }
        athens(Xx, Yx, Xy, Yy, X0, Y0) {
            return [[Xx, Yx, 0], [Xy, Yy, 0], [X0, Y0, 1]];
        }
        projective(Xx, Yx, Xy, Yy, X0, Y0, Wx, Wy, W0) {
            return [
                [Xx * Wx, Yx * Wx, Wx],
                [Xy * Wy, Yy * Wy, Wy],
                [X0 * W0, Y0 * W0, W0]
            ];
        }
    }
    return new Matrix();
})();
