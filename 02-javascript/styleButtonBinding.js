// change set line color or shape color
$('#current-box').click(function() {
    if (colorLineOrShape !== 1) {
        colorLineOrShape = 1;
    }
    else {
        colorLineOrShape = 2;
    }
    console.log(`colorLineOrShape ${colorLineOrShape}`);
})

// seting globalStyle.lineColor
// seting globalStyle.fillColor
$('#picker-1').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-2').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-3').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-4').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-5').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-6').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-7').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-8').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-9').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#picker-10').click(function() {
    if(colorLineOrShape === 1) {
        globalStyle.lineColor = $(this).css("background-color");
    }
    else if (colorLineOrShape === 2) {
        globalStyle.fillColor = $(this).css("background-color");
    }
    else {
        console.log(`colorLineOrShape: ${colorLineOrShape}`);
    }
})

$('#lineThickness').click(function() {
    globalStyle.lineThickness += 5;
    if (globalStyle.lineThickness > 25) {
        globalStyle.lineThickness = 5;
    }
    console.log(`lineThickness ${globalStyle.lineThickness}`);
})

$('#opacity').click(function() {
    globalStyle.opacity = globalStyle.opacity - 0.2;
    if (globalStyle.opacity < 0.1) {
        globalStyle.opacity = 1;
    }
    console.log(`opacity ${globalStyle.opacity}`);
})

$('#fontSize').click(function() {
    globalStyle.fontSize += 5;
    if (globalStyle.fontSize > 25) {
        globalStyle.fontSize = 5;
    }
    console.log(`fontSize ${globalStyle.fontSize}`);
})

$('#alignment').click(function() {
    if (globalStyle.textAlignment === 'left') {
        globalStyle.textAlignment = "center";
        console.log(`alignment ${globalStyle.textAlignment}`);
    }
    else if (globalStyle.textAlignment === 'center') {
        globalStyle.textAlignment = "right";
        console.log(`alignment ${globalStyle.textAlignment}`);
    }
    else {
        globalStyle._textAlignment = "left";
        console.log(`alignment ${globalStyle.textAlignment}`);
    }
})