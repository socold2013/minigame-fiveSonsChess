var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var blorwh = 0;
var arcPosX, arcPosY;
var mtxPosX, mtxPosY;
var winflag = false;
var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
//绘制棋盘
ctx.beginPath();
for (var i = 0; i < 19; i++) {
    ctx.moveTo(20 + i * 20, 20);
    ctx.lineTo(20 + i * 20, 380);
    ctx.moveTo(20, 20 + i * 20);
    ctx.lineTo(380, 20 + i * 20);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        ctx.fillStyle = "Black";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(80 + i * 120, 80 + j * 120, 3, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

//点击事件
if (!winflag) {
    $("#canvas").click(function (event) {
        console.log("可点击")
        //落子
        if (19 < event.offsetX && event.offsetX < 381) {
            if (19 < event.offsetY && event.offsetY < 381) {
                for (let x = 0; x < 19; x++) {
                    if ((Math.abs(event.offsetX - (20 + x * 20))) < 10) {
                        arcPosX = 20 + x * 20;
                        mtxPosX = x;
                        // console.log("X:" + arcPosX, mtxPosX, event.offsetX)

                    }

                    if ((Math.abs(event.offsetY - (20 + x * 20))) < 10) {
                        arcPosY = 20 + x * 20;
                        mtxPosY = x;
                        // console.log("Y:" + arcPosY, mtxPosY, event.offsetY)

                    }
                };
            };

        };
        //防止落重
        //判断是否为空
        if (mtxPosX && mtxPosY && matrix[mtxPosX][mtxPosY] == 0) {
            blorwh = !blorwh;
            ctx.beginPath();
            //上一子是白色
            if (blorwh) {
                ctx.fillStyle = "#222"
                matrix[mtxPosX][mtxPosY] = "黑";
            }//不然就放白子
            else {
                ctx.fillStyle = "Snow"
                matrix[mtxPosX][mtxPosY] = "白";
            };
            ctx.arc(arcPosX, arcPosY, 8, 0, Math.PI * 2, false);
            ctx.fill();
            var chessA = "";
            var chessB = "";
            ctx.font = "40px Comic Sans MS";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle"
            for (let k = -1; k < 2; k++) {
                for (let i = -4; i < 1; i++) {
                    for (let j = i; j < i + 5; j++) {
                        if (!matrix[mtxPosX + j][mtxPosY + (j * k)]) {
                            matrix[mtxPosX + j][mtxPosY + (j * k)] = 0
                        }

                        chessA += matrix[mtxPosX + j][mtxPosY + (j * k)];
                        if (k == 0) {
                            chessB += matrix[mtxPosX + (j * k)][mtxPosY + j];


                        }
                    }
                    // console.log("chessA:" + chessA);
                    // if (k == 0) { console.log("chessB:" + chessB); }
                    if (chessA == "白白白白白" || chessB == "白白白白白") {

                        ctx.fillStyle = "snow";
                        ctx.fillText("白子获胜,white win!", 200, 420);


                    }
                    else if (chessA == "黑黑黑黑黑" || chessB == "黑黑黑黑黑") {

                        ctx.fillStyle = "#222";
                        ctx.fillText("黑子获胜,black win!", 200, 420);

                    }
                    chessA = "";
                    chessB = "";
                }

            }
            winflag = true; console.log("winflag:" + winflag)
        }
        //旧版游戏获胜逻辑
        // if (matrix[mtxPosX - 4][mtxPosY]) {
        //     if (matrix[mtxPosX-4][mtxPosY] +matrix[mtxPosX - 3][mtxPosY] +matrix[mtxPosX - 2][mtxPosY] +matrix[mtxPosX - 1][mtxPosY]+matrix[mtxPosX][mtxPosY]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY] - matrix[mtxPosX - 2][mtxPosY] - matrix[mtxPosX - 1][mtxPosY])) {
        //             winflag = 1; console.log("右")
        //         }
        //     }
        // }
        // else if (mtxPosX < 15 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX + 4][mtxPosY]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX + 3][mtxPosY] * matrix[mtxPosX + 2][mtxPosY] * matrix[mtxPosX + 1][mtxPosY]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX + 3][mtxPosY] - matrix[mtxPosX + 2][mtxPosY] - matrix[mtxPosX + 1][mtxPosY])) {
        //             winflag = 1; console.log("左")
        //         }
        //     }
        // }
        // else if (mtxPosY > 3 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX][mtxPosY - 4]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX][mtxPosY - 3] * matrix[mtxPosX][mtxPosY - 2] * matrix[mtxPosX][mtxPosY - 1]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX][mtxPosY - 3] - matrix[mtxPosX][mtxPosY - 2] - matrix[mtxPosX][mtxPosY - 1])) {
        //             winflag = 1; console.log("下")
        //         }
        //     }
        // }
        // else if (mtxPosY < 15 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX][mtxPosY + 4]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX][mtxPosY + 3] * matrix[mtxPosX][mtxPosY + 2] * matrix[mtxPosX][mtxPosY + 1]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX][mtxPosY + 3] - matrix[mtxPosX][mtxPosY + 2] - matrix[mtxPosX][mtxPosY + 1])) {
        //             winflag = 1; console.log("上")
        //         }
        //     }
        // }
        // else if (mtxPosX < 15 && mtxPosY < 15 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX + 4][mtxPosY + 4]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX + 3][mtxPosY + 3] * matrix[mtxPosX + 2][mtxPosY + 2] * matrix[mtxPosX + 1][mtxPosY + 1]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX + 3][mtxPosY + 3] - matrix[mtxPosX + 2][mtxPosY + 2] - matrix[mtxPosX + 1][mtxPosY + 1])) {
        //             winflag = 1; console.log("左上")
        //         }
        //     }
        // }
        // else if (mtxPosX > 3 && mtxPosY > 3 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX - 4][mtxPosY - 4]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX - 3][mtxPosY - 3] * matrix[mtxPosX - 2][mtxPosY - 2] * matrix[mtxPosX - 1][mtxPosY - 1]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY - 3] - matrix[mtxPosX - 2][mtxPosY - 2] - matrix[mtxPosX - 1][mtxPosY - 1])) {
        //             winflag = 1; console.log("右下")
        //         }
        //     }

        // }
        // else if (mtxPosX < 15 && mtxPosY > 3 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX + 4][mtxPosY - 4]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX + 3][mtxPosY - 3] * matrix[mtxPosX + 2][mtxPosY - 2] * matrix[mtxPosX + 1][mtxPosY - 1]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX + 3][mtxPosY - 3] - matrix[mtxPosX + 2][mtxPosY - 2] - matrix[mtxPosX + 1][mtxPosY - 1])) {
        //             winflag = 1; console.log("右上")
        //         }
        //     }
        // }
        // else if (mtxPosX > 3 && mtxPosY < 15 && matrix[mtxPosX][mtxPosY] == matrix[mtxPosX - 4][mtxPosY + 4]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX - 3][mtxPosY + 3] * matrix[mtxPosX - 2][mtxPosY + 2] * matrix[mtxPosX - 1][mtxPosY + 1]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY + 3] - matrix[mtxPosX - 2][mtxPosY + 2] - matrix[mtxPosX - 1][mtxPosY + 1])) {
        //             winflag = 1; console.log("左下");
        //         }
        //     }
        // };
        // if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX - 4][mtxPosY]) {
        //     if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX - 3][mtxPosY] * matrix[mtxPosX - 2][mtxPosY] * matrix[mtxPosX - 1][mtxPosY]) {
        //         if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY] - matrix[mtxPosX - 2][mtxPosY] - matrix[mtxPosX - 1][mtxPosY])) {
        //             winflag = 1; console.log("右")
        //         }
        //     }
        // }
        //新版获胜逻辑

    })

};
if (winflag == 1) {
    console.log("不可点击");
    $("#canvas").click(function () { location.reload() })
};
