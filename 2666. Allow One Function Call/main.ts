type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

const fn = (a,b,c) => (a * b * c)
const calls = [[5,7,4],[2,3,6],[4,6,8]]

function once(fn: Function): OnceFn {
    let called = false
    return function(...args) {
        if(!called) {
            called = true
            return fn(...args)
        }
        return undefined
    };
}


// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called