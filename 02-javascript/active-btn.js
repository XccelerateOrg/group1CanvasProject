// active btn js

// feature active, callback
function activeFeature(theId) {
    theId.addClass ('feature-active');
};

function removeFeature() {
    let theClass = $('.feature-box');
    theClass.removeClass ('feature-active');
};

// --------------

// style active, callback
function activeStyle(theId) {
    theId.addClass ('style-active');
};

function removeStyle() {
    let theClass = $('.style-box');
    theClass.removeClass ('style-active');
};


// --------------

// feature btn,sec 1 - features
$('#f-1').on('click', function () {
    removeFeature();
    activeFeature($('#f-1'));
});

$('#f-2').on('click', function () {
    removeFeature();
    activeFeature($('#f-2'));
});

$('#f-3').on('click', function () {
    removeFeature();
    activeFeature($('#f-3'));
});

$('#f-4').on('click', function () {
    removeFeature();
    activeFeature($('#f-4'));
});

$('#f-5').on('click', function () {
    removeFeature();
    activeFeature($('#f-5'));
});

$('#f-6').on('click', function () {
    removeFeature();
    activeFeature($('#f-6'));
});

$('#f-7').on('click', function () {
    removeFeature();
    activeFeature($('#f-7'));
});

$('#f-8').on('click', function () {
    removeFeature();
    activeFeature($('#f-8'));
});

// feature btn,sec 2 - icon
$('#f-9').on('click', function () {
    removeFeature();
    activeFeature($('#f-9'));
});

$('#f-10').on('click', function () {
    removeFeature();
    activeFeature($('#f-10'));
});

$('#f-11').on('click', function () {
    removeFeature();
    activeFeature($('#f-11'));
});


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

$('#s-5').on('click', function () {
    removeStyle();
    activeStyle($('#s-5'));
});

$('#default').on('click', function () {
    removeFeature();
    removeStyle();
});