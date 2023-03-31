export class  numberStringsr {
	constructor() {
		this.result = '';
	}

	joinStrings(...strings) {
		for (let str of strings) {
			this.result += str;
		}

		return this.result;
	}
}
