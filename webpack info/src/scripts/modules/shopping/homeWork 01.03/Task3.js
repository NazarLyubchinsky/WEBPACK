export class TextModifier {
	constructor(text) {
		this.text = text;
	}

	modifyText() {
		let modifiedText = "";
		for (let i = 0; i < this.text.length; i++) {
			let charCode = this.text.charCodeAt(i);

			if (charCode >= 65 && charCode <= 90) {
				modifiedText += String.fromCharCode(charCode + 32); 
			} else if (charCode >= 97 && charCode <= 122) { 
				modifiedText += String.fromCharCode(charCode - 32); 
			} else if (charCode >= 48 && charCode <= 57) { 
				modifiedText += "_"; // 
			} else {
				modifiedText += this.text[i];
			}
		}
		return modifiedText;
	}
}
