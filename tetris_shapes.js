// this actually works for drawing the L block
function lBlock (xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
    this.blocksCoordinates = [];
    this.counter = 0;

    this.draw = function() {

        context.beginPath();
        context.fillStyle = "blue";
        context.strokeStyle = "black";
        this.counter = 0;


        for (let x = blockSize; x <= blockSize * 3; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);
            context.strokeRect(this.xPos, this.yPos, blockSize, blockSize);
            this.blocksCoordinates[this.counter] = ({x : this.xPos, y : this.yPos});

            if (x === blockSize * 3) {
                context.fillRect(this.xPos + blockSize, this.yPos, blockSize, blockSize);
                context.strokeRect(this.xPos + blockSize, this.yPos, blockSize, blockSize);
                this.blocksCoordinates[this.counter + 1] = ({x : this.xPos + blockSize, y : this.yPos});
            }

            this.yPos += blockSize;
            this.counter ++;
        }

        this.yPos -= blockSize *3;

    };
    this.update = function () {
        this.yPos += blockSize;
    };
    this.bottom = function () {
        if (this.yPos >= 750){
            getNewBlock()
        }
    }
}
//easy enough on this one
function iBlock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.draw = function() {

        context.beginPath();
        context.fillStyle = "cyan";

        for (let x = blockSize; x <= blockSize * 4; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);
            context.strokeRect(this.xPos,this.yPos,blockSize,blockSize);

            this.yPos += blockSize;
        }
        this.yPos -= blockSize *4;

    };
    this.update = function () {
        this.yPos += blockSize;
    };
    this.bottom = function () {
        if (this.yPos >= 700){
            getNewBlock()
        }
    }
}

function tBlock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.draw = function () {

        context.beginPath();
        context.fillStyle = "magenta";


        for (let x = blockSize; x <= blockSize * 3; x += blockSize){

            context.fillRect(this.xPos,this.yPos,blockSize,blockSize);
            context.strokeRect(this.xPos,this.yPos,blockSize,blockSize);


            if (x === blockSize * 2){
                context.fillRect(this.xPos,this.yPos + blockSize,blockSize,blockSize);
                context.strokeRect(this.xPos,this.yPos + blockSize,blockSize,blockSize);
            }

            this.xPos += blockSize;

        }

        this.xPos -= blockSize *3;

    };
    this.update = function () {
        this.yPos += blockSize;
    };
    this.bottom = function () {
        if (this.yPos >= 800){
            console.log(this.y);
            getNewBlock()
        }
    }
}

function oBLock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.draw = function() {

        context.beginPath();
        context.fillStyle = "yellow";

        for (let x = blockSize; x <= blockSize * 2; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);
            context.strokeRect(this.xPos, this.yPos, blockSize, blockSize);
            context.fillRect(this.xPos + blockSize, this.yPos, blockSize, blockSize);
            context.strokeRect(this.xPos + blockSize, this.yPos, blockSize, blockSize);

            this.yPos += blockSize;
        }
        
        this.yPos -= blockSize * 2;

    };
    this.bottom = function () {
        if (this.yPos >= 800){
            getNewBlock()
        }
    };
    this.update = function () {
        this.yPos += blockSize;
    }
}

function zBlock(xPos,yPos) {

    this.xPos = xPos;
    this.yPos = yPos;

    this.draw = function() {

        context.beginPath();
        context.fillStyle = "red";

        for (let x = blockSize; x <= blockSize * 4; x += blockSize) {

            context.fillRect(this.xPos, this.yPos, blockSize, blockSize);
            context.strokeRect(this.xPos, this.yPos, blockSize, blockSize);

            if (x === blockSize * 2) {
                this.yPos += blockSize;

            } else {

                this.xPos += blockSize;
            }
        }
        this.yPos -= blockSize;
        this.xPos -= blockSize * 3;

    };
    this.update = function () {
        this.yPos += 50;
    };
    this.bottom = function () {
        if (this.yPos >= 800){
            getNewBlock()
        }
    }
}