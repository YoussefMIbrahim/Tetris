
let canvas = document.querySelector("#tetris-screen");
let context = canvas.getContext("2d");

let blockSize = 50;
let blocks = [iBlock,lBlock];
let block;
let gameTime = 1000;
let blocksSoFar = [];


startGame();
setInterval(updateGame,gameTime);

function startGame(){
    drawGrid();
    getNewBlock();
    buttonInputs();

}

function buttonInputs() {
    document.addEventListener('keydown',function (event) {
        if (event['keyCode'] === 37){
            if (checkSideCollisions("LEFT")) {
                block.xPos -= 50;
                clear();
                drawGrid();
                block.bottom();
                drawArrayBlocks();
                block.draw();
            }
        }
        else if (event['keyCode'] === 39){
            if (checkSideCollisions("RIGHT")) {
                block.xPos += 50;
                clear();
                drawGrid();
                block.bottom();
                drawArrayBlocks();
                block.draw();
            }
        }
        else if (event['keyCode'] === 40){
            block.yPos += 50;
            clear();
            drawGrid();
            block.bottom();
            drawArrayBlocks();
            block.draw();
        }
        else if (event['keyCode'] === 32){
            gameTime = 1;
        }
    })
}
function getNewBlock() {

    let randomBlock = blocks[Math.floor(Math.random() * blocks.length)];

    block = new randomBlock(150,0);
    
    blocksSoFar.push(block)

}

function drawGrid(){
    let blockJumpDown = 0;
    let blockJumpRight = 0;
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
    block.bottom();
    drawArrayBlocks();
    block.draw();
    block.update();
    console.log(block.blocksCoordinates)
    // gameTime = 1000;


}

function drawArrayBlocks() {
    for (let x = 0; x < blocksSoFar.length; x++){
        blocksSoFar[x].draw();
    }
}

function clear(){
    context.clearRect(0,0,450,900)
}

function checkSideCollisions(side) {

    if (side === 'RIGHT') {

        for (let x = 0; x < block.blocksCoordinates.length; x++) {
            if (block.blocksCoordinates[x]['x'] === (450 - blockSize)) {
                return false;
            }
        }
        return true;
    }

    if (side === 'LEFT') {

        for (let x = 0; x < block.blocksCoordinates.length; x++) {
            if (block.blocksCoordinates[x]['x'] === 0)  {
                return false;
            }
        }
        return true;
    }
}

