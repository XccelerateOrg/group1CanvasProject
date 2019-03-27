// active btn js

// clear draft
let clearDraft = function() {
    ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
}

// clear real
let clearReal = function() {
    ctxReal.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
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

$('#f-12').on('click', function () {
    removeFeature();
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

// color onclick
// $('#picker-1').on('click', function () {
    
//     pick($('#picker-1'));
// });


// $('#picker-2').on('click', function (callback) {
    
//     callback($('#picker-2'));
// });

// $('#picker-3').on('click', function () {
    
//     pick($('#picker-3'));
// });

// $('#picker-4').on('click', function () {
    
//     pick($('#picker-4'));
// });

// $('#picker-5').on('click', function () {
    
//     pick($('#picker-5'));
// });

// $('#picker-6').on('click', function () {
    
//     pick($('#picker-6'));
// });

// $('#picker-7').on('click', function () {
    
//     pick($('#picker-7'));
// });

// $('#picker-8').on('click', function () {
    
//     pick($('#picker-8'));
// });

// // feature btn,sec 2 - icon
// $('#picker-9').on('click', function () {
    
//     pick($('#picker-9'));
// });

// $('#picker-10').on('click', function () {
    
//     pick($('#picker-10'));
// });

// $('#picker-11').on('click', function () {
    
//     pick($('#picker-11'));
// });




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

// back to default setting, removehandler on canvas draft
$('#default').on('click', function () {
    removeFeature();
    removeStyle();
    removeHandler(canvasDraft);
    clearDraft();
    clearReal();
});


//////////////////////////
// save canvas as image //
//////////////////////////

//canvasReal
$('#save').on('click', function () {
    removeStyle();
    let canvas = document.getElementById("canvas-real");
    let data = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = data;
});
