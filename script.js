let num1 = "";
let num2 = "";
let result = 0;
let input = "";
let operator = "";
console.log("hi")
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",(event)=>{
        input = event.target.id
        if(input != "add" && input != "subtract" && input != "divide" 
            && input != "multiply" && input != "Enter" && input != "clear" ){
                if(operator ===""){
                num1 = num1 + input
                console.log(num1)
                }
                else{
                num2 = num2 + input
                console.log(num2)
                }
            }
        else if((input === "add" || input === "subtract" || input === "divide" 
                || input === "multiply") && num1 != ""){
                operator = input;         
                }
        else if(input === "clear"){
            num1 = ""
            num2 = ""
            operator = ""
            result = ""
            input = ""
        }
        else if(input === "Enter" && operator!= "" && num1 != "" && num2 != ""){
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
            let total = operate(operator, num1, num2)
            console.log(total)
        }      
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
    switch(func){
        case "add": return add(num1, num2)
        case "subtract": return subtract(num1, num2)
        case "divide": return divide(num1, num2)
        case "multiply": return multiply(num1, num2)
        default: return null
    }

}