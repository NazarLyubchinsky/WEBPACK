// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { CharStats } from "./scripts/modules/shopping/homeWork 01.03/Task1";
import { NumberToText } from "./scripts/modules/shopping/homeWork 01.03/Task2";
import { TextModifier } from "./scripts/modules/shopping/homeWork 01.03/Task3";
import { CssName } from "./scripts/modules/shopping/homeWork 01.03/Task4";
import { AbbreviationConverter } from "./scripts/modules/shopping/homeWork 01.03/Task5";
import { numberStringsr } from "./scripts/modules/shopping/homeWork 01.03/Task6";
import { Calculator } from "./scripts/modules/shopping/homeWork 01.03/Task7";
import { urlnfo } from "./scripts/modules/shopping/homeWork 01.03/Task8";
import { Separators } from "./scripts/modules/shopping/homeWork 01.03/Task9";
import { TextTemplate } from "./scripts/modules/shopping/homeWork 01.03/Task10";


// TASK 1
const charStats = new CharStats("lorem  12345");
charStats.countChars();
charStats.displayStats();
console.log("--")
// TASK 2

const numToText = new NumberToText(35);
console.log(numToText.convertToText());
console.log("--")
// TASK 3

const Text = "lOreM tExT0vKa";
const modifier = new TextModifier(Text);
const modifiedText = modifier.modifyText();

console.log("оригінальний текст:", Text);
console.log("змінений:", modifiedText);
console.log("--")
// TASK 4

const cssStyle = "background-color";
const converter = new CssName(cssStyle);
const camelCaseName = converter.CamelCase();

console.log("CSS style name:", cssStyle);
console.log("Camelcase style name:", camelCaseName);
console.log("--")
// TASK 5

const phrase = "каскадні таблиці стилів";
const convert = new AbbreviationConverter(phrase);
const abbreviation = convert.Abbreviation();

console.log("Фразa:", phrase);
console.log("Абревіатура:", abbreviation);
console.log("--")
// TASK 6

let joiner = new numberStringsr();
let str1 = 'You';
let str2 = 'Name';
let str3 = '?';

let result = joiner.joinStrings(str1, str2, str3);

console.log(result);
console.log("--")
// TASK 7

let calculator = new Calculator();

let result2 = calculator.calculate('2 + 3');
console.log(result2);

result2 = calculator.calculate('5 - 2');
console.log(result2);

result2 = calculator.calculate('4 * 6');
console.log(result2);

result2 = calculator.calculate('10 / 2');
console.log(result2);
console.log("--")
// TASK 8

let url = 'https://itstep.org/ua/about';
let info = new urlnfo(url);
console.log(info.getInfo());
console.log("--")
// TASK 9

let string = "10/08/2020";
let separator = "/";
let splitter = new Separators();
splitter.split(string, separator);
console.log(splitter.getParts()); 

console.log("--")
// TASK 10

let formatter = new TextTemplate();
formatter.format("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020); 








