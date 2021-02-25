var CreateDiv = (function () {
    var instance;
    var CreateDiv = function (html) {
        if (instance) {
            return instance;
        }
        this.html = html; this.init();
        return instance = this;
    };
    CreateDiv.prototype.init = function () {
        console.log("init")
    };
    return CreateDiv;
})();

var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');
alert(a === b); // true