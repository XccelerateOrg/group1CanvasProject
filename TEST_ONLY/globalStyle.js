class GlobalStyle {
    constructor() {
        // Line Style
        this.lineThickness = 10;            // ctx.lineWidth = self.globalStyle.lineThickness   // the thickness of lines
        this.lineEndShape = "round";        // ctx.lineCap = self.globalSrtle.lineEndShape      // the shape of ending point on the line "round圓角" "butt短方角" "square長方角"
        this.lineJoinShape = "round";       // ctx.lineJoin = self.globalStyle.lineJoinShape    // the shape used to join to line "round圓角" "miter尖角" "bevel平角"
        
        // Text Style
        this.fontSize = 10;                 // ctx.font = `${self.globalStyle.fontSize}px ${self.globalStyle.fontStyle}`
        this.fontStyle = "sans-serif";      // ctx.font = `${self.globalStyle.fontSize}px ${self.globalStyle.fontStyle}`
        this.textAlignment = "start"        // ctx.textAlign  = self.globalStyle.textAlignment      // "start" "end" "left" "right" "center"
        this.textBaseline = "alphabetic"    // ctx.textBaseline  = self.globalStyle.textBaseline    // "top", "middle", "bottom", "hanging", "alphabetic", "ideographic"

        // Fill and Stroke Style
        this._fillColor = "#550088";         // ctx.fillStyle = self.globalStyle.fillColor     // shape inside color
        this._lineColor = "#558888";         // ctx.strokeStyle = self.globalSytle.lineColor   // border color

        // Shodows
        this.shadowColor = "#ffffff";       // ctx.shadowColor = self.globalSyle.shadowColor
        this.shadowBlurLevel = 0;           // ctx.shadowBlur = self.globalStyle.shadowBlurLevel
        this.shadowExpandX = 0;             // ctx.shadowOffsetX = self.globalStyle.shadowExpandX
        this.shadowExpandY = 0;             // ctx.shadowOffsetY = self.globalStyle.shadowExpandY

    };

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
}