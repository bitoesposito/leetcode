var fn = function (a, b, c) { return (a * b * c); };
var calls = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];
function once(fn) {
    var called = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!called) {
            called = true;
            return fn.apply(void 0, args);
        }
        return undefined;
    };
}
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
