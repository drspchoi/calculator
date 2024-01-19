let value1=2
let value2=3
let operator="/"

function add(value1,value2) {
    return value1+value2
}

function substract(value1,value2) {
    return value1-value2
}

function multiply(value1,value2) {
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
        return multiply(value1,value2)
    }
    if (operator==="/") {
        return divide(value1,value2)
    }
}
function display() {
    const display=document.querySelectorAll('button')
    let input=""
    let inputArray=[]
    let input_number=""
    display.forEach((button) => {
        button.addEventListener('click', ()=> {
            const display=document.querySelector('.display')
            if (button.className==="number" || button.className==="operator") {
                const number=button.id
                input_number+=number
                //console.log(input_number.split(/([+\-*/])/).length)
                //console.log(input_number.split(/([+\-*/])/))
                console.log(input_number)
                display.textContent=`${input_number}`
            }
            
            if (button.className==="operator" || button.id==="enter") {
                let range=input_number.length
                for (let i=0; i < range; i++) {
                    if (input_number[i]!='+'){
                        input+=input_number[i]
                        console.log(input_number[i])
                        console.log(input)
                    }
                    else {
                        inputArray.push(input)
                        console.log(inputArray)
                        inputArray.push(input_number[i])
                        console.log(inputArray)
                        input=""
                    }
                } input_number=""
                console.log(input_number)
                
                //if (input_number!=="") {
                //    input.push(input_number.slice(0,input_number.length-1))
                }
                //input.push(button.id)
                //display.textContent=`${input.join(" ").toString()}`
        
            if (button.id ==="clear") {
                input_number="";
                display.textContent=''
            } 
            if (button.id==="enter") {
                const input=input_number.split(/([+\-*/])/)
                console.log(input.length)
                const output=operation(Number(input[0]),Number(input[2]),input[1])
                console.log(output)
                display.textContent=`${output}`
                input_number="";
                input_number+=output
                console.log(input)
            }

        })
    })
}

const result=operation(value1,value2,operator)
console.log(result)
display()
