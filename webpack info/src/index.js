// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { ShoppingList } from "./scripts/modules/shopping/shoppingList";


const List = new ShoppingList();

List.addItem("Морква", 5);
List.addItem("Морква", 5);
List.addItem("печеня", 1);
List.addItem("Молоко", 2);
List.addItem("Абрикос", 2);
List.markItemAsBought("Морква");
List.markItemAsBought("Абрикос");
List.print();
