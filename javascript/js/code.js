// loop-method-find
let loopMethodFind =
`// Find and return the first value that matches
let data = [10, 20, 55, 66, 99, 45, 74, 4];
let result = data.find(function(element, index, array) {
	return element > 66;
});
console.log(result); // result = 99`;
document.getElementById('loop-method-find').innerHTML = loopMethodFind;

// loop-method-forEach
let loopMethodForEach =
`// Run an action for each iteration and return nothing.
let data = [10, 20, 55, 66, 99, 45, 74, 4];
data.forEach(function(element, index, array) {
	if (element === 55)
	{
		console.log(&#96;The number is &#36;{element}&#96;); // The number is 55
	}
});`;
document.getElementById('loop-method-forEach').innerHTML = loopMethodForEach;

// loop-method-forEach
let loopMethodMap =
`// Create another array from an existing array (alter the value)
let data = [10, 20, 55, 66, 99, 45, 74, 4];
let squares = data.map(function(element) {
	return element * element;
});
console.log(squares); // Result [100, 400, 3025, 4356, 9801, 2025, 5476, 16]`;
document.getElementById('loop-method-map').innerHTML = loopMethodMap;

// loop-method-filter
let loopMethodFilter =
`// Create a new Object, Seeks to return to those who meet a condition (not alter value)
let data = [
	{name: 'Jose', age: 16},
	{name: 'Daniela', age: 19},
	{name: 'Pedro', age: 21}
];
let adult = data.filter(function(element, index, array) {
	return element.age >= 18;
});
console.log(adult); // [{name: "Daniela", age: 19}, {name: "Pedro", age: 21}]`;
document.getElementById('loop-method-filter').innerHTML = loopMethodFilter;

// tricks-doubledenialcode
let tricksDoubledenialcode =
`init();

function init() {
	let cuenta = new Cuenta(NaN); // NaN, 0, undefined, null and '' is equal to false but Object is true 
	console.log(cuenta.hasMoney); // return false
}

function Cuenta(money) {
	this.money = money;
	this.hasMoney = !!money; // !!
}`;
document.getElementById('tricks-doubledenialcode').innerHTML = tricksDoubledenialcode;

// tricks-convertonumber
let tricksConvertonumber =
`let value = "50"; // "50a" = NaN;
console.log(+value); // The sign +`;
document.getElementById('tricks-convertonumber').innerHTML = tricksConvertonumber;

// tricks-shortconditional
let tricksShortconditional =
`let coditional = true;
coditional && console.log('The conditional is TRUE');`;
document.getElementById('tricks-shortconditional').innerHTML = tricksShortconditional;

// tricks-defaultvalues
let tricksDefaultvalues =
`initUser();
function initUser() {
	let user = new User('', undefined);
	console.log(user.name); // result 'Abel'
	console.log(user.age); // result 29
}

function User(name, age) {
	this.name = name || 'Abel'; // || Default value
	this.age = age || 29;
}`;
document.getElementById('tricks-defaultvalues').innerHTML = tricksDefaultvalues;

// tricks-browsercompatibility
let tricksBrowsercompatibility =
`if ('querySelector' in document) { // Validate
	console.log('Yes, exist');
} else {
	console.log('No, exist');
}`;
document.getElementById('tricks-browsercompatibility').innerHTML = tricksBrowsercompatibility;

// tricks-lastelementarray
let tricksLastelementarray =
`let data = [2, 4, 5, 6, 8, 10, 12];
console.log(data.slice(-3)); // get the last 3 elements [8, 10, 12]`;
document.getElementById('tricks-lastelementarray').innerHTML = tricksLastelementarray;

// tricks-truncatearray
let tricksTruncatearray =
`let data = [2, 4, 5, 6, 8, 10, 12];
data.length = 4;
console.log(data); // [2, 4, 5, 6]`;
document.getElementById('tricks-truncatearray').innerHTML = tricksTruncatearray;

// tricks-replaceall
let tricksReplaceall =
`let text = "Juan come con su amigo Juan";
console.log(text.replace("Juan", "Pedro")); // Pedro come con su amigo Juan (Replace the first match)
console.log(text.replace(/Juan/g, "Pedro")); // Pedro come con su amigo Pedro (Replace the all matches)`;
document.getElementById('tricks-replaceall').innerHTML = tricksReplaceall;

// tricks-joinarray
let tricksJoinarray =
`let data_first = [1,2,3];
let data_second = [4,5,6];
console.log(data_first.concat(data_second)); // result [1, 2, 3, 4, 5, 6]`;
document.getElementById('tricks-joinarray').innerHTML = tricksJoinarray;

// tricks-nodelistarray
let tricksNodelistarray =
`let element = document.querySelectorAll("h5");
console.log(element);
console.log(Array.from(element));`;
document.getElementById('tricks-nodelistarray').innerHTML = tricksNodelistarray;

// tricks-shortrandomly
let tricksShortrandomly =
`let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(data.sort(function() {
	return Math.random() - 0.5;
}));`;
document.getElementById('tricks-shortrandomly').innerHTML = tricksShortrandomly;

// tricks-consoletable
let tricksConsoletable =
`var employees = [
{'name': 'Marcos', 'age': 24},
{'name': 'Lena', 'age': 12},
{'name': 'Omar', 'age': 45},
{'name': 'Eren', 'age': 19}];
console.table(employees);`;
document.getElementById('tricks-consoletable').innerHTML = tricksConsoletable;

// tricks-objectkeys
let tricksObjectkeys =
`let empleado = {'name': 'Marcos', 'age': 24, 'city': 'Warnes'};
let objEmployees = Object.keys(empleado);
console.log(objEmployees); // result ["name", "age", "city"]`;
document.getElementById('tricks-objectkeys').innerHTML = tricksObjectkeys;

// tricks-consoletime
let tricksConsoletime =
`console.time('loop');
for(let i = 0; i <= 1000; i++)
{
	console.log('Interation ' + i);
}
console.timeEnd('loop');`;
document.getElementById('tricks-consoletime').innerHTML = tricksConsoletime;

// tricks-selectordollar
let tricksSelectordollar =
`$('h5') // $ show the fisrt element
$$('h5'); // $$ Show elements in array`;
document.getElementById('tricks-selectordollar').innerHTML = tricksSelectordollar;

// tricks-showallevents
let tricksShowallevents =
`let get_event_added = document.getElementById('tricks-selectordollar');
get_event_added.addEventListener('click', function() {
	console.log("Click!");
});
get_event_added.addEventListener('keyup', function() {
	console.log('Key Up!');
});
getEventListeners($('#tricks-selectordollar')); // only work in google chrome`;
document.getElementById('tricks-showallevents').innerHTML = tricksShowallevents;

// tricks-objectsconsole
let tricksObjectsconsole =
`let foo = {name: 'Abel', age: 29, nervous: false};
let bar = {name: 'Andrea', age: 25, nervous: true};
let baz = {name: 'Paola', age: 21, nervous: false};

console.log('%c My friends', 'color:yellow;font-size:18px'); // Add style to console result
console.log({ foo, bar, baz });
// foo: {name: "Abel", age: 29, nervous: false}
// bar: {name: "Andrea", age: 25, nervous: true}
// baz: {name: "Paola", age: 21, nervous: false}
console.table([ foo, bar, baz ]); // show table of the data`;
document.getElementById('tricks-objectsconsole').innerHTML = tricksObjectsconsole;

// tricks-accessdirectvalue
let tricksAccessdirectvalue =
`let turtle = {
	name: 'Bob',
	legs: 4,
	shell: true,
	type: 'amphibious',
	meal: 10,
	diet: 'berries'
};

function feed(animal) {
	const { name, meal, diet } = animal;
	console.log(&#96;Feed &#36;{name} &#36;{meal} kilos of &#36;{diet}&#96;);
}
// OR
function feed({ name, meal, diet }) {
	console.log(&#96;Feed &#36;{name} &#36;{meal} kilos of &#36;{diet}&#96;);
}

feed(turtle); // result "Feed Bob 10 kilos of berries"`;
document.getElementById('tricks-accessdirectvalue').innerHTML = tricksAccessdirectvalue;

// tricks-joinarray
let tricksjoinarray =
`let data = ['red', 'blue', 'yellow', 'green']
console.log(data.join(' & '));`;
document.getElementById('tricks-joinarray').innerHTML = tricksjoinarray;

// tricks-3dotobject
let tricks3dotobject =
`let picachu = { name: 'Picachu' };
let stats = { hp: 40, attack: 60, defense: 45 };

let join = { ...picachu, ...stats }; // Join these two object
let addNew = { ...picachu, hp: 45, attack: 60 }; // Add new data to array
console.log(join) // {name: "Picachu", hp: 40, attack: 60, defense: 45};
console.log(addNew); // {name: "Picachu", hp: 45, attack: 60}

// With Array

let pokemon = ['Arbok', 'Raichu', 'Sandsshrew'];
console.log(pokemon); // ["Arbok", "Raichu", "Sandsshrew"]
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];
console.log(pokemon); // ["Arbok", "Raichu", "Sandsshrew", "Bulbasaur", "Metapod", "Weedle"]
pokemon = ['Squirtle', 'Charizard', 'Charmander', ...pokemon];
console.log(pokemon); // ["Squirtle", "Charizard", "Charmander", "Arbok", "Raichu", "Sandsshrew", "Bulbasaur", "Metapod", "Weedle"]
pokemon = ['Ivysaur', ...pokemon, 'Wartortle'];
console.log(pokemon); // ["Ivysaur", "Squirtle", "Charizard", "Charmander", "Arbok", "Raichu", "Sandsshrew", "Bulbasaur", "Metapod", "Weedle", "Wartortle"]`;
document.getElementById('tricks-3dotobject').innerHTML = tricks3dotobject;

// tricks-loopsarrowfunctions
let tricksLoopsarrowfunctions =
`// Normal
let orders = [500, 30, 99, 15, 223];
let total = orders.reduce(function(accumulator, currentValue) {
	return accumulator + currentValue;
});
let withTax = orders.map(function(number) {
	return number * 1.1;
});
let hightValue = orders.filter(function(number) {
	return number > 100;
});

// Arrow Functions
total = orders.reduce((accumulator, currentValue) => accumulator + currentValue);
withTax = orders.map(number => number * 1.1);
hightValue = orders.filter(number => number > 100);`;
document.getElementById('tricks-loopsarrowfunctions').innerHTML = tricksLoopsarrowfunctions;


let data = [5, 4, 9, 14, 10, 7];
for(let value of data) {
	console.log(value);
}

console.log(Math.min.apply(null, data));
console.log(Math.max.apply(null, data));
// ----------------------------------------------
// Delete a object property
let person = {
	firstName: 'Abel',
	lastName: 'Lima',
	age: 29,
	eyeColor: 'black'
}

console.table(person);
delete person.age;
console.table(person);
// ----------------------------------------------


throw Error('Error message here');

//----------------------------------------------
// typeof
// let fileReader = new FileReader;
// let xhr = new XMLHttpRequest();
    // let headers = {
    //   "Accept": "application/json",
    //   "Cache-Control": "no-cache",
    //   "X-Requested-With": "XMLHttpRequest",
    // };
// console.warn('Retried this chunk too often. Giving up.')
  // let ab = new ArrayBuffer(byteString.length);
  // let ia = new Uint8Array(ab);

// // Checks if the browser is supported
// Dropzone.isBrowserSupported = function () {
//   let capableBrowser = true;

//   if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
//     if (!("classList" in document.createElement("a"))) {
//       capableBrowser = false;
//     } else {
//       // The browser supports the API, but may be blacklisted.
//       for (let regex of Dropzone.blacklistedBrowsers) {
//         if (regex.test(navigator.userAgent)) {
//           capableBrowser = false;
//           continue;
//         }
//       }
//     }
//   } else {
//     capableBrowser = false;
//   }

//   return capableBrowser;
// };