type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const args = [5]
function argumentsLength(...args: JSONValue[]): number { 
    return args.length
};