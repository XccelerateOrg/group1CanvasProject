//mike

//window & canvas sizes adjustment
function chnageWindowSize() {
    let screenWidth = $(window).innerWidth;
    let screenHeight = $(window).innerHeight;

    let windowWidth = $(window).width() - 49;
    let windowHeight = $(window).height() - 72;

    //width
    $('.feature-wrapper').css('width', Math.floor(screenWidth * 0.1));
    $('.canvas').attr('width', Math.floor(windowWidth));
    // console.log($('.canvas')[0].width);
    
    $('.canvas').css('left', '45px');
    $('.style-wrapper').css('width', Math.floor(screenWidth));


    //height
    $('.feature-wrapper').css('height', Math.floor(windowHeight) - 35);
    $('.canvas').css('position', 'fixed');
    $('.canvas').css('top', '24px');
    $('.feature-wrapper').css('margin-top', '24px');

    $('.canvas').attr('height', Math.floor(windowHeight)-10);
    $('.style-wrapper').css('height', Math.floor(screenHeight)-50);
};

$(document).ready(function () {
    chnageWindowSize();
    $(window).resize(chnageWindowSize);
});
// console.log($('.canvas')[0].width);


// definition of DrawLine class
class DrawLine {
    constructor() {
        this.drawing = false;
        self = this;
    };
    startPosition(e) {
        if (e.which === 1 && ctrlButton) {
            console.log(e.which);
            this.drawing = true;
            ctxReal.lineWidth = globalStyle.lineThickness;
            ctxReal.lineCap = globalStyle.lineEndShape;
            ctxReal.strokeStyle = globalStyle.lineColor;
            ctxReal.beginPath();
            ctxReal.moveTo(e.offsetX, e.offsetY);
        }
    }
    endPosition(e) {
        this.drawing = false;
        ctxReal.stroke();
    }
    movePosition(e) {
        if (this.drawing === true && ctrlButton === true) {
            ctxReal.lineTo(e.offsetX, e.offsetY);
            ctxReal.stroke();
        }
    }
}

// definition of DrawRectangle class
class DrawRectangle {
    constructor() {
        this.drawing = false;
        this.startPoint = [];
        this.endPoint = [];
        this.difference = [];
        self = this;
    };
    startPosition(e) {
        this.drawing = true;
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.fillStyle = globalStyle.fillColor;
        ctxDraft.lineWidth = globalStyle.lineThickness;
        ctxDraft.fillStyle = globalStyle.fillColor;
        self.startPoint[0] = e.offsetX;
        self.startPoint[1] = e.offsetY;
    }
    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.fillRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            self.difference[0] = e.offsetX - self.startPoint[0];
            self.difference[1] = e.offsetY - self.startPoint[1];
            ctxDraft.fillRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
        }
    }
}

// definition of DrawCircle class
class DrawCircle {
    constructor() {
        this.drawing = false;
        this.firstPoint = [];
        self = this;
    };
    startPosition(e) {
        this.drawing = true;
        ctxDraft.fillStyle = globalStyle.fillColor;
        ctxDraft.beginPath();
        self.firstPoint[0] = e.offsetX;
        self.firstPoint[1] = e.offsetY;
    }
    endPosition(e) {
        let sqX = Math.pow(e.offsetX - self.firstPoint[0], 2);
        let sqY = Math.pow(e.offsetY - self.firstPoint[1], 2);
        let radius = Math.sqrt(sqX + sqY);
        console.log(radius);
        ctxDraft.arc(self.firstPoint[0], self.firstPoint[1], radius, 0, 2 * Math.PI);
        // ctx.stroke();
        ctxDraft.fill();
        this.drawing = false;
    }
    movePosition(e) {
        return;
    }
}

// definition of DrawStar class
class DrawStar {
    constructor() {
        this.drawing = false;
        this.pointArray = [];
        this.countPoint = 0;
        self = this;
    }
    startPosition(e) {
        if (e.which === 1 && ctrlButton === true && self.pointArray.length != 7) {
            let pointXY = [e.offsetX, e.offsetY];
            self.pointArray.push(pointXY);
            // console.log(self.pointArray[self.countPoint]);
            self.countPoint++;
            console.log(`countPoint ${self.countPoint}`)
            if (self.pointArray.length > 1) {
                let firstX = self.pointArray[self.countPoint-2][0];
                let firstY = self.pointArray[self.countPoint-2][1];
                console.log(`firstX ${firstX}, firstY ${firstY}`)
                let nextX = self.pointArray[self.countPoint-1][0];
                let nextY = self.pointArray[self.countPoint-1][1];
                console.log(`nextX ${nextX}, nextY ${nextY}`)
                ctxDraft.beginPath();
                ctxDraft.moveTo(firstX, firstY);
                ctxDraft.lineTo(nextX, nextY);
                ctxDraft.stroke();
            }
            if (self.pointArray.length === 7) {
                ctxDraft.beginPath();
                ctxDraft.moveTo(self.pointArray[0][0], self.pointArray[0][1]);
                ctxDraft.lineTo(self.pointArray[6][0], self.pointArray[6][1]);
                ctxDraft.stroke();
                self.pointArray = [];
                self.countPoint = 0;
            }
        }
    }
}

function removeHandler(canvas) {
    canvas.off('mousedown');
    canvas.off('mousemove');
    canvas.off('mouseup');
}

function addHandler(canvas, paint) {
    canvas.on('mousedown', paint.startPosition);
    canvas.on('mousemove', paint.movePosition);
    canvas.on('mouseup', paint.endPosition);
}


// program start at here!!!
chnageWindowSize();
const canvasDraft = $('#canvas-draft');
const ctxDraft = canvasDraft[0].getContext('2d');
const canvasReal = $('#canvas-real');
const ctxReal = canvasReal[0].getContext('2d');
const globalStyle = new GlobalStyle();
let paint = undefined;
let ctrlButton = false;


paint = new DrawStar();
addHandler(canvasDraft, paint);

// binding functionlity to button
$('#freeStyle').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawLine();
    addHandler(canvasDraft, paint);
    console.log(`freestyle`);
    console.log(paint);
})

$('#rectangle').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawRectangle();
    addHandler(canvasDraft, paint);
    console.log(`rectangle`);
    console.log(paint);
})

$('#circle').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawCircle();
    addHandler(canvasDraft, paint);
    console.log(`circle`);
    console.log(paint);
})

$('#star').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawStar();
    addHandler(canvasDraft, paint);
    console.log(`star`);
    console.log(paint);
})

// binding keybroad event
document.addEventListener('keydown', function (e) {
    switch (e.which) {
        case 17:
            ctrlButton = true;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})
document.addEventListener('keyup', function (e) {
    switch (e.which) {
        case 17:
            ctrlButton = false;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})