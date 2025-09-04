function reduce(nums, fn, init) {
    var val = init;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        val = fn(val, num);
    }
    return val;
}
;
