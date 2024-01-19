let value1=2
let value2=3
let operator="/"

function add(value1,value2) {
    return value1+value2
}

function substract(value1,value2) {
    return value1-value2
}

function mutiply(value1,value2) {
    return value1*value2
}
function divide(value1,value2) {
    return value1/value2
}

function operation (value1, value2, operator) {
    if (operator==="+") {
        return add(value1,value2)
    }
    if (operator==="-") {
        return substract(value1,value2)
    }
    if (operator==="*") {
        return multiply(vaule1,value2)
    }
    if (operator==="/") {
        return divide(value1,value2)
    }
}

const result=operation(value1,value2,operator)
console.log(result)
