////////////////////////////
// binding keybroad event //
////////////////////////////

document.addEventListener('keydown', function (e) {
    switch (e.which) {
        case 16:
            shiftKey = true;
            console.log(`shift = true`);
            break;
        case 17:
            ctrlKey = true;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})
document.addEventListener('keyup', function (e) {
    switch (e.which) {
        case 16:
            shiftKey = false;
            console.log(`shift = false`);
            break;
        case 17:
            ctrlKey = false;
            console.log(`ctrl = true`);
            break;
        default:
            console.log(`default`);
    }
})

///////////////////////////////////
// binding User Interface Button //
///////////////////////////////////

function removeHandler(canvas) {
    canvas.off('mousedown');
    canvas.off('mousemove');
    canvas.off('mouseup');
}

function addHandler(canvas, paint) {
    canvas.on('mousedown', paint.startPosition);
    canvas.on('mousemove', paint.movePosition);
    canvas.on('mouseup', paint.endPosition);
}

////////////////////////////////////
// binding functionlity to button //
////////////////////////////////////

$('#freeStyle').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawFreeStyleLine();
    addHandler(canvasDraft, paint);
    console.log(`freeStyle`);
    console.log(paint);
})

$('#straightLine').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawStrightLine();
    addHandler(canvasDraft, paint);
    console.log(`straightLine`);
    console.log(paint);
})

$('#curve').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawCurve();
    addHandler(canvasDraft, paint);
    console.log(`curve`);
    console.log(paint);
})

$('#rectangle').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawRectangle();
    addHandler(canvasDraft, paint);
    console.log(`rectangle`);
    console.log(paint);
})

$('#circle').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawCircle();
    addHandler(canvasDraft, paint);
    console.log(`circle`);
    console.log(paint);
})

$('#star').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawStar();
    addHandler(canvasDraft, paint);
    console.log(`star`);
    console.log(paint);
})

$('#polygon').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawPolygon();
    addHandler(canvasDraft, paint);
    console.log(`polygon`);
    console.log(paint);
})

$('#textBox').click(function () {
    removeHandler(canvasDraft);
    paint = new DrawText();
    addHandler(canvasDraft, paint);
    console.log(`polygon`);
    console.log(paint);
})

$('#eraser').click(function () {
    removeHandler(canvasDraft);
    paint = new Eraser();
    addHandler(canvasDraft, paint);
    console.log(`eraser`);
    console.log(paint);
})