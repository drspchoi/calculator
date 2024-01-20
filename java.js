//let value1=''
//let value2=''
//let operator=''

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
    const buttons=document.querySelectorAll('button')
    let input=[]
    let value1=""
    let value2=""
    let operator=""
    let operator2=""
    buttons.forEach((button) => {
        button.addEventListener('click', ()=> {
            const display=document.querySelector('.display')
            console.log(button)

            if (value2 && operator && button.className==="operator") {
                const oper2=button.textContent
                operator2+=oper2
        
            }

            if (value1 && operator && button.id!=="enter" && button.className!="operator") {
                const number2=button.textContent
                value2+=number2

            }
            if (value2==false && button.className==="number") {
                const number=button.textContent
                value1+=number
                
            }
            if (button.className==="operator" && operator==false) {
                const oper=button.textContent
                operator+=oper
                
            }
        
            display.textContent=`${value1}${operator}${value2}`
            

            if (button.id ==="clear") {
                value1="";
                value2="";
                operator="";
                operator2=""
                display.textContent=''
            } 
            
            if (value2 && operator2) {

                const output=operation(Number(value1),Number(value2),operator)
                value1=output;
                value2=""
                operator=operator2
            }

            if (button.id==="enter") {

                const output=operation(Number(value1),Number(value2),operator)
                display.textContent=`${output}`
                value1=output;
                value2=""
                operator=""
               
            }

        })
    })
}

//const result=operation(value1,value2,operator)
//console.log(result)
display()