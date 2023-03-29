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
		const existingItem = this.items.find(item => item.name === name);
		if (existingItem) {
			existingItem.quantity += quantity;
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

	print() {
		const boughtItems = this.items.filter(item => item.bought);
		const notBoughtItems = this.items.filter(item => !item.bought);
		const allItems = [...notBoughtItems, ...boughtItems];
		// 1. Get the container
		let html = "";
		// 2. Loop through the products
		allItems.forEach((item) => {
			const itemName = item.bought ? `<s>${item.name}</s>` : item.name;
			html += `
		
						  <div class="product">
						
						<div class="product__item">
						<h3 class="product__title">${itemName}</h3>
						<p>${item.quantity}шт - ${item.bought ? 'Купив' : 'Не купив'}</p>
						</div>
						 
						 
					
						  </div>
					 `;
		});
		// 3. Draw the products
		document.querySelector("#purchase").innerHTML = html;
		console.log('Список покупок:');
		allItems.forEach(item => {
			console.log(`${item.name} (${item.quantity}) - ${item.bought ? 'Купив' : 'Не купив'}`);
		});
	}
}
