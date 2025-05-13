import {division, subtract, multiply, sum} from "./math.js";

const OPERATIONS = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    division: '/',
};

const calculate = (a, b, operation) => {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
    }

    switch (operation) {
        case OPERATIONS.subtract:
            result = subtract(a, b);
            break;

    }

    switch (operation) {
        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;
    }

    switch (operation) {
        case OPERATIONS.division:
            result = division(a, b);
            break;

        default: break;
    }



    return result;
}

export default calculate;
