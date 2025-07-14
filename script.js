let num1 = "";
let num2 = "";
let result = "";
let input = "";
let operator = "";
let insertion = "";
let total = 0;
let decimal = false;
let decimal2 = false;
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const value = document.getElementById("input")
const span = document.querySelector("span")
buttons.forEach(button => {
    button.addEventListener("click",(event)=>{
        input = event.target.id
        if(input != "+" && input != "-" && input != "/" 
            && input != "X" && input != "=" && input != "clear" && input != "back"){
                if(operator ===""){
                    if(total !=0){
                        num1 = "";
                        total = 0;
                        span.textContent=num1
                    }
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
        else if((input === "+" || input === "-" || input === "/" 
                || input === "X") && num1 != ""){
                operator = input;
                span.textContent = num1 +" "+ operator         
                }
        else if(input === "clear"){
            num1 = "";
            num2 = "";
            result = "";
            input = "";
            operator = "";
            insertion = "";
            span.textContent = ""
            decimal = false;
            decimal2 = false;
            value.textContent = 0
        }
        else if(input === "back"){
            if(num1 !="" && num2 === ""&& total ===0 && operator === ""){
                num1 = num1.slice(0,-1)
                decimal = num1.includes(".")
                value.textContent = num1
            }
            else if(num1 != "" && num2 !=""&& operator!=""){
                num2 = num2.slice(0,-1);
                decimal2 = num2.includes(".")
                value.textContent = num2
            }
        }
        else if(input === "=" && operator!= "" && num1 != "" && num2 != ""){
            span.textContent = num1 +" "+ operator + " "+ num2+" " + input;
            let number1 = parseFloat(num1)
            let number2 = parseFloat(num2)
            total = operate(operator, number1, number2)
            result = total.toString()
            if(result.length >10){
                total = Number(total).toExponential(3)
            }
            value.textContent = total
            if(total!=0){
            num1 = total.toString()}
            else{num1 = ""}
            num2 = "";
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
        case "+": return add(num1, num2)
        case "-": return subtract(num1, num2)
        case "/": return divide(num1, num2)
        case "X": return multiply(num1, num2)
        default: return null
    }

}