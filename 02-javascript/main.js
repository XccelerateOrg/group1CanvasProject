//window & canvas sizes adjustment
function chnageWindowSize() {
    let screenWidth = $(window).innerWidth;
    let screenHeight = $(window).innerHeight;

    let windowWidth = $(window).width() - 39;
    let windowHeight = $(window).height() - 72;

    //width
    $('.feature-wrapper').css('width', Math.floor(screenWidth * 0.1));
    $('.canvas').attr('width', Math.floor(windowWidth)-8);
    // console.log($('.canvas')[0].width);
    $('.canvas').css('left', '42px');
    $('.style-wrapper').css('width', Math.floor(screenWidth));


    //height
    $('.feature-wrapper').css('height', Math.floor(windowHeight) - 35);
    $('.canvas').css('position', 'fixed');
    $('.canvas').css('top', '26px');
    $('.feature-wrapper').css('margin-top', '24px');

    $('.canvas').attr('height', Math.floor(windowHeight)-25);
    $('.style-wrapper').css('height', Math.floor(screenHeight)-50);
};

$(document).ready(function () {
    chnageWindowSize();
    $(window).resize(chnageWindowSize);
});

// program start at here!!!
chnageWindowSize();
const canvasDraft = $('#canvas-draft');
const ctxDraft = canvasDraft[0].getContext('2d');
const canvasReal = $('#canvas-real');
const ctxReal = canvasReal[0].getContext('2d');
const globalStyle = new GlobalStyle();
let paint = undefined;
let ctrlKey = false;
let shiftKey = false;

paint = new DrawStar();
addHandler(canvasDraft, paint);