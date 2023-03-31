export class Separators {
	constructor() {
		this.parts = [];
	}

	split(string, separator) {
		this.parts = string.split(separator);
		return this.parts;
	}

	getParts() {
		return this.parts;
	}
}
