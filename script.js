//addition 
const add = (a, b) => a + b;

//subtraction 
const subtract = (a, b) => a - b;

//multiply
const multiply = (a, b) => a * b;

//divide
const divide = (a, b) => a / b;

function operate(operator, a, b){
    if (operator === "+"){
        return add(a,b);
    }
    else if (operator === "-"){
        return subtract(a,b);
    }
    else if (operator === "*"){
        return multiply(a,b);
    }
    else if (operator === "%"){
        return divide(a,b);
    } else return "not valid operator";
}

const btn = document.querySelectorAll('.numbers');
const output = document.querySelector('.output');
const content = document.createElement('div');
content.classList.add('content');

btn.forEach((button) => {
    button.addEventListener('click',(e) =>{
        content.textContent += e.target.textContent;
        output.appendChild(content);

    })
})
function display(){

}