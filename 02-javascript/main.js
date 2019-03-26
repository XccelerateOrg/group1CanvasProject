function chnageWindowSize() {
    let screenWidth = $(window).innerWidth;
    let screenHeight = $(window).innerHeight;

    let windowWidth = $(window).width() - 92;
    let windowHeight = $(window).height() - 94;

    //width
    $('.feature-wrapper').css('width', Math.floor(screenWidth * 0.2));
    $('.canvas').attr('width', Math.floor(windowWidth));
    $('.canvas').css('left', '90px');
    $('.style-wrapper').css('width', Math.floor(screenWidth));


    //height
    $('.feature-wrapper').css('height', Math.floor(windowHeight) - 40);
    $('.canvas').attr('height', Math.floor(windowHeight));
    $('.style-wrapper').css('height', Math.floor(screenHeight));
};

$(document).ready(function () {
    chnageWindowSize();
    $(window).resize(chnageWindowSize);
});


// definition of DrawLine class
class DrawLine{
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


paint = new DrawCircle();
addHandler(canvasDraft, paint);

// binding functionlity to button
$('#freeStyle').click(function() {
    removeHandler(canvasDraft);
    paint = new DrawLine();
    addHandler(canvasDraft, paint);
    console.log(`freestyle`);
    console.log(paint);
})

$('#rectangle').click(function() {
    removeHandler(canvasDraft);
    paint = new DrawRectangle();
    addHandler(canvasDraft, paint);
    console.log(`rectangle`);
    console.log(paint);
})

$('#circle').click(function() {
    removeHandler(canvasDraft);
    paint = new DrawCircle();
    addHandler(canvasDraft, paint);
    console.log(`circle`);
    console.log(paint);
})

// binding keybroad event
document.addEventListener('keydown', function(e) {
    switch (e.which) {
        case 17:
            ctrlButton = true;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})
document.addEventListener('keyup', function(e) {
    switch (e.which) {
        case 17:
            ctrlButton = false;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})