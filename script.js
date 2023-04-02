var addition = document.getElementById("add");
var subtraction = document.getElementById("subtract");
var multiplication = document.getElementById("multiply");
var division = document.getElementById("divide");
var modulus = document.getElementById("modulus");
var resultEl = document.getElementById("result");

function clearResult() {
	resultEl.innerHTML = "Results will be displayed here.";
}

function displayResult(operator, result) {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);

	switch(operator) {
		case '+':
			resultEl.innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '-':
			resultEl.innerHTML = "The difference between " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '*':
			resultEl.innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '/':
			resultEl.innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '%':
			resultEl.innerHTML = "The remainder of " + num1 + " divided by " + num2 + " is " + result + ".";
			break;
		default:
			resultEl.innerHTML = "Results will be displayed here.";
	}
}

addition.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 + num2;
	clearResult();
	displayResult('+', result);
});

subtraction.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 - num2;
	clearResult();
	displayResult('-', result);
});

multiplication.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 * num2;
	clearResult();
	displayResult('*', result);
});

division.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 / num2;
	clearResult();
	displayResult('/', result);
});

modulus.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 % num2;
	clearResult();
	displayResult('%', result);
});