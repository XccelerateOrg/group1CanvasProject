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
const canvasDraft = $('#canvas-draft')[0];
const ctxDraft = canvasDraft.getContext('2d');
const canvasReal = $('#canvas-real')[0];
const ctxReal = canvasReal.getContext('2d');
let paint = undefined;
let ctrl = false;


class DrawLine{
    constructor() {
        this.globalStyle = new GlobalStyle();
        this.drawing = false;
        self = this;
    };
    startPosition(e) {
        if (e.which === 1 && ctrl) {
            console.log(e.which);
            this.drawing = true;
            ctxReal.lineWidth = self.globalStyle.lineThickness;
            ctxReal.lineCap = self.globalStyle.lineEndShape;
            ctxReal.strokeStyle = self.globalStyle.lineColor;
            ctxReal.beginPath();
            ctxReal.moveTo(e.offsetX, e.offsetY);
        }
    }
    endPosition(e) {
        this.drawing = false;
        ctxReal.stroke();
    }
    movePosition(e) {
        if (this.drawing === true && ctrl === true) {
            ctxReal.lineTo(e.offsetX, e.offsetY);           
            ctxReal.stroke();
        }
    }
}


paint = new DrawLine();
console.log(paint);
canvasDraft.addEventListener('mousedown', paint.startPosition);
canvasDraft.addEventListener('mousemove', paint.movePosition);
canvasDraft.addEventListener('mouseup', paint.endPosition);
document.addEventListener('keydown', function(e) {
    switch (e.which) {
        case 17:
            ctrl = true;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})
document.addEventListener('keyup', function(e) {
    switch (e.which) {
        case 17:
            ctrl = false;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})