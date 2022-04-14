"use strict";

// The case setup is here:
/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products. */

// Date check to determine if offer is expired using pre-determined exp date and today's date.
let today = new Date().toLocaleDateString()
console.log(today)
let offerExp = new Date(2022, 3, 40, 0, 0, 0, 0).toLocaleDateString();
console.log(offerExp);

// Need this var during final for date check.
let expCk = (offerExp >= today);
console.log(expCk);

//function to check if person is premium member or not.
function premiumCk() {
    let premium = prompt("Are you a premium member?");
    return premium.toLowerCase() === "yes";
}
// Need this var during final check for premium
let isPremium = premiumCk();
console.log(isPremium);

// Check to see if two or more are purchased. Used in conjunction with premium status to determine offer validity.
function quantityCk() {
    let qty = prompt("How many Commodore 64s are you purchasing today?");
    return qty >= 2;
}
// Need this var during final check for quantity purchased
let qtyMoreThanTwo = quantityCk();
console.log(qtyMoreThanTwo);

// Final processing of the supplied data to determine customer's offer eligibility. Set to auto-call the function.
(function finalCk() {
    if (isPremium && expCk === true) {
        alert("Congratulations, you qualify for this offer!");
    } else if (!isPremium && expCk && qtyMoreThanTwo === true) {
        alert("Congratulations, you qualify for this offer!");
    } else {
        alert("Sorry, you do not qualify for this offer");
    }
})()


