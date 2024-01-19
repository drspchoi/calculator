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
function display() {
    const display=document.querySelectorAll('button')
    const input=[]
    display.forEach((button) => {
        button.addEventListener('click', ()=> {
            document.querySelector('.display').textContent=`${button.id}`
            input.push(button.id)
            console.log(input)
            if (input.length === 3) {
                const output=operation(Number(input[0]),Number(input[2]),input[1])
                console.log(output)
                document.querySelector('.display').textContent=`${output}`
                input.length=0;
                input.push(output)
                console.log(input)
            } 
        })
    })
}

const result=operation(value1,value2,operator)
console.log(result)
display()
