type F = (x: number) => number;

const functions = [x => x + 1, x => x * x, x => 2 * x];
let x = 4;

function compose(functions) {
    let reversedArr = [...functions].reverse()
    return function(x) {
        for (let fn of reversedArr) {
            x = fn(x)
        }
        return x
    }
};

console.log(compose(functions))