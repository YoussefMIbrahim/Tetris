
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
        // console.log(event['keyCode']);
        if (event['keyCode'] === 37){
            if (checkSideCollisions("LEFT")) {
                block.xPos -= 50;
                clear();
                drawGrid();
                checkBlockCollisions();
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
                checkBlockCollisions();
                block.bottom();
                drawArrayBlocks();
                block.draw();
            }
        }
        else if (event['keyCode'] === 40){
            block.yPos += 50;
            clear();
            drawGrid();
            checkBlockCollisions();
            block.bottom();
            drawArrayBlocks();
            block.draw();
        }
        else if (event['keyCode'] === 32){
            gameTime = 1;
        }
        else if (event['keyCode'] === 82){

            blocksSoFar.forEach(function (cBlock) {

                for (let x = 0; x < block.blocksCoordinates.length; x++) {
                    console.log(`current:  ${block.blocksCoordinates[x]['y']}`);
                    console.log(`old: ${cBlock.blocksCoordinates[x]['y']}`);

                }
            })
            console.log(blocksSoFar)
        }
    })
}
function getNewBlock() {

    let randomBlock = blocks[Math.floor(Math.random() * blocks.length)];

    block = new randomBlock(150,0);

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
    checkBlockCollisions();
    drawArrayBlocks();
    block.draw();
    block.update();



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


function checkBlockCollisions() {

    if (blocksSoFar.length !== 0 ) {
        // console.log(`blocks so far: ${blocksSoFar.length}`);
        // console.log(`coordinates in block: ${block.blocksCoordinates.length}`);
        blocksSoFar.forEach(function (cBlock) {

            for (let x = 0; x < block.blocksCoordinates.length; x++) {

                if ((block.blocksCoordinates[x]['y'] === (cBlock.blocksCoordinates[x]['y'] - blockSize) )  &&
                    (block.blocksCoordinates[x]['x'] === (cBlock.blocksCoordinates[x]['x'] - blockSize ) ))  {

                    placeBlockInArray();
                    getNewBlock();

                    console.log('collision is happening ')
                }
            }
        })
    }
}

function placeBlockInArray() {
    blocksSoFar.push(block)
}
