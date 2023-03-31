export class AbbreviationConverter {
	constructor(phrase) {
		this.phrase = phrase;
	}

	Abbreviation() {
		let words = this.phrase.split(" ");
		let abbreviation = "";

		for (let i = 0; i < words.length; i++) {
			abbreviation += words[i][0].toUpperCase();
		}

		return abbreviation;
	}
}
