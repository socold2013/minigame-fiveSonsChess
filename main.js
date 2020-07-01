var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var blorwh = 0;
var arcPosX, arcPosY;
var mtxPosX, mtxPosY;
var winflag = 0;
var refresh = function () { location.reload(); }
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
$("#canvas").click(function (event) {

    //落子
    if ((Math.abs(event.offsetX - (20 + x * 20))) >= 10) { console.log(event.offsetX); };
    for (var x = 0; x < 19; x++) {

        if ((Math.abs(event.offsetX - (20 + x * 20))) < 10) {
            arcPosX = 20 + x * 20;
            mtxPosX = x;
        }
        if ((Math.abs(event.offsetY - (20 + x * 20))) < 10) {
            arcPosY = 20 + x * 20;
            mtxPosY = x;
        }
    }
    //防止落重
    //判断是否为空
    if (!matrix[mtxPosX][mtxPosY]) {
        blorwh = !blorwh;
        ctx.beginPath();
        //上一子是白色
        if (blorwh) {
            ctx.fillStyle = "#222"
            matrix[mtxPosX][mtxPosY] = 1;
        }//不然就放白子
        else {
            ctx.fillStyle = "Snow"
            matrix[mtxPosX][mtxPosY] = 2;
        };
        ctx.arc(arcPosX, arcPosY, 8, 0, Math.PI * 2, false);
        ctx.fill();
        //游戏获胜逻辑
        if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX - 4][mtxPosY]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX - 3][mtxPosY] * matrix[mtxPosX - 2][mtxPosY] * matrix[mtxPosX - 1][mtxPosY]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY] - matrix[mtxPosX - 2][mtxPosY] - matrix[mtxPosX - 1][mtxPosY])) {
                    winflag = 1; console.log("右")
                }
            }
        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX + 4][mtxPosY]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX + 3][mtxPosY] * matrix[mtxPosX + 2][mtxPosY] * matrix[mtxPosX + 1][mtxPosY]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX + 3][mtxPosY] - matrix[mtxPosX + 2][mtxPosY] - matrix[mtxPosX + 1][mtxPosY])) {
                    winflag = 1; console.log("左")
                }
            }
        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX][mtxPosY - 4]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX][mtxPosY - 3] * matrix[mtxPosX][mtxPosY - 2] * matrix[mtxPosX][mtxPosY - 1]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX][mtxPosY - 3] - matrix[mtxPosX][mtxPosY - 2] - matrix[mtxPosX][mtxPosY - 1])) {
                    winflag = 1; console.log("下")
                }
            }
        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX][mtxPosY + 4]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX][mtxPosY + 3] * matrix[mtxPosX][mtxPosY + 2] * matrix[mtxPosX][mtxPosY + 1]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX][mtxPosY + 3] - matrix[mtxPosX][mtxPosY + 2] - matrix[mtxPosX][mtxPosY + 1])) {
                    winflag = 1; console.log("上")
                }
            }
        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX + 4][mtxPosY + 4]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX + 3][mtxPosY + 3] * matrix[mtxPosX + 2][mtxPosY + 2] * matrix[mtxPosX + 1][mtxPosY + 1]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX + 3][mtxPosY + 3] - matrix[mtxPosX + 2][mtxPosY + 2] - matrix[mtxPosX + 1][mtxPosY + 1])) {
                    winflag = 1; console.log("左上")
                }
            }
        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX - 4][mtxPosY - 4]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX - 3][mtxPosY - 3] * matrix[mtxPosX - 2][mtxPosY - 2] * matrix[mtxPosX - 1][mtxPosY - 1]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY - 3] - matrix[mtxPosX - 2][mtxPosY - 2] - matrix[mtxPosX - 1][mtxPosY - 1])) {
                    winflag = 1; console.log("右下")
                }
            }

        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX + 4][mtxPosY - 4]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX + 3][mtxPosY - 3] * matrix[mtxPosX + 2][mtxPosY - 2] * matrix[mtxPosX + 1][mtxPosY - 1]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX + 3][mtxPosY - 3] - matrix[mtxPosX + 2][mtxPosY - 2] - matrix[mtxPosX + 1][mtxPosY - 1])) {
                    winflag = 1; console.log("右上")
                }
            }
        }
        else if (matrix[mtxPosX][mtxPosY] == matrix[mtxPosX - 4][mtxPosY + 4]) {
            if (matrix[mtxPosX][mtxPosY] * matrix[mtxPosX - 3][mtxPosY + 3] * matrix[mtxPosX - 2][mtxPosY + 2] * matrix[mtxPosX - 1][mtxPosY + 1]) {
                if (!(3 * matrix[mtxPosX][mtxPosY] - matrix[mtxPosX - 3][mtxPosY + 3] - matrix[mtxPosX - 2][mtxPosY + 2] - matrix[mtxPosX - 1][mtxPosY + 1])) {
                    winflag = 1; console.log("左下");
                }
            }
        };
        console.log(mtxPosX, mtxPosY);
        console.log("winflag:" + winflag, "blorwh:" + blorwh);
        if (winflag == 1) {

            ctx.font = "40px Comic Sans MS";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle"


            if (blorwh) {
                ctx.fillStyle = "#222";
                ctx.fillText("黑子获胜,black win!", 200, 420)

            } else {
                ctx.fillStyle = "snow";
                ctx.fillText("白子获胜,white win!", 200, 420)
            }
            matrix = 0;
            ctx = 0;
            oclick = 0;
        }

    }









})
