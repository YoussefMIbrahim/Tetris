let canvas = document.querySelector("#tetris-screen");
let context = canvas.getContext("2d");

let blockSize = 50;
let blocks = [tBlock,iBlock,lBlock,oBLock];
let block;

startGame();
setInterval(updateGame,1000);

function startGame(){
    drawGrid();
    getNewBlock()

}

function getNewBlock() {

    let randomBlock = blocks[Math.floor(Math.random() * blocks.length)];

    block = new randomBlock(150,0);

}

function drawGrid(){
    let blockJumpDown = 0;
    let blockJumpRight =0;
    context.beginPath();
    context.strokeStyle = "grey";
    for (let i = blockSize; i < blockSize * 20; i += blockSize){
        blockJumpRight = 0;
        for (let x = blockSize; x < blockSize * 10; x += blockSize){
            context.rect(blockJumpRight,blockJumpDown,blockSize,blockSize);
            blockJumpRight += blockSize;
        }
        blockJumpDown += blockSize;
    }
    context.stroke();
}


function updateGame (){

    clear();
    drawGrid();
    block.update();
    block.yPos += 50;

}
// setInterval(function () {
//     context.beginPath();
//     let blockDrop = 0;
//     let test = 0;
//     context.fillStyle = "red";
//     for (let i = blockWidth; i < blockWidth * 5; i+= blockWidth ){
//         context.fillRect(test,blockDrop,blockWidth,blockHeight);
//         test += blockWidth;
//     }
//     blockDrop += blockHeight;
//     context.stroke();
// },1000);


function clear(){
    context.clearRect(0,0,450,900)
}