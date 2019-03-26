class GlobalStyle {
    constructor() {
        // Line Style
        this._lineThickness = 10;            // ctx.lineWidth = self.globalStyle.lineThickness   // the thickness of lines
        this._lineEndShape = "round";        // ctx.lineCap = self.globalSrtle.lineEndShape      // the shape of ending point on the line "round圓角" "butt短方角" "square長方角"
        this._lineJoinShape = "round";       // ctx.lineJoin = self.globalStyle.lineJoinShape    // the shape used to join to line "round圓角" "miter尖角" "bevel平角"
        
        // Text Style
        this._fontSize = 10;                 // ctx.font = `${self.globalStyle.fontSize}px ${self.globalStyle.fontStyle}`
        this._fontStyle = "sans-serif";      // ctx.font = `${self.globalStyle.fontSize}px ${self.globalStyle.fontStyle}`
        this._textAlignment = "start"        // ctx.textAlign  = self.globalStyle.textAlignment      // "start" "end" "left" "right" "center"
        this._textBaseline = "alphabetic"    // ctx.textBaseline  = self.globalStyle.textBaseline    // "top", "middle", "bottom", "hanging", "alphabetic", "ideographic"

        // Fill and Stroke Style
        this._fillColor = "#550088";         // ctx.fillStyle = self.globalStyle.fillColor     // shape inside color
        this._lineColor = "#558888";         // ctx.strokeStyle = self.globalSytle.lineColor   // border color

        // Shodows Style
        this._shadowColor = "#ffffff";       // ctx.shadowColor = self.globalSyle.shadowColor
        this._shadowBlurLevel = 0;           // ctx.shadowBlur = self.globalStyle.shadowBlurLevel
        this._shadowExpandX = 0;             // ctx.shadowOffsetX = self.globalStyle.shadowExpandX
        this._shadowExpandY = 0;             // ctx.shadowOffsetY = self.globalStyle.shadowExpand
    };
    
    // Text Style Getter and Setter
    get lineThickness() {
        return this._lineThickness;
    }
    set lineThickness(value) {
        this._lineThickness = value;
    }

    get lineEndShape() {
        return this._lineEndShape;
    }
    set lineEndShape(value) {
        this._lineEndShape = value;
    }

    get lineJoinShape() {
        return this._lineJoinShape;
    }
    set lineJoinShape(value) {
        this._lineJoinShape = value;
    }

    // Text Style Getter and Setter
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(value) {
        this._fontSize = value;
    }

    get fontStyle() {
        return this._fontStyle;
    }
    set fontStyle(value) {
        this._fontStyle = value;
    }

    get textAlignment() {
        return this._textAlignment;
    }
    set textAlignment(value) {
        this._textAlignment = value;
    }

    get textBaseline() {
        return this._textBaseline;
    }
    set textBaseline(value) {
        this._textBaseline = value;
    }

    // Fill and Stroke Style Getter and Setter
    get fillColor() {
        return this._fillColor;
    };
    set fillColor(value) {
        this._fillColor = value;
    };
    
    get lineColor() {
        return this._lineColor;
    };
    set lineColor(value) {
        this._lineColor = value;
    }

    // Shodows Style Getter and Setter
    get shadowColor() {
        return this._shadowColor;
    }
    set shadowColor(value) {
        this._shadowColor = value;
    }

    get shadowBlurLevel() {
        return this._shadowBlurLevel;
    }
    set shadowBlurLevel(value) {
        this._shadowBlurLevel = value;
    }

    get shadowExpandX() {
        return this.shadowExpandX;
    }
    set shadowExpandX(value) {
        this._shadowExpandX = value;
    }

    get shadowExpandY() {
        return this._shadowExpandY;
    }
    set shadowExpandY(value) {
        this._shadowExpandY = value;
    }
}