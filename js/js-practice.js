"use strict";

// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the
// numbers type in ascending order.
var test = ['fred', true, 5, 3, 'yay', 7]
function filterNumbers(arr) {
	let bucket = [];
	arr.forEach(function(elem) {
		if (typeof elem === "number") {
			bucket.push(elem);
		}
	})
	console.log(bucket);;
}
filterNumbers(test);

// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
let obj = [
	{
		name: "Chompers",
		breed: "Pug",
		age: 7
	},
	{
		name: "Freddy",
		breed: "Lab",
		age: 4
	},
	{
		name: "Mr. Pig",
		breed: "Mastif",
		age: 10
	}
]

function getOlder(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].age = arr[i].age + 1;
	}
	console.log(arr);
}
getOlder(obj)

//Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.
let obj2 = [
	{
		make: 'Volvo',
		color: 'red',
		year: 1996,
		isDirty: true
	},
	{
		make: 'Toyota',
		color: 'black',
		year: 2004,
		isDirty: false
	},
	{
		make: 'Ford',
		color: 'white',
		year: 2007,
		isDirty: true
	}
]


