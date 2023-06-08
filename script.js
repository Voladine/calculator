const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const multiply = function(x, y) {
    return x * y
};

const divide = function(x, y) {
    return x / y
};

// const operate = function(x, y, operatorCall) {
//     return operatorCall(x, y)
// };

const numberKey = document.querySelectorAll(".numberKey")
const output = document.querySelector(".output")
const AC = document.querySelector(".AC")
const addBtn = document.querySelector(".addBtn")
const subtractBtn = document.querySelector(".subtractBtn")
const multiplyBtn = document.querySelector(".multiplyBtn")
const divideBtn = document.querySelector(".divideBtn")
const equalsBtn = document.querySelector(".equalsBtn")
let num1 = 0
let num2 = 0
let num3 = ""
let operator = ""

function operate() { 

    if (num3 != "") {
        num1 = num3
        num2 = output.textContent
    }
    if (operator === "add") {
        output.textContent = Number(num1) + Number(num2)
    }
    if (operator === "subtract") {
        output.textContent = Number(num1) - Number(num2)
    }
    if (operator === "multiply") {
        output.textContent = Number(num1) * Number(num2)
    }
    if (operator === "divide") {
        output.textContent = Number(num1) / Number(num2)
    }
    num3 = output.textContent
    console.log(output.textContent)
    // output.textContent = eval(output.textContent)
}

AC.addEventListener("click", function() {
    output.textContent = ""
    num1 = ""
    num2 = ""
    num3 = ""
    operator = ""
})

for (let i = 0; i < numberKey.length; i++) {
    numberKey[i].addEventListener("click", function() {
        output.textContent += numberKey[i].textContent
    })
}

addBtn.addEventListener("click", function() {
    num1 = output.textContent
    operator = "add"
    operate()
    output.textContent = ""
    // output.textContent += "+"
})

subtractBtn.addEventListener("click", function() {
    num1 = output.textContent
    operator = "subtract"
    operate()
    output.textContent = ""
})

multiplyBtn.addEventListener("click", function() {
    num1 = output.textContent
    operator = "multiply"
    operate()
    output.textContent = ""
})

divideBtn.addEventListener("click", function() {
    num1 = output.textContent
    operator = "divide"
    operate()
    output.textContent = ""
})

equalsBtn.addEventListener("click", operate)