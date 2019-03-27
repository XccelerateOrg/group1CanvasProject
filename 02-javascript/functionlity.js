//////////////////////////////////
// definition of DrawLine class //
//////////////////////////////////
class DrawFreeStyleLine {
    constructor() {
        this.drawing = false;
        self = this;
    };
    startPosition(e) {
        console.log(e.which);
        this.drawing = true;
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.lineCap = globalStyle.lineEndShape;
        ctxReal.strokeStyle = globalStyle.lineColor;
        ctxReal.globalAlpha = globalStyle.opacity;
        ctxReal.beginPath();
        ctxReal.moveTo(e.offsetX, e.offsetY);
    }
    endPosition(e) {
        this.drawing = false;
        ctxReal.stroke();
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxReal.globalAlpha = globalStyle.opacity;
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
        this.drawing = false;
        this.startPoint = [];
        self = this;
    }
    startPosition(e) {
        this.drawing = true;
        ctxDraft.lineWidth = globalStyle.lineThickness
        ctxDraft.lineCap = globalStyle.lineEndShape
        ctxDraft.strokeStyle = globalStyle.lineColor
        ctxDraft.globalAlpha = globalStyle.opacity;
        ctxReal.lineWidth = globalStyle.lineThickness
        ctxReal.lineCap = globalStyle.lineEndShape
        ctxReal.strokeStyle = globalStyle.lineColor
        ctxReal.globalAlpha = globalStyle.opacity;
        self.startPoint[0] = e.offsetX;
        self.startPoint[1] = e.offsetY;
    }
    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.beginPath();
        ctxReal.moveTo(self.startPoint[0], self.startPoint[1]);
        ctxReal.lineTo(e.offsetX, e.offsetY);
        ctxReal.stroke();

    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            ctxDraft.beginPath();
            ctxDraft.moveTo(self.startPoint[0], self.startPoint[1]);
            ctxDraft.lineTo(e.offsetX, e.offsetY);
            ctxDraft.stroke();
        }
    }
}

////////////////////////////////
// definition DrawCurve class //
////////////////////////////////
class DrawCurve {
    constructor() {
        this.drawing = false;
        this.startPoint = [];
        this.endPoint = [];
        this.ctrlPoint = [];
        self = this;
    }
    startPosition(e) {
        if (self.startPoint.length === 0) {
            ctxDraft.lineWidth = globalStyle.lineThickness;
            ctxDraft.lineCap = globalStyle.lineEndShape;
            ctxDraft.strokeStyle = globalStyle.lineColor;
            ctxDraft.globalAlpha = globalStyle.opacity;
            ctxReal.lineWidth = globalStyle.lineThickness;
            ctxReal.lineCap = globalStyle.lineEndShape;
            ctxReal.strokeStyle = globalStyle.lineColor;
            ctxReal.globalAlpha = globalStyle.opacity;
            self.startPoint[0] = e.offsetX;
            self.startPoint[1] = e.offsetY;
            console.log(`startPointX ${self.startPoint[0]} startPointY ${self.startPoint[1]}`);
        }
        else if (self.endPoint.length === 0) {
            self.endPoint[0] = e.offsetX;
            self.endPoint[1] = e.offsetY;
            console.log(`endPointX ${self.endPoint[0]} endPointY ${self.endPoint[1]}`);
        }
        else {
            this.drawing = true;
        }
    }
    endPosition(e) {
        if (self.startPoint.length !== 0 && self.endPoint.length !== 0 && this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            ctxReal.beginPath();
            ctxReal.moveTo(self.startPoint[0], self.startPoint[1]);
            ctxReal.quadraticCurveTo(e.offsetX, e.offsetY, self.endPoint[0], self.endPoint[1]);
            ctxReal.stroke();
            self.startPoint = [];
            self.endPoint = [];
            self.ctrlPoint = [];
            this.drawing = false;
        }
    }
    movePosition(e) {
        if (self.startPoint.length !== 0 && self.endPoint.length !== 0) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            ctxDraft.beginPath();
            ctxDraft.moveTo(self.startPoint[0], self.startPoint[1]);
            ctxDraft.quadraticCurveTo(e.offsetX, e.offsetY, self.endPoint[0], self.endPoint[1]);
            ctxDraft.stroke();
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
        this.difference = [];
        self = this;
    };
    startPosition(e) {
        this.drawing = true;
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.fillStyle = globalStyle.fillColor;
        ctxReal.strokeStyle = globalStyle.lineColor;
        ctxReal.lineCap = globalStyle.lineEndShape;
        ctxReal.lineJoin = globalStyle.lineJoinShape;
        ctxReal.globalAlpha = globalStyle.opacity;
        ctxDraft.lineWidth = globalStyle.lineThickness;
        ctxDraft.fillStyle = globalStyle.fillColor;
        ctxDraft.strokeStyle = globalStyle.lineColor;
        ctxDraft.lineCap = globalStyle.lineEndShape;
        ctxDraft.lineJoin = globalStyle.lineJoinShape;
        ctxDraft.globalAlpha = globalStyle.opacity;
        self.startPoint[0] = e.offsetX;
        self.startPoint[1] = e.offsetY;
    }
    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.strokeRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
        ctxReal.fillRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            self.difference[0] = e.offsetX - self.startPoint[0];
            self.difference[1] = e.offsetY - self.startPoint[1];
            ctxDraft.strokeRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
            ctxDraft.fillRect(self.startPoint[0], self.startPoint[1], self.difference[0], self.difference[1]);
        }
    }
}

// definition of DrawCircle class
class DrawCircle {
    constructor() {
        this.drawing = false;
        this.firstPoint = [];
        this.sqX = 0;
        this.sqY = 0;

        self = this;    
    };
    startPosition(e) {
        this.drawing = true;
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.fillStyle = globalStyle.fillColor;
        ctxReal.strokeStyle = globalStyle.lineColor;
        ctxReal.lineCap = globalStyle.lineEndShape;
        ctxReal.lineJoin = globalStyle.lineJoinShape;
        ctxReal.globalAlpha = globalStyle.opacity;
        ctxDraft.lineWidth = globalStyle.lineThickness;
        ctxDraft.fillStyle = globalStyle.fillColor;
        ctxDraft.strokeStyle = globalStyle.lineColor;
        ctxDraft.lineCap = globalStyle.lineEndShape;
        ctxDraft.lineJoin = globalStyle.lineJoinShape;
        ctxDraft.globalAlpha = globalStyle.opacity;
        self.firstPoint[0] = e.offsetX;
        self.firstPoint[1] = e.offsetY;
    }
    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        this.sqX = Math.pow(e.offsetX - self.firstPoint[0], 2);
        this.sqY = Math.pow(e.offsetY - self.firstPoint[1], 2);
        let i = Math.sqrt(this.sqX + this.sqY);
        let x = (e.offsetX - self.firstPoint[0])/2+self.firstPoint[0];
        let y = (e.offsetY - self.firstPoint[1])/2+self.firstPoint[1];
        let radius = i/2;
        ctxReal.beginPath();
        ctxReal.arc(x, y, radius, 0, 2 * Math.PI);
        ctxReal.stroke();
        ctxReal.fill();
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            this.sqY = Math.pow(e.offsetY - self.firstPoint[1], 2);
            this.sqX = Math.pow(e.offsetX - self.firstPoint[0], 2);
            let i = Math.sqrt(this.sqX + this.sqY);
            let x = (e.offsetX - self.firstPoint[0])/2+self.firstPoint[0];
            let y = (e.offsetY - self.firstPoint[1])/2+self.firstPoint[1];
            let radius = i/2;
            ctxDraft.beginPath();
            ctxDraft.arc(x, y, radius, 0, 2 * Math.PI);
            ctxDraft.stroke();
            ctxDraft.fill();
        }
    }
}
//////////////////////////////////
// definition of DrawStar class //
//////////////////////////////////
class DrawStar {
    constructor() {
        this.drawing = false;
        this.topLeft = { x1: null, y1: null };
        this.btmRight = { x2: null, y2: null };
        this.widthX = null;
        this.heightY = null;
        this.point1 = [];
        this.point2 = [];
        this.point3 = [];
        this.point4 = [];
        this.point5 = [];
        this.point6 = [];
        this.point7 = [];
        this.point8 = [];
        this.point9 = [];
        this.point10 = [];
        self = this;

    }
    startPosition(e) {
        this.drawing = true;
        self.topLeft.x1 = e.offsetX;
        self.topLeft.y1 = e.offsetY;
        ctxDraft.strokeStyle = globalStyle.lineColor;
        ctxDraft.lineCap = globalStyle.lineEndShape;
        ctxDraft.lineJoin = globalStyle.lineJoinShape;
        ctxDraft.lineWidth = globalStyle.lineThickness;
        ctxDraft.fillStyle = globalStyle.fillColor;
        ctxReal.strokeStyle = globalStyle.lineColor;
        ctxReal.lineCap = globalStyle.lineEndShape;
        ctxReal.lineJoin = globalStyle.lineJoinShape
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.fillStyle = globalStyle.fillColor;

    }
    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.beginPath();
        ctxReal.moveTo(self.point1[0], self.point1[1]);
        ctxReal.lineTo(self.point2[0], self.point2[1]);
        ctxReal.lineTo(self.point3[0], self.point3[1]);
        ctxReal.lineTo(self.point4[0], self.point4[1]);
        ctxReal.lineTo(self.point5[0], self.point5[1]);
        ctxReal.lineTo(self.point6[0], self.point6[1]);
        ctxReal.lineTo(self.point7[0], self.point7[1]);
        ctxReal.lineTo(self.point8[0], self.point8[1]);
        ctxReal.lineTo(self.point9[0], self.point9[1]);
        ctxReal.lineTo(self.point10[0], self.point10[1]);
        ctxReal.closePath();
        ctxReal.stroke();
        ctxReal.fill();
        // ctxReal.stroke();
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            self.btmRight.x2 = e.offsetX;
            self.btmRight.y2 = e.offsetY;
            self.widthX = self.btmRight.x2 - self.topLeft.x1;
            self.heightY = self.btmRight.y2 - self.topLeft.y1
            self.point1[0] = self.topLeft.x1 + (self.widthX * (1 / 2));
            self.point1[1] = self.topLeft.y1;
            self.point2[0] = self.topLeft.x1 + (self.widthX * (1 / 3));
            self.point2[1] = self.topLeft.y1 + (self.heightY * (1 / 3));
            self.point3[0] = self.topLeft.x1;
            self.point3[1] = self.topLeft.y1 + (self.heightY * (1 / 3));
            self.point4[0] = self.topLeft.x1 + (self.widthX * (2 / 7));
            self.point4[1] = self.topLeft.y1 + (self.heightY * (2 / 3));
            self.point5[0] = self.topLeft.x1 + (self.widthX * (1 / 7));
            self.point5[1] = self.topLeft.y1 + self.heightY;
            self.point6[0] = self.topLeft.x1 + (self.widthX * (1 / 2));
            self.point6[1] = self.topLeft.y1 + (self.heightY * (4 / 5));
            self.point7[0] = self.topLeft.x1 + (self.widthX * (6 / 7));
            self.point7[1] = self.topLeft.y1 + self.heightY;
            self.point8[0] = self.topLeft.x1 + (self.widthX * (5 / 7));
            self.point8[1] = self.topLeft.y1 + (self.heightY * (2 / 3));
            self.point9[0] = self.topLeft.x1 + self.widthX;
            self.point9[1] = self.topLeft.y1 + (self.heightY * (1 / 3));
            self.point10[0] = self.topLeft.x1 + (self.widthX * (2 / 3));
            self.point10[1] = self.topLeft.y1 + (self.heightY * (1 / 3));
            ctxDraft.beginPath();
            ctxDraft.moveTo(self.point1[0], self.point1[1]);
            ctxDraft.lineTo(self.point2[0], self.point2[1]);
            ctxDraft.lineTo(self.point3[0], self.point3[1]);
            ctxDraft.lineTo(self.point4[0], self.point4[1]);
            ctxDraft.lineTo(self.point5[0], self.point5[1]);
            ctxDraft.lineTo(self.point6[0], self.point6[1]);
            ctxDraft.lineTo(self.point7[0], self.point7[1]);
            ctxDraft.lineTo(self.point8[0], self.point8[1]);
            ctxDraft.lineTo(self.point9[0], self.point9[1]);
            ctxDraft.lineTo(self.point10[0], self.point10[1]);
            ctxDraft.closePath();
            ctxDraft.stroke();
            ctxDraft.fill();
            ctxDraft.strokeRect(self.topLeft.x1, self.topLeft.y1, self.widthX, self.heightY);
        }
    }
}

/////////////////////////////////////
// definition of DrawPolygon class //
/////////////////////////////////////
class DrawPolygon {
    constructor() {
        this.drawing = false;
        this.pointArray = [];
        this.countPoint = 0;
        self = this;
    }
    startPosition(e) {
        ctxDraft.strokeStyle = globalStyle.lineColor;
        ctxDraft.lineCap = globalStyle.lineEndShape;
        ctxDraft.lineJoin = globalStyle.lineJoinShape;
        ctxDraft.lineWidth = globalStyle.lineThickness;
        ctxDraft.fillStyle = globalStyle.fillColor;
        ctxReal.strokeStyle = globalStyle.lineColor;
        ctxReal.lineCap = globalStyle.lineEndShape;
        ctxReal.lineJoin = globalStyle.lineJoinShape
        ctxReal.lineWidth = globalStyle.lineThickness;
        ctxReal.fillStyle = globalStyle.fillColor;
        if (e.which === 1 && altKey === true) {
            let pointXY = [e.offsetX, e.offsetY];
            self.pointArray.push(pointXY);
            self.countPoint++;
            console.log(`countPoint ${self.countPoint}`)
            if (self.pointArray.length > 1) {
                let firstX = self.pointArray[self.countPoint - 2][0];
                let firstY = self.pointArray[self.countPoint - 2][1];
                let nextX = self.pointArray[self.countPoint - 1][0];
                let nextY = self.pointArray[self.countPoint - 1][1];
                ctxReal.beginPath();
                ctxReal.moveTo(firstX, firstY);
                ctxReal.lineTo(nextX, nextY);
                ctxReal.stroke();
            }
            if (shiftKey === true) {
                ctxReal.beginPath();
                ctxReal.moveTo(self.pointArray[0][0], self.pointArray[0][1]);
                ctxReal.lineTo(self.pointArray[self.countPoint - 1][0], self.pointArray[self.countPoint - 1][1]);
                ctxReal.stroke();
                self.pointArray = [];
                self.countPoint = 0;
            }
        }
    }
}


// definition of DrawText class
class DrawText {
    constructor() {
        this.drawing = false;
        this.string = $('#text_cnv').val().toString();
        self = this;
    };
    startPosition(e) {
        this.drawing = true;
        // ctxDraft.shadowColor = globalStyle.shadowColor;
        // ctxDraft.shadowBlur = globalStyle.shadowBlurLevel;
        // ctxDraft.shadowOffsetX = globalStyle.shadowExpandX;
        // ctxDraft.shadowOffsetY = globalStyle.shadowExpandY;
        // ctxReal.shadowColor = globalSyle.shadowColor;
        // ctxReal.shadowBlur = globalStyle.shadowBlurLevel;
        // ctxReal.shadowOffsetX = globalStyle.shadowExpandX;
        // ctxReal.shadowOffsetY = globalStyle.shadowExpandY;
    }
    endPosition(e) {
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.beginPath();
        ctxReal.fillStyle = '#f00';
        ctxReal.font = 'italic bold 30px sans-serif';
        ctxReal.textBaseline = 'bottom';
        ctxReal.fillText( self.string ,  e.offsetX,  e.offsetY);
    }
    movePosition(e) {
        if (this.drawing === true) {
            ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
            ctxDraft.beginPath();
            ctxDraft.fillStyle = '#f00';
            ctxDraft.font = 'italic bold 30px sans-serif';
            ctxDraft.textBaseline = 'bottom';
            ctxDraft.fillText( self.string ,  e.offsetX,  e.offsetY);
        }
    }
}

// definition of Eraser class
class Eraser {
    constructor() {

    }
}


////////////////////////////////
// definition DrawImage class //
////////////////////////////////

class DrawingIconOne {
    constructor() {
        this.drawing = false;
        this.imgIcon = document.getElementById('emoji-1');
        self = this;
    };

    startPosition(e) {
        this.drawing = true;
        console.log(this.drawing);
    };

    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
    };

    movePosition(e) {
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        if (altKey === true && this.drawing === true) {
            ctxReal.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
        }
        ctxDraft.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
    };
};


class DrawingIconTwo {
    constructor() {
        this.drawing = false;
        this.imgIcon = document.getElementById('emoji-2');
        self = this;
    };

    startPosition(e) {
        this.drawing = true;
    };

    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
    };

    movePosition(e) {
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        if (altKey === true && this.drawing === true) {
            ctxReal.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
        }
        ctxDraft.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
    };
};


class DrawingIconThree {
    constructor() {
        this.drawing = false;
        this.imgIcon = document.getElementById('emoji-3');
        self = this;
    };

    startPosition(e) {
        this.drawing = true;
    };

    endPosition(e) {
        this.drawing = false;
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        ctxReal.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
    };

    movePosition(e) {
        ctxDraft.clearRect(0, 0, canvasDraft[0].width, canvasDraft[0].height);
        if (altKey === true && this.drawing === true) {
            ctxReal.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
        }
        ctxDraft.drawImage(self.imgIcon, e.offsetX - 15, e.offsetY - 20, 35, 35);
    };
};
