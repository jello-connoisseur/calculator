//addition 
const add = (a, b) => a + b;

//subtraction 
const subtract = (a, b) => a - b;

//multiply
const multiply = (a, b) => a * b;

//divide
const divide = (a, b) => a / b;

function operate(a, b, operator){
    if (operator === "+"){
        return add(a,b);
    }
    else if (operator === "-"){
        return subtract(a,b);
    }
    else if (operator === "x"){
        return multiply(a,b);
    }
    else if (operator === "÷"){
        return divide(a,b);
    } else return "not valid operator";
}

const btn = document.querySelectorAll('.num');
const output = document.querySelector('.output');
let content = document.createElement('div');
content.classList.add('content');
let array = [];


btn.forEach((button) => {
    button.addEventListener('click',(e) =>{
        content.textContent += e.target.textContent;
        output.appendChild(content);
    });
})


const op = document.querySelectorAll('.operator');
let calculate = "";

//NEED TO FIX THIS! doesn't display correctly
op.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        //store the desired number in the array
        array.push(content.textContent);

        if (array.length >= 3 && (
            array[array.length-2] === '-' ||
            array[array.length-2] === '+' ||
            array[array.length-2] === 'x' ||
            array[array.length-2] === '÷')){
            let calculation = operate(array[array.length-3], array[array.length-1], array[array.length-2])
            array.push(calculation);
        }

        //store the operator
        array.push(e.target.textContent);
        output.appendChild(content);
        content.textContent = '';



        //clear window and reset number
        

        console.log(array);
        // console.log(operate(displayedContent, e.target.textContent, displayedContent));

    });
})



//equals
const equals = document.querySelector('.equals');

equals.addEventListener('click', (e) => {
    array.push(content.textContent);
    array.push(e.target.textContent);

    //push the result into the array

    array.push(operate(array[array.length-4], array[array.length-2], array[array.length-3]));
    content.textContent = '';
    content.textContent = array[array.length-1];

    console.log(array);
});


// btn.forEach((button) => {
//     button.addEventListener('click',(e) =>{
//         content.textContent += e.target.textContent;
//         displayedContent += e.target.textContent;
//         output.appendChild(content);
//     });
// })
