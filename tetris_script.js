let canvas = document.querySelector("#tetris-screen");
let context = canvas.getContext("2d");

let blockWidth = 50;
let blockHeight = 50;
let blockJumpDown = 0;
let blockJumpRight =0;
context.beginPath();
context.strokeStyle = "grey";
for (let i = blockHeight; i < blockHeight * 20; i += blockHeight){
    blockJumpRight = 0;
    for (let x = blockWidth; x < blockWidth * 10; x += blockWidth){
        context.rect(blockJumpRight,blockJumpDown,blockWidth,blockWidth);
        blockJumpRight += blockWidth;
    }
    blockJumpDown += blockHeight;
}
context.stroke();

setInterval(function () {
    context.beginPath();
    let blockDrop = 0;
    let test = 0;
    context.fillStyle = "red";
    for (let i = blockWidth; i < blockWidth*5; i+= blockWidth ){
        context.fillRect(test,blockDrop,blockWidth,blockHeight);
        test += blockWidth;
    }
    blockDrop += blockHeight;
    context.stroke();
},1000);

