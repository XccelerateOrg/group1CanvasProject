class GlobalStyle {
    constructor() {
        this._lineThickness = 5; 
        this._lineEndShape = "round";
        this._lineJoinShape = "round";
        this._fontSize = 10;
        this._fontStyle = "sans-serif";
        this._textAlignment = "center"
        this._textBaseline = "alphabetic"
        this._fillColor = "#ffffff";
        this._lineColor = "#000000";
        this._opacity = 1;
        this._shadowColor = null;
        this._shadowBlurLevel = 0;
        this._shadowExpandX = 0;
        this._shadowExpandY = 0;
    };
    
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

    get opacity() {
        return this._opacity;
    }
    set opacity(value) {
        this._opacity = value;
    }

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
        return this._shadowExpandX;
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