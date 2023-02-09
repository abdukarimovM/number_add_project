let firstNumber = +prompt("Birinchi son: ", '')
let secondNumber = +prompt("Ikkinchi son: ", '')
let demo = document.getElementById("demo")

let text = `${firstNumber} + ${secondNumber}`
demo.innerHTML = text;

function addNumber(){
    demo.innerHTML = firstNumber += secondNumber;
}