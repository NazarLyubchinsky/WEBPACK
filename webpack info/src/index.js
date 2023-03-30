// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { ShoppingItem, ShoppingList } from "./scripts/modules/shopping/shoppingList";
import { Receipt } from "./scripts/modules/shopping/checkStore";
import { StyledText } from "./scripts/modules/shopping/cssStyles";
import { AuditoriumList } from "./scripts/modules/shopping/classroomsAcademy";

// task 1
const List = new ShoppingList();

List.addItem("Морква", 5);
List.addItem("Морква", 5);
List.addItem("печеня", 1);
List.addItem("Молоко", 2);
List.addItem("Абрикос", 2);
List.addItem("Кава", 2);
List.markItemAsBought("Морква");
List.markItemAsBought("Абрикос");
List.print();

// task 2


const receipt = new Receipt();
receipt.addItem('Яблуко', 3, 1.25);
receipt.addItem('Апельсини', 2, 0.75);
receipt.addItem('Банани', 1, 0.5);
receipt.addItem('Мандарин', 3, 0.5);


receipt.printReceipt();
console.log('Підсумок: $' + receipt.getTotal());
console.log('Найдорожчий: ' + receipt.getMostExpensiveItem().name);
console.log('Середня ціна: $' + receipt.getAveragePrice());

// Task 3

// const styles = [
// 	{ name: 'color', value: 'green' },
// 	{ name: 'font-size', value: '20px' },
// 	{ name: 'text-align', value: 'center' },
// 	{ name: 'text-decoration', value: 'solid' }
// ];
// const styledText = new StyledText(styles);

// const formattedText = styledText.print('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quam!');

// styledText.render(formattedText);

// Task 4

