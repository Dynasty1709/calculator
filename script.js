let num1 = "";
let num2 = "";
let result = "";
let input = "";
let operator = "";
console.log("hi")
let decimal = false;
let decimal2 = false;
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const value = document.getElementById("input")

buttons.forEach(button => {
    button.addEventListener("click",(event)=>{
        input = event.target.id
        if(input != "add" && input != "subtract" && input != "divide" 
            && input != "multiply" && input != "Enter" && input != "clear" ){
                if(operator ===""){
                    if(input === "."){
                    for(let i =0; i<num1.length;i++){
                        if(num1[i] === "."){
                            decimal= true;
                            break;
                        }
                    }
                    if(decimal === false){
                        if(num1.length < 14){
                            num1 = num1 + input}
                        else{
                            alert("There are too many digits. Please only type in a number less than 14 digits")
                        }
                        }
                    }
                    else{
                        if(num1.length < 14){
                            num1 = num1 + input}
                        else{
                            alert("There are too many digits. Please only type in a number less than 14 digits")
                        }
                    }
                value.textContent = num1
                }
                else{
                    if(input === "."){
                    for(let i =0; i<num2.length;i++){
                        if(num2[i] === "."){
                            decimal2= true;
                            break;
                        }
                    }
                    if(decimal2 === false){
                        if(num2.length < 14){
                            num2 = num2 + input
                            value.textContent = num2}
                        else{
                            alert("There are too many digits. Please only type in a number less than 14 digits")
                        }
                        
                    }
                }
                else{
                    if(num2.length<14){
                        num2 = num2 + input;
                        value.textContent = num2;
                    }
                else{
                    alert("There are too many digits. Please only type in a number less than 14 digits")
                }}         
            }}
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
            decimal = false;
            decimal2 = false;
            value.textContent = 0
        }
        else if(input === "Enter" && operator!= "" && num1 != "" && num2 != ""){
            let number1 = parseFloat(num1)
            let number2 = parseFloat(num2)
            let total = operate(operator, number1, number2)
            result = total.toString()
            if(result.length >10){
                total = parseInt(total).toExponential(3)
            }
            value.textContent = total
            if(total!=0){
            num1 = total.toString()}
            else{num1 = ""}
            num2 = "";
            total = 0;
            decimal = num1.includes(".");
            decimal2 = false;
            operator = ""
            input = ""
            result = ""
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
    if(num2 === 0){
        alert("You cannot divide by 0!")
        return 0
    }
    else{
    return num1/num2
    }
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