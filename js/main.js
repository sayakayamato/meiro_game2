const meiro=[
    [0, 0, 0, 0, 0, 0, 0],         
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

const row = 0;                    //行（縦）を取得
const col = 0;                    //列（横）を取得
const m = meiro[row][col];

const size = 7;                   //連想配列の大きさを定義（正方形の場合はこれあると便利〜）

// 壁を作る
for(let i = 0; i < size; i++){
    meiro[i][0] = 1;
}
for(let i = 0; i < size; i++){
    meiro[i][6] = 1;
}
for(let i = 0; i < size; i++){
    meiro[0][i] = 1;
}
for(let i = 0; i < size; i++){
    meiro[6][i] = 1;
}

//最初の道となる座標をランダムで取得して道にする（縦横共に奇数の座標でなければならない）

meiro[Math.floor(Math.random() * ((size) / 2 - 1))*2 + 1][Math.floor(Math.random() * ((size) / 2 - 1))*2 + 1] = 1;


// //①縦横ともに奇数の座標をとる
// console.log(Math.floor(Math.random() * (size / 2 - 1))*2 + 1);
// //②それをランダムでひとつとる
// let startHole = meiro[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)];
// console.table(meiro);
// console.log(startHole);



//canvasに描画
// let con = can.getContext("2d");
// con.fillStyle = "red";
// con.fillRect =()


//やること
//壁を作る
//最初の点をランダムでとる
