// this actually works for drawing the L block
function lBlock (xPos,yPos){
    this.xPos = xPos;
    this.yPos = yPos;

    this.update = function() {

        context.beginPath();
        context.fillStyle = "blue";

        for (let x = blockSize; x <= blockSize * 3; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);

            if (x === blockSize * 3) {
                context.fillRect(this.xPos + 50, this.yPos, blockSize, blockSize)
            }

            this.yPos += blockSize;
        }
        context.stroke();
        this.yPos -= blockSize *3;
    }
}
//easy enough on this one
function iBlock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.update = function() {

        context.beginPath();
        context.fillStyle = "cyan";

        for (let x = blockSize; x <= blockSize * 4; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);

            this.yPos += blockSize;
        }
        context.stroke();
        this.yPos -= blockSize *4;

    }
}

function tBlock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.update = function () {

        context.beginPath();
        context.fillStyle = "magenta";


        for (let x = blockSize; x <= blockSize * 3; x += blockSize){

            context.fillRect(this.xPos,this.yPos,blockSize,blockSize);

            if (x === blockSize * 2){
                context.fillRect(this.xPos,this.yPos + blockSize,blockSize,blockSize)
            }

            this.xPos += blockSize;
        }
        context.stroke();

        this.xPos -= blockSize *3;

    }
}

function oBLock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.update = function() {

        context.beginPath();
        context.fillStyle = "yellow";

        for (let x = blockSize; x <= blockSize * 2; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);
            context.fillRect(this.xPos + blockSize, this.yPos, blockSize, blockSize);

            this.yPos += blockSize;
        }
        context.stroke()
        this.yPos -= blockSize * 2;
    }
}

function zBlock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.update = function() {

        context.beginPath();
        context.fillStyle = "red";

        for (let x = blockSize; x <= blockSize * 4; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);

            if (x === blockSize * 2) {
                this.yPos += blockSize;

            } else {

                this.xPos += blockSize;
            }
        }
        context.stroke();
        this.yPos -= blockSize;
        this.xPos -= blockSize * 3;
    }
}