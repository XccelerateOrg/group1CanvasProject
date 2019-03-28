// active btn js

// clear draft
let clearDraft = function() {
    ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
}

// clear real
let clearReal = function() {
    ctxReal.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
}

// default color & order
let defaultColor = function() {
    // default color
    globalStyle.fillColor = "#fff";
    globalStyle.lineColor = "#000";
    $('#color-a').css('background-color', globalStyle.fillColor);
    $('#color-b').css('background-color', globalStyle.lineColor);

    // default order
    removeIndex();
    $('#color-b').addClass('default-index');
}

// hide textbox
let hideTextBox = function() {
    $('.textbox-wrapper').css("display", "none");
}

// show & hide key command
let keyCommand = function(theId) {
    theId.css("display", "block");
}

let removeCommand = function() {
    $('.guide-wrapper').css("display", "none");
}


// feature active, callback
function activeFeature(theId) {
    theId.addClass ('feature-active');
};

function removeFeature() {
    let theClass = $('.feature-box');
    theClass.removeClass ('feature-active');
};


// style active, callback
function activeStyle(theId) {
    theId.addClass ('style-active');
};

function removeStyle() {
    let theClass = $('.style-box');
    theClass.removeClass ('style-active');
};


//style - change current color
function addIndexToColor(theId){
    theId.addClass('add-index');
};

function removeIndex(){
    let colorA = $('#color-a');
    let colorB = $('#color-b');
    colorA.removeClass('add-index');
    colorB.removeClass('add-index');
};

function removeDefaultIndex(){
    let colorB = $('#color-b');
    colorB.removeClass('default-index');
};


// --------------

// feature btn,sec 1 - features
$('#f-1').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-1'));
    activeFeature($('#f-1'));
});

$('#f-2').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-2'));
    activeFeature($('#f-2'));
});

$('#f-3').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-3'));
    activeFeature($('#f-3'));
});

$('#f-4').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-4'));
    activeFeature($('#f-4'));
});

$('#f-5').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-5'));
    activeFeature($('#f-5'));
});

$('#f-6').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-6'));
    activeFeature($('#f-6'));
});

$('#f-7').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-7'));
    activeFeature($('#f-7'));
});

// textbox
$('#f-8').on('click', function () {
    removeStyle();
    removeFeature();
    removeCommand();
    keyCommand($('#g-8'));
    activeFeature($('#f-8'));
    if ($('#f-8').hasClass('feature-active')) {
        $('.textbox-wrapper').css("display", "block");
    }
});

$('#f-9').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-9'));
    activeFeature($('#f-9'));
});

// feature btn,sec 2 - icon
$('#f-10').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-10'));
    activeFeature($('#f-10'));
});

$('#f-11').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-11'));
    activeFeature($('#f-11'));
});

$('#f-12').on('click', function () {
    removeStyle();
    removeFeature();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-12'));
    activeFeature($('#f-12'));
});



////////////////////////////////
/// change current color a/b ///
////////////////////////////////

// current color picker - styles
$('#current-box').on('click', function () {
    if ($('#color-b').hasClass('default-index')) {
        removeDefaultIndex();
        $('#color-a').addClass('add-index');

    } else if ($('#color-a').hasClass('add-index')) {
        removeIndex();
        $('#color-b').addClass('add-index');

    } else if ($('#color-b').hasClass('add-index')) {
        removeIndex();
        $('#color-a').addClass('add-index');
    }
});


////////////////////////////////
///     color on click       ///
////////////////////////////////


// --------------


// style btn - styles
$('#s-1').on('click', function () {
    removeStyle();
    activeStyle($('#s-1'));
});

$('#s-2').on('click', function () {
    removeStyle();
    activeStyle($('#s-2'));
});

$('#s-3').on('click', function () {
    removeStyle();
    activeStyle($('#s-3'));
});

$('#s-4').on('click', function () {
    removeStyle();
    activeStyle($('#s-4'));
});

// back to default setting, removehandler on canvas draft
$('#default').on('click', function () {
    removeFeature();
    removeStyle();
    removeHandler(canvasDraft);
    clearDraft();
    clearReal();
    defaultColor();
    hideTextBox();
});


//////////////////////////
// save canvas as image //
//////////////////////////

//canvasReal
$('#save').on('click', function () {
    removeStyle();
    clearDraft();
    let canvas = document.getElementById("canvas-real");
    let data = canvas.toDataURL().replace("image/png", "image/octet-stream");
    window.location.href = data;
});

// $(document).ready(function(e) {
//     console.log(canvas.offsetX);
//     $('#x-axis').append(ctxReal.offsetX);
//     $('#y-axis').append(ctxReal.offsetY);
// })