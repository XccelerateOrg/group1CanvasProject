// active btn js

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
function clickCurrentPicker(theId){
    theId.on('click', function(){
        $('.current-color').css({"z-index" : "0"});
        theId.css({"z-index" : "10"});
    });
}

// // pick this color
// function pickThisColor(theId){
//     theId.
// }


//style - change current color
// function changeCurrentColor(){
//     if ($('color-a').css({"z-index" : 1} == true)){
//         $('#color-a').css("background-color", pick);
//     }

//     // $('color-b').on('click' , function(){
//     //     $('color-b').addClass('higher-zindex');
//     // })
// };

// changeCurrentColor();

// // style - pick color, callback

// // function pickColor() {
// //     if ($('#color-a').css({"z-index" : 1} == true){
// //         $('#color-a').css("background-color", pick);
// //     }
// // }

// // style - color onclick, callback
// function pick (theId) {
//     theId.on('click' , function(){
//         theId.css("background-color");
//     })
// };



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

// current color picker - styles
$('#color-a').on('click', function () {
    clickCurrentPicker($('#color-a'));
});

$('#color-b').on('click', function () {
    clickCurrentPicker($('#color-b'));
});

// --------------

// color onclick
$('#picker-1').on('click', function () {
    
    pick($('#picker-1'));
});

$('#picker-2').on('click', function () {
    
    pick($('#picker-2'));
});

$('#picker-3').on('click', function () {
    
    pick($('#picker-3'));
});

$('#picker-4').on('click', function () {
    
    pick($('#picker-4'));
});

$('#picker-5').on('click', function () {
    
    pick($('#picker-5'));
});

$('#picker-6').on('click', function () {
    
    pick($('#picker-6'));
});

$('#picker-7').on('click', function () {
    
    pick($('#picker-7'));
});

$('#picker-8').on('click', function () {
    
    pick($('#picker-8'));
});

// feature btn,sec 2 - icon
$('#picker-9').on('click', function () {
    
    pick($('#picker-9'));
});

$('#picker-10').on('click', function () {
    
    pick($('#picker-10'));
});

$('#picker-11').on('click', function () {
    
    pick($('#picker-11'));
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

// back to default setting
$('#default').on('click', function () {
    removeFeature();
    removeStyle();
});