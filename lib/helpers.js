const brackets = (query) => {
	const regex = /\((.*?)\)/g;
	return regex.exec(query);
};

const parentheses = (inner) => {
	const operatorToFunction = {
		"+": (num1, num2) => +num1 + +num2,
		"-": (num1, num2) => +num1 - +num2,
		"*": (num1, num2) => +num1 * +num2,
		"/": (num1, num2) => +num1 / +num2,
	};

	const findOperator = (inner) => {
		return ([operator] = inner
			.split("")
			.filter((ch) => ["+", "-", "*", "/"].includes(ch)));
	};

	const operationStr = inner.replace(/[ ]/g, "");
	const operation = findOperator(operationStr);
	const [num1, num2] = operationStr.split(operation);
	return operatorToFunction[operator](num1, num2);
};

module.exports = {
	brackets,
	parentheses,
};
