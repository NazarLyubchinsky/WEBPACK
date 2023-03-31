export class TextTemplate {
	format(template, ...values) {
		let output = template;
		for (let i = 1; i <= values.length; i++) {
			let placeholder = "%" + i;
			output = output.replace(placeholder, values[i - 1]);
		}
		console.log(output);
	}
}
