"use strict";

// all of these are from: https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the
// numbers type in ascending order.
let test = ['fred', true, 5, 3, 'yay', 7]
function filterNumbers(arr) {
	let bucket = [];
	arr.forEach(function(elem) {
		if (typeof elem === "number") {
			bucket.push(elem);
		}
	})
	console.log(bucket);
}
filterNumbers(test);
console.log("--------------- \n---------------");

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
		breed: "Mastiff",
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
console.log("--------------- \n---------------");

//Write a function, washCars() that takes in an array of car objects and sets the boolean properties of isDirty to false.
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

function washCars(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].isDirty = false;
	}
	console.log(arr);
}
washCars(obj2)
console.log("--------------- \n---------------");

//Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the
// isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user
// objects that are admins.

let obj3 = [
	{
		isAdmin: true,
		email: 'user1@email.com'
	},
	{
		isAdmin: true,
		email: 'user2@email.com'
	},
	{
		isAdmin: false,
		email: 'user3@email.com'
	}
]
function adminList(arr) {
	let adminQty = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].isAdmin === true) {
			adminQty += 1;
		}
	}
	console.log(adminQty);
}
adminList(obj3);

function adminEmail(arr) {
	let adminMail = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].isAdmin === true) {
			adminMail.push(arr[i].email)
		}
	}
	console.log(adminMail);
}
adminEmail(obj3);

function adminObject(arr) {
	let adminObj = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].isAdmin === true) {
			adminObj.push(arr[i]);
		}
	}
	console.log(adminObj);
}
adminObject(obj3);
console.log("--------------- \n---------------");

//Next items from: https://java.codeup.com/extra-exercises/javascript/arrays/

