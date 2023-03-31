export class urlnfo {
	constructor(url) {
		let a = document.createElement('a');
		a.href = url;

		this.protocol = a.protocol.replace(':', '');
		this.host = a.hostname;
		this.path = a.pathname;
	}

	getInfo() {
		return `Протокол: ${this.protocol}, домен: ${this.host}, шлях: ${this.path}`;
	}
}
