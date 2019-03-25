//mike

//window & canvas sizes adjustment
function chnageWindowSize() {
    let screenWidth = $(window).innerWidth;
    let screenHeight = $(window).innerHeight;

    let windowWidth = $(window).width() - 49;
    let windowHeight = $(window).height() - 90;

    //width
    $('.feature-wrapper').css('width', Math.floor(screenWidth * 0.1));
    $('.canvas').attr('width', Math.floor(windowWidth));
    $('.canvas').css('left', '45px');
    $('.style-wrapper').css('width', Math.floor(screenWidth));


    //height
    $('.feature-wrapper').css('height', Math.floor(windowHeight) - 20);
    $('.canvas').css('position', 'fixed');
    $('.canvas').css('top', '24px');
    $('.feature-wrapper').css('margin-top', '24px');

    $('.canvas').attr('height', Math.floor(windowHeight)-10);
    $('.style-wrapper').css('height', Math.floor(screenHeight));
};

$(document).ready(function () {
    chnageWindowSize();
    $(window).resize(chnageWindowSize);
});

