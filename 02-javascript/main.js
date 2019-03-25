//mike

//window & canvas sizes adjustment
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

