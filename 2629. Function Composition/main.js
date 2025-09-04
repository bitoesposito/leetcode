var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var functions = [function (x) { return x + 1; }, function (x) { return x * x; }, function (x) { return 2 * x; }];
var x = 4;
function compose(functions) {
    var reversedArr = __spreadArray([], functions, true).reverse();
    return function (x) {
        for (var _i = 0, reversedArr_1 = reversedArr; _i < reversedArr_1.length; _i++) {
            var fn = reversedArr_1[_i];
            x = fn(x);
        }
        return x;
    };
}
;
console.log(compose(functions));
