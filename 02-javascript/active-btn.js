let clearDraft = function() {
    ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
}

let clearReal = function() {
    ctxReal.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
}

let defaultColor = function() {
    globalStyle.fillColor = "#fff";
    globalStyle.lineColor = "#000";
    $('#color-a').css('background-color', globalStyle.fillColor);
    $('#color-b').css('background-color', globalStyle.lineColor);
    removeIndex();
    $('#color-b').addClass('default-index');
    $('#colorPicker').val('#BEEDD5');
}

let hideTextBox = function() {
    $('.textbox-wrapper').css("display", "none");
}

let keyCommand = function(theId) {
    theId.css("display", "block");
}

let removeCommand = function() {
    $('.guide-wrapper').css("display", "none");
}

function activeFeature(theId) {
    theId.addClass ('feature-active');
};

function removeFeature() {
    let theClass = $('.feature-box');
    theClass.removeClass ('feature-active');
};

function activeStyle(theId) {
    theId.addClass ('style-active');
};

function removeStyle() {
    let theClass = $('.style-box');
    theClass.removeClass ('style-active');
};

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

$('#f-8').on('click', function () {
    removeStyle();
    removeFeature();
    removeCommand();
    keyCommand($('#g-8'));
    activeFeature($('#f-8'));
    if (colorLineOrShape === 1) {
        $('#current-box').trigger('click');
    }
    globalStyle.fillColor = '#000000';
    $('#color-a').css("background-color", globalStyle.fillColor);
    if ($('#f-8').hasClass('feature-active')) {
        $('.textbox-wrapper').css("display", "block");
        $('#text_cnv').keyup(function() {
            paint = new DrawText();
        })
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

$('#default').on('click', function () {
    removeFeature();
    removeStyle();
    removeHandler(canvasDraft);
    clearDraft();
    clearReal();
    defaultColor();
    hideTextBox();
    removeCommand();
    keyCommand($('#g-1'));
    activeFeature($('#f-1'));
    globalStyle = new GlobalStyle();
    paint = new DrawFreeStyleLine();
    addHandler(canvasDraft, paint);
    console.log(globalStyle);
    console.log(paint);
});

$('#save').on('click', function () {
    removeStyle();
    clearDraft();
    let canvas = document.getElementById("canvas-real");
    data = canvas.toDataURL('image/png').replace('image/png','image/octet-stream')
    window.location.href = data;
});