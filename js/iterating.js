(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ["Ashley", "Gia", "Rileigh", "Aedan"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    console.log("--------------- \n---------------");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

    console.log("--------------- \n---------------");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(let itr = 0; itr < names.length; itr++) {
    console.log(names[itr]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` or ForOf loop
     */
console.log("--------------- \n---------------");

names.forEach(function(name) {
    console.log(name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

console.log("--------------- \n---------------");

function first(Array) {
    console.log(Array[0]);
}

function second(Array) {
    console.log(Array[1]);
}

function last(Array) {
    console.log(Array[Array.length - 1]);
}

first([1, 2, 3, 4, 5]); // returns 1
second([1, 2, 3, 4, 5]); // returns 2
last([1, 2, 3, 4, 5]); // returns 5
last(["A", "B", "C", "D"]) //returns D
last(names); // returns Aedan


})();