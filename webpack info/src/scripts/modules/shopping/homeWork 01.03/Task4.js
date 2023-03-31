export class CssName {
	constructor(styleName) {
		this.styleName = styleName;
	}

	CamelCase() {
		let words = this.styleName.split("-");
		let camelCaseName = words[0];

		for (let i = 1; i < words.length; i++) {
			let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
			camelCaseName += capitalizedWord;
		}

		return camelCaseName;
	}
}
