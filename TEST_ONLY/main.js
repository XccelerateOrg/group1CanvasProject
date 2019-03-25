$(document).ready(function () {
    const canvas = $('#canvas')[0];
    const ctx = canvas.getContext('2d');

    // Resizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;

    class DrawLine{
        constructor() {
            this.globalStyle = new GlobalStyle();
            this.drawing = false;
            self = this;
        };
        startPosition(e) {
            this.drawing = true;
            ctx.lineWidth = self.globalStyle.lineThickness;
            ctx.lineCap = self.globalStyle.lineEndShape;
            ctx.strokeStyle = self.globalStyle.lineColor;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
        endPosition(e) {
            this.drawing = false;
            ctx.stroke();
        }
        movePosition(e) {
            if (this.drawing === true) {
                ctx.lineTo(e.offsetX, e.offsetY);
                
                ctx.stroke();
            }
        }
    }

    class DrawRectangle {
        constructor() {
            this.globalStyle = new GlobalStyle();
            this.drawing = false;
            this.firstPoint = [];
            this.difference = [];
            self = this;
        };
        startPosition(e) {
            this.drawing = true;
            ctx.lineWidth = 10;
            ctx.fillStyle = self.globalStyle.fillColor;
            self.firstPoint[0] = e.offsetX;
            self.firstPoint[1] = e.offsetY;
        }
        endPosition(e) {
            this.drawing = false;
            self.difference[0] = e.offsetX - self.firstPoint[0];
            self.difference[1] = e.offsetY - self.firstPoint[1];
            ctx.fillRect(self.firstPoint[0], self.firstPoint[1], self.difference[0], self.difference[1]);
        }
        movePosition(e) {
            return;
        }
    }

    class DrawTriangle {
        constructor() {
            this.drawing = false;
        };
        startPosition(e) {
            this.drawing = true;
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
        endPosition(e) {
            this.drawing = false;
        }
        movePosition(e) {
            if (this.drawing === true) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
            }
        }
    }

    let paint = new DrawLine();

    // add event handles
    canvas.addEventListener('mousedown', paint.startPosition);
    canvas.addEventListener('mousemove', paint.movePosition);
    canvas.addEventListener('mouseup', paint.endPosition);

    // binding functionilty to each button
    $('#freeStyle').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        paint = new DrawLine();
        canvas.addEventListener('mousedown', paint.startPosition);
        canvas.addEventListener('mousemove', paint.movePosition);
        canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });

    $('#rectangle').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        paint = new DrawRectangle();
        canvas.addEventListener('mousedown', paint.startPosition);
        canvas.addEventListener('mousemove', paint.movePosition);
        canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });

    $('#triangle').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        paint = new DrawTriangle();
        canvas.addEventListener('mousedown', paint.startPosition);
        canvas.addEventListener('mousemove', paint.movePosition);
        canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });

    $('#select').click(function () {
        console.log(paint);
    });
})


