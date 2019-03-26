//////////////////////////////////
// definition of DrawLine class //
//////////////////////////////////

class DrawFreeStyleLine {
    constructor() {
        this.drawing = false;
        self = this;
    };
    startPosition(e) {
        if (e.which === 1 && ctrlButton) {
            console.log(e.which);
            this.drawing = true;
            ctxReal.lineWidth = globalStyle.lineThickness;
            ctxReal.lineCap = globalStyle.lineEndShape;
            ctxReal.strokeStyle = globalStyle.lineColor;
            ctxReal.beginPath();
            ctxReal.moveTo(e.offsetX, e.offsetY);
        }
    }
    endPosition(e) {
        this.drawing = false;
        ctxReal.stroke();
    }
    movePosition(e) {
        if (this.drawing === true && ctrlButton === true) {
            ctxReal.lineTo(e.offsetX, e.offsetY);
            ctxReal.stroke();
        }
    }
}

//////////////////////////////////////
// definition DrawStrightLine class //
//////////////////////////////////////

class DrawStrightLine {
    constructor() {

    }
}

////////////////////////////////
// definition DrawCurve class //
////////////////////////////////

class DrawCurve {
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
}

///////////////////////////////////////
// definition of DrawRectangle class //
///////////////////////////////////////

class DrawRectangle {
    constructor() {
        this.drawing = false;
        this.startPoint = [];
        this.endPoint = [];
        this.difference = [];
        self = this;
    };
    startPosition(e) {
        this.drawing = true;
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.fillStyle = globalStyle.fillColor;
        ctxDraft.lineWidth = globalStyle.lineThickness;
        ctxDraft.fillStyle = globalStyle.fillColor;
        self.startPoint[0] = e.offsetX;
        self.startPoint[1] = e.offsetY;
    }
    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.fillRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            self.difference[0] = e.offsetX - self.startPoint[0];
            self.difference[1] = e.offsetY - self.startPoint[1];
            ctxDraft.fillRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
        }
    }
}

// definition of DrawCircle class
class DrawCircle {
    constructor() {
        this.drawing = false;
        this.firstPoint = [];
        self = this;
    };
    startPosition(e) {
        this.drawing = true;
        ctxDraft.fillStyle = globalStyle.fillColor;
        ctxDraft.beginPath();
        self.firstPoint[0] = e.offsetX;
        self.firstPoint[1] = e.offsetY;
    }
    endPosition(e) {
        let sqX = Math.pow(e.offsetX - self.firstPoint[0], 2);
        let sqY = Math.pow(e.offsetY - self.firstPoint[1], 2);
        let radius = Math.sqrt(sqX + sqY);
        console.log(radius);
        ctxDraft.arc(self.firstPoint[0], self.firstPoint[1], radius, 0, 2 * Math.PI);
        // ctx.stroke();
        ctxDraft.fill();
        this.drawing = false;
    }
    movePosition(e) {
        return;
    }
}
//////////////////////////////////
// definition of DrawStar class //
//////////////////////////////////

class DrawStar {
    constructor() {

    }
}

// definition of DrawPolygon class
class DrawPolygon {
    constructor() {
        this.drawing = false;
        this.pointArray = [];
        this.countPoint = 0;
        self = this;
    }
    startPosition(e) {
        if (e.which === 1 && ctrlButton === true && self.pointArray.length != 7) {
            let pointXY = [e.offsetX, e.offsetY];
            self.pointArray.push(pointXY);
            // console.log(self.pointArray[self.countPoint]);
            self.countPoint++;
            console.log(`countPoint ${self.countPoint}`)
            if (self.pointArray.length > 1) {
                let firstX = self.pointArray[self.countPoint-2][0];
                let firstY = self.pointArray[self.countPoint-2][1];
                console.log(`firstX ${firstX}, firstY ${firstY}`)
                let nextX = self.pointArray[self.countPoint-1][0];
                let nextY = self.pointArray[self.countPoint-1][1];
                console.log(`nextX ${nextX}, nextY ${nextY}`)
                ctxDraft.beginPath();
                ctxDraft.moveTo(firstX, firstY);
                ctxDraft.lineTo(nextX, nextY);
                ctxDraft.stroke();
            }
            if (self.pointArray.length === 7) {
                ctxDraft.beginPath();
                ctxDraft.moveTo(self.pointArray[0][0], self.pointArray[0][1]);
                ctxDraft.lineTo(self.pointArray[6][0], self.pointArray[6][1]);
                ctxDraft.stroke();
                self.pointArray = [];
                self.countPoint = 0;
            }
        }
    }
}

// definition of DrawText class
class DrawText {
    constructor() {
        this.globalStyle = new GlobalStyle();
        this.drawing = false;
        self = this; // for special reference to instance of DrawRectangle itself  
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
        let radius = i/2;
        let startpoint =[];
        startpoint.push(e.offsetX - self.firstPoint[0])/2
        startpoint.push(e.offsetY - self.firstPoint[1])/2
        console.log('array'+startpoint);
        // console.log(radius);
        ctx.arc(startpoint [0], startpoint [1], radius, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.fill();
        this.drawing = false;
    }
    // movePosition(e) {
    //     return;
    // }
}

////////////////////////////////
// definition of Eraser class //
////////////////////////////////

class Eraser {
    constructor() {

    }
}