export class NumberToText {
	constructor(num) {
		this.num = num;
		this.units = ["нуль", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
		this.tens = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];
		this.special = ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
	}

	convertToText() {
		const tensPlace = Math.floor(this.num / 10);
		const unitsPlace = this.num % 10;

		if (this.num < 10 || this.num > 99) {
			console.log("Номер повинен бути двозначним");
		}

		return `${tensPlace ? (tensPlace === 1 ? this.special[unitsPlace] : this.tens[tensPlace]) : ""} ${unitsPlace ? this.units[unitsPlace] : ""}`.trim();
	}
}
