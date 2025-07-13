let num1 = 0;
let num2 = 0;
let result = 0;
let input = "";
let num = 0;
let input2 = "";
const container = document.querySelector("container");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",(event)=>{
        while(num1 === 0 ){
        num1 = event.target.id
            if(num1 === "add" || num1 === "subtract" || num1 === "divide" 
                || num1 === "multiply" || num1 === "Enter" || num1 === "decimal" || num1 === "clear"){
                    num1 = 0;
                } 
            else{
                num1 = parseInt(num1)
            }}
        input = event.target.id
        while(input != "add" || input != "subtract" || input != "divide" 
                || input != "multiply" || input != "decimal" || input != "clear"){
                num1 = num1 + parseInt(event.target.id)            
                }
        while(num2 === 0 ){
            num2 = event.target.id
            if(num2 === "add" || num2 === "subtract" || num2 === "divide" 
                || num2 === "multiply" || num2 === "Enter" || num2 === "decimal" || num2 === "clear"){
                    num2 = 0;
                } 
            else{
                num2 = parseInt(num2)
            }}
        while(input2 != "Enter"){
            num2 = event.target.id
            num2 = num2 + parseInt(num2)
            input2 = event.target.id
        }
        console.log(num1)
        console.log(num2)
        let total = operate(input, num1, num2)
        console.log(total)
    })
})

function add(num1, num2){
    return num1 + num2;
}
    
function subtract(num1,num2){
    return num1 - num2
}

function divide(num1,num2){
    return num1/num2
}

function multiply(num1,num2){
    return num1 * num2
}

function operate(func,num1,num2){
    return func(num1,num2)
}