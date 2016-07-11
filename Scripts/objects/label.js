var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var label = (function (_super) {
        __extends(label, _super);
        function label(labelString, fontSize, fontFamily, fontColour, x, y, isCentered) {
            _super.call(this, labelString, (fontSize + " " + fontFamily), fontColour);
            this.labelString = labelString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColour = fontColour;
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            // assign label coordinates
            this.x = x;
            this.y = y;
        }
        return label;
    }(createjs.Text));
    objects.label = label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map