function chnageElementSize() {
    let screenWidth = $(window).width();
    let screenHeight = $(window).height() - 10;

    $('#sideMenu').css('width', Math.floor(screenWidth * 0.15));
    $('#canvas').attr('width', Math.floor(screenWidth * 0.85));

    let sideMenuRowWidth = $('#sideMenu').width();
    console.log(sideMenuRowWidth)
    $('.sideMenuBtn').css('width', sideMenuRowWidth * 0.45);
    $('.sideMenuBtn').css('height', sideMenuRowWidth * 0.45);

    let sideMenuHeight = $('#sideMenu').outerHeight();
    $('#canvas').attr('height', sideMenuHeight);

    $('#sideMenu').css('height', Math.floor(screenHeight * 0.8));
    $('#canvas').attr('height', Math.floor(screenHeight * 0.8));

}

$(document).ready(function() {
    chnageElementSize();
    $(window).resize(chnageElementSize);
})