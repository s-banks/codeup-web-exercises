"use strict";

console.log("Yay! I completed the warm-up!");
console.log("--------------- \n---------------");
// function fizzBuzz() {
// 	for (let i = 1; i <= 100; i++) {
// 		if(i % 15 === 0) {
// 			console.log("Fizzbuzz");
// 		} else if (i % 5 === 0) {
// 			console.log("Buzz");
// 		} else if (i % 3 === 0) {
// 			console.log("Fizz");
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }
// fizzBuzz()
// console.log("--------------- \n---------------");

// let allFirstLetters = ['dog', 'cat', 'frog', 'bat'];
// function stipLetters(arr) {
//
// }

// function alphabetSoup(str) {
// 	return str.split('').sort().join('');
// }
// console.log(alphabetSoup('anime'));

// function addArray(arr) {
// 	let arrsum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		arrsum += arr[i];
// 	}
// 	return arrsum;
// }
// console.log(addArray([1, 2, 3, 4, 5]))


// Screwed this one all up. See walk-through
// let product1 = {
// 	name: 'Hammar',
// 	priceInCents: 400,
// 	description: 'It is a a hammar.',
// 	inventory: 25034
// }
//
// let product2 = {
// 	name: 'Computer',
// 	priceInCents: 40000,
// 	description: 'It is a computer.',
// 	inventory: 33000
// }
//
// let product3 = {
// 	name: 'Ruler',
// 	priceInCents: 1000,
// 	description: 'It is a ruler.',
// 	inventory: 2200
// }
//
// function returnProductEssentialDetails(val) {
//  return val.name;
// }
// console.log(returnProductEssentialDetails(product1));

// begin this warmup
// const hamsters = [
// 	{
// 		name: "Hamtaro",
// 		heightInMM: 86,
// 		fur: ['orange', 'white'],
// 		gender: "male",
// 		dateOfBirth: "August 6"
// 	} , {
// 		name: "Bijou",
// 		heightInMM: 75,
// 		fur: ['white'],
// 		gender: "female",
// 		dateOfBirth: "July 10"
// 	} , {
// 		name: "Oxnard",
// 		heightInMM: 100,
// 		fur: ['grey', 'white'],
// 		gender: "male",
// 		dateOfBirth: "May 3"
// 	} , {
// 		name: "Boss",
// 		heightInMM: 120,
// 		fur: ['brown', 'white'],
// 		gender: "male",
// 		dateOfBirth: "Spetember 21"
// 	} , {
// 		name: "Snoozer",
// 		heightInMM: 85,
// 		fur: ['brown', 'white', "pink"],
// 		gender: "male",
// 		dateOfBirth: "January 14"
// 	}
// ];
//
// const largest = hamsters.reduce((prev, current) => (+prev.heightInMM > +current.heightInMM) ? prev : current);
// console.log(largest);
// end of previous warmup

// Write a function that will accept an array of objects and return the object from the array that is the most colorful.
// function colors(arr) {
// 	Nope, didn't happen'
// }


// write a function that will accept a string. It should return an object with the following properties: string, size, containsLetterFromRSTLNE, and isOneWord.
//
// 	Ex 1. makeObjectFromString(“tacocat”) -> {
// 	string: “tacocat”,
// 	size: 7,
// 		containsLetterFromRSTLNE: true,
// 		isOneWord: true
// };
//
// Ex 2. makeObjectFromString(“John Jacob”) -> {
// 	string: “John Jacob”,
// 	size: 10,
// 		containsLetterFromRSTLNE: false,
// 		isOneWord: false
// };

//     DOM Practice Question #1
//     Create an HTML file called dom-practice.html in codeup-web-exercises repos.
// Put a text input on an html page with id of "color"
// Put a button on the page with id of "changeColor"
// The above is already done from your previous warm-up :)
// Use an Event listener to trigger when the button is clicked.
//         Use the value to change the background-color of the page to match the user's input value.
//         example of input: "#00000", "black", "#FF00FF"


function myFunction () {
	// Code to do stuff after 300ms
}

$("#blah").keyup(function () {
	// Code to do stuff immediately
	setTimeout(myFunction, 300);
});