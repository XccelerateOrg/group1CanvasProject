function chnageElementSize() {
    let screenWidth = $(window).width();
    let screenHeight = $(window).height() - 10;

    // $('#container').css('height', screenHeight * 0.8);
    // $('#bottomMenu').css('height', screenHeight * 0.2);

    console.log(`screenWidth ${screenWidth}`);
    console.log(`screenHeight ${screenHeight}`);

    $('#sideMenu').css('width', Math.floor(screenWidth * 0.13));
    $('#canvas').attr('width', Math.floor(screenWidth * 0.87));

    let sideMenuHeight = $('#sideMenu').outerHeight();
    console.log(`sideMenuHeight ${sideMenuHeight}`)
    $('#canvas').attr('height', sideMenuHeight);

    $('#sideMenu').css('height', Math.floor(screenHeight * 0.8));
    $('#canvas').attr('height', Math.floor(screenHeight * 0.8));

}

$(document).ready(function() {
    chnageElementSize();
    $(window).resize(chnageElementSize);
})