export class ShoppingItem {
	constructor(name, quantity, bought = false) {
		this.name = name;
		this.quantity = quantity;
		this.bought = bought;
	}

	markAsBought() {
		this.bought = true;
	}
}

export class ShoppingList {
	constructor(items = []) {
		this.items = items;
	}

	addItem(name, quantity) {
		const existingItemIndex = this.items.findIndex(item => item.name === name);
		if (existingItemIndex !== -1) {
			this.items[existingItemIndex].quantity += quantity;
		} else {
			this.items.push(new ShoppingItem(name, quantity));
		}
	}

	markItemAsBought(name) {
		const item = this.items.find(item => item.name === name);
		if (item) {
			item.markAsBought();
		}
	}

	getAllItems() {
		const boughtItems = [];
		const notBoughtItems = [];

		for (const item of this.items) {
			if (item.bought) {
				boughtItems.push(item);
			} else {
				notBoughtItems.push(item);
			}
		}

		return [...notBoughtItems, ...boughtItems];
	}

	print() {
		const allItems = this.getAllItems();
		let html = "";
		for (const item of allItems) {
			const itemName = item.bought ? `<s>${item.name}</s>` : item.name;
			const itemStatus = item.bought ? 'Купив' : 'Не купив';
			html += `
				<div class="product">
					<div class="product__item">
						<h3 class="product__title">${itemName}</h3>
						<p>${item.quantity} шт - ${itemStatus}</p>
					</div>
				</div>
			`;
		}

		document.querySelector("#purchase").innerHTML = html;
		console.log('Список покупок:');
		for (const item of allItems) {
			const itemStatus = item.bought ? 'Купив' : 'Не купив';
			console.log(`${item.name} (${item.quantity}) - ${itemStatus}`);
		}
	}
}
