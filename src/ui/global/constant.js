var click = "click";
var keydown = "keydown";
var keypress = "keypress";
var keyup = "keyup";
var change = "change";

var MODELFLAG_PICKED = 1 << 1;
var MODELFLAG_HIDDEN = 1 << 2;
var MODELFLAG_LOCKED = 1 << 3;
var MODELFLAG_FORCE_UPDATE = 1 << 4;

function ArrayPushIfNotHas(arr, element) {
    if (arr && element && arr.indexOf(element) == -1) {
        arr.push(element);
        return true;
    } else return false;
}