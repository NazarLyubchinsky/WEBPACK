export class CharStats {
	constructor(str) {
		this.str = str;
		this.letters = 0;
		this.numbers = 0;
		this.other = 0;
	}

	countChars() {
		for (let i = 0; i < this.str.length; i++) {
			const CHAR = this.str.charAt(i);
			if (/[a-zA-Z]/.test(CHAR)) {
				this.letters++;
			} else if (/[0-9]/.test(CHAR)) {
				this.numbers++;
			} else {
				this.other++;
			}
		}
	}

	displayStats() {
		console.log(`Letters: ${this.letters}`);
		console.log(`Numbers: ${this.numbers}`);
		console.log(`Other: ${this.other}`);
	}
}


