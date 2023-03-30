import { ShoppingItem } from "./shoppingList";

export class ReceiptItem extends ShoppingItem {
	constructor(name, quantity, price) {
		super(name, quantity);
		this.price = price;
	}
}

export class Receipt {
	constructor(items = []) {
		this.items = items;
	}

	addItem(name, quantity, price) {
		this.items.push(new ReceiptItem(name, quantity, price));
	}

	printReceipt() {
		console.log(' task 2 Отримати:');
		this.items.forEach(item => {
			console.log(`${item.name} (${item.quantity} x $${item.price}) = $${item.quantity * item.price}`);
		});
	}

	getTotal() {
		let total = 0;
		this.items.forEach(item => {
			total += item.quantity * item.price;
		});
		return total;
	}

	getMostExpensiveItem() {
		let mostExpensive = this.items[0];
		this.items.forEach(item => {
			if (item.price > mostExpensive.price) {
				mostExpensive = item;
			}
		});
		return mostExpensive;
	}

	getAveragePrice() {
		let total = 0;
		this.items.forEach(item => {
			total += item.price;
		});
		return total / this.items.length;
	}
}


