// 1. Template strings (literals)

// Cum introducem variabile in interiorul unui string?
// ES5:
var myName = "Anca";
var place = "Timisoara";
var message = "Salut, sunt " + myName + " si stau in " + place + ".";
// console.log(message);
// ES6:
const name2 = "Manuel";
const place2 = "Cluj";
const message2 = `Salut, sunt ${name2} si stau in ${place2}.`;
// console.log(message2);


// 2. Destructuring

// 2.1 Objects - Cum extragem valorile mai multor chei dintr-un obiect?
// ES5:
var address = {
	street: 'Lacului',
	city: 'Timisoara',
	state: 'Romania'
};
var street = address.street;
var city = address.city; 
var state = address.state;
// console.log(street, city, state);
// ES6:
const address2 = {
	street2: 'Lacului',
	city2: 'Timisoara',
	state2: 'Romania'
};
const { street2, city2, state2 } = address2;
console.log(street2, city2, state2);

// 2.2 Arrays - Cum extragem mai multe elemente dintr-un array?
// ES5:
var animals = ['pisica', 'caine'];
var cat = animals[0];
var dog = animals[1];
// console.log(cat, dog);
// ES6:
var animals2 = ['pisica', 'caine'];
const [cat2, dog2] = animals2;
// console.log(cat2, dog2);


// 3. Spread operator

// 3.1 Objects - Cum imbinam continutul a doua obiecte intr-un nou obiect?
const obj1 = {
	masa: 'ikea',
	dulap: 'kika'
}
const obj2 = {
	cada: 'dedeman',
	oglinda: 'bricostore'
}
// ES6:
const result = Object.assign({}, obj1, obj2);
// ES8:
const result2 = {...obj1, ...obj2};
// console.log(result, result2);

// 3.2 Arrays - Cum imbinam continutul a doua array-uri intr-un nou array?
const arr1 = ["pisica", "caine"];
const arr2 = ["porc", "vaca"];
// ES5:
var result3 = arr1.concat(arr2);
// ES6:
const result4 = [...arr1, ...arr2];
// console.log(result3, result4);
