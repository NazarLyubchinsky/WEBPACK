export class Calculator {
	calculate(expression) {
		let [operand1, operator, operand2] = expression.split(' ');

		switch (operator) {
			case '+':
				return Number(operand1) + Number(operand2);
			case '-':
				return Number(operand1) - Number(operand2);
			case '*':
				return Number(operand1) * Number(operand2);
			case '/':
				return Number(operand1) / Number(operand2);
			default:
				console.log('Невідома операція: ' + operator);
		}
	}
}
