// this actually works for drawing the L block
function lBlock (){
    let yPos = 0;
    let xPos = 0;

    context.beginPath();
    context.fillStyle = "blue";

    for (let x = blockSize; x <= blockSize * 3; x += blockSize){

        context.fillRect(xPos,yPos,blockSize,blockSize);

        if (x === blockSize * 3){
            context.fillRect(xPos+50,yPos,blockSize,blockSize)
        }

        yPos += blockSize;
    }
    context.stroke()
}
//easy enough on this one
function iBlock() {
    let yPos = 0;
    let xPos = 0;

    context.beginPath();
    context.fillStyle = "cyan";

    for (let x = blockSize; x <= blockSize * 4; x += blockSize){

        context.fillRect(xPos,yPos,blockSize,blockSize);

        yPos += blockSize;
    }
    context.stroke()
}

function tBlock(xPos,yPos) {

     yPos = 0;
     xPos = 0;


    this.update = function () {

        context.beginPath();
        context.fillStyle = "magenta";

        for (let x = blockSize; x <= blockSize * 3; x += blockSize){

            context.fillRect(xPos,yPos,blockSize,blockSize);

            if (x === blockSize * 2){
                context.fillRect(xPos,yPos+blockSize,blockSize,blockSize)
            }

            xPos += blockSize;
        }
        context.stroke();

    }
}

function oBLock() {

    let yPos = 0;
    let xPos = 0;

    context.beginPath();
    context.fillStyle = "yellow";

    for (let x = blockSize; x <= blockSize * 2; x += blockSize){

        context.fillRect(xPos,yPos,blockSize,blockSize);
        context.fillRect(xPos+blockSize,yPos,blockSize,blockSize);

        yPos += blockSize;
    }
    context.stroke()
}

function zBlock() {

    let yPos = 0;
    let xPos = 0;

    context.beginPath();
    context.fillStyle = "red";

    for (let x = blockSize; x <= blockSize * 4; x += blockSize){

        context.fillRect(xPos,yPos,blockSize,blockSize);

        if (x === blockSize * 2){
            yPos += blockSize;

        }else {

            xPos += blockSize;
        }
    }
    context.stroke()
}