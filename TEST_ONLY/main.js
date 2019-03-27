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
            if (e.which === 1 && ctrl) {
                console.log(e.which);
                this.drawing = true;
                ctx.lineWidth = self.globalStyle.lineThickness;
                ctx.lineCap = self.globalStyle.lineEndShape;
                ctx.strokeStyle = self.globalStyle.lineColor;
                ctx.beginPath();
                ctx.moveTo(e.offsetX, e.offsetY);
            }
        }
        endPosition(e) {
            this.drawing = false;
            ctx.stroke();
        }
        movePosition(e) {
            if (this.drawing === true && ctrl === true) {
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
    //---------Kenny-------------
    class DrawCircle {
        constructor() {
            this.globalStyle = new GlobalStyle();
            this.drawing = false;
            self = this; // for special reference to instance of DrawRectangle itself
            this.firstPoint = [];    
        };
        startPosition(e) {
            this.drawing = true;
            ctx.fillStyle = self.globalStyle.fillColor
            ctx.beginPath();
            self.firstPoint[0] = e.offsetX;
            self.firstPoint[1] = e.offsetY;
        }
        endPosition(e) {
            let sqX = Math.pow(e.offsetX - self.firstPoint[0], 2);
            let sqY = Math.pow(e.offsetY - self.firstPoint[1], 2);
            let i = Math.sqrt(sqX + sqY);
            let x = (e.offsetX - self.firstPoint[0])/2+self.firstPoint[0];
            let y = (e.offsetY - self.firstPoint[1])/2+self.firstPoint[1];
            console.log(i);
            let radius = i/2;
            console.log(radius);
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            // ctx.stroke();
            ctx.fill();
            this.drawing = false;
        }
        movePosition(e) {
            return;
        }
    }

    class DrawCurve{
        constructor() {
            this.globalStyle = new GlobalStyle();
            this.drawing = false;
            self = this;
            // this.curvePoint = [];
            this.currentPoint = [];
            this.count = 0;
        };
        controlPosition(e) {
            if (self.count < 2){
                // self.currentPoint [0] = e.offsetX;
                // self.currentPoint [1] = e.offsetY;
                // console.log('current'+ self.currentPoint)
                // self.curvePoint.push(self.currentPoint);
                // console.log('curve'+ self.curvePoint);
                self.currentPoint.push(e.offsetX);
                self.currentPoint.push(e.offsetY);
                console.log(self.currentPoint);
                self.count +=1;
            }else{
            // self.currentPoint [0] = e.offsetX;
            // self.currentPoint [1] = e.offsetY;
            // self.curvePoint.push(self.currentPoint);
            // console.log(self.curvePoint);
            self.currentPoint.push(e.offsetX);
            self.currentPoint.push(e.offsetY);
            console.log(self.currentPoint);
            this.drawing = true;
            ctx.lineWidth = self.globalStyle.lineThickness;
            ctx.lineCap = self.globalStyle.lineEndShape;
            ctx.strokeStyle = self.globalStyle.lineColor;
            ctx.beginPath();
            ctx.moveTo(self.currentPoint [0], self.currentPoint [1]);
            ctx.quadraticCurveTo(self.currentPoint [4], self.currentPoint [5], self.currentPoint [2], self.currentPoint [3]);
            ctx.stroke();
            self.currentPoint = [];
            // self.curvePoint =[];
            self.count = 0;
            }
        }
            
        // endPosition(e) {
        //     this.drawing = false;
        //     ctx.stroke();
        // }
        // movePosition(e) {
        //     if (this.drawing === true) {
        //         ctx.lineTo(e.offsetX, e.offsetY);
                
        //         ctx.stroke();
        //     }
        // }
    }

    class DrawText {
        constructor() {
            this.globalStyle = new GlobalStyle();
            this.drawing = false;
            this.string = $('#text_cnv').html($('input:text').val());
            self = this; // for special reference to instance of DrawRectangle itself  
        };
        startPosition(e) {
            this.drawing = true;
            ctx.beginPath();
            ctx.fillStyle = '#f00';
            ctx.font = 'italic bold 30px sans-serif';
            ctx.textBaseline = 'bottom';
            let res = self.string.toString();
            ctx.fillText( res ,  e.offsetX,  e.offsetY);
        }
        // endPosition(e) {
        //     let sqX = Math.pow(e.offsetX - self.firstPoint[0], 2);
        //     let sqY = Math.pow(e.offsetY - self.firstPoint[1], 2);
        //     let i = Math.sqrt(sqX + sqY);
        //     let radius = i/2;
        //     let startpoint =[];
        //     startpoint.push(e.offsetX - self.firstPoint[0])/2
        //     startpoint.push(e.offsetY - self.firstPoint[1])/2
        //     console.log('array'+startpoint);
        //     // console.log(radius);
        //     ctx.arc(startpoint [0], startpoint [1], radius, 0, 2 * Math.PI);
        //     // ctx.stroke();
        //     ctx.fill();
        //     this.drawing = false;
        // }
        // movePosition(e) {
        //     return;
        // }
    }
    //----------------------------
    let paint = new DrawLine();
    let ctrl = false;


    // add event handles
    canvas.addEventListener('mousedown', paint.startPosition);
    canvas.addEventListener('mousemove', paint.movePosition);
    canvas.addEventListener('mouseup', paint.endPosition);
    document.addEventListener('keydown', function(e) {
        if (e.which === 17) {
            ctrl = true;
            console.log(`ctrl = true`);
        }
    })
    document.addEventListener('keyup', function(e) {
        if (e.which === 17) {
            ctrl = false;
            console.log(`ctrl = false`);
        }
    })


    // binding functionilty to each button
    $('#freeStyle').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        canvas.removeEventListener('click', paint.controlPosition);
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
        canvas.removeEventListener('dbclick', paint.endPosition);
        canvas.removeEventListener('click', paint.controlPosition);
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
        canvas.removeEventListener('click', paint.controlPosition);
        paint = new DrawTriangle();
        canvas.addEventListener('mousedown', paint.startPosition);
        canvas.addEventListener('mousemove', paint.movePosition);
        canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });
    //---------Kenny-------------
    $('#circle').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        canvas.removeEventListener('click', paint.controlPosition);
        paint = new DrawCircle();
        canvas.addEventListener('mousedown', paint.startPosition);
        // canvas.addEventListener('mousemove', paint.movePosition);
        canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });

    $('#curve').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        canvas.removeEventListener('click', paint.controlPosition);
        paint = new DrawCurve();
        canvas.addEventListener('click', paint.controlPosition);
        // canvas.addEventListener('mousemove', paint.movePosition);
        // canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });
    $('#text').click(function () {
        canvas.removeEventListener('mousedown', paint.startPosition);
        canvas.removeEventListener('mousemove', paint.movePosition);
        canvas.removeEventListener('mouseup', paint.endPosition);
        canvas.removeEventListener('click', paint.controlPosition);
        paint = new DrawText();
        canvas.addEventListener('click', paint.startPosition);
        // canvas.addEventListener('mousemove', paint.movePosition);
        // canvas.addEventListener('mouseup', paint.endPosition);
        console.log(paint);
    });
    //----------------------------

    $('#select').click(function () {
        console.log(paint);
    });
})


