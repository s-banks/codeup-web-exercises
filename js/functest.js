"use strict";
/* alert("Let's check to see if you can take advantage of our 2-for-1 special.")
let premium = confirm("If you a premium member, click OK.")
let productQty = confirm("Are you buying more than one Commodore 64 today? If so, click OK.")
let offerDate = confirm("If the offer is still valid, click OK.")
let offerGood = (premium && productQty && offerDate);
// console.log(offerGood);
alert("You qualify for this offer if true: " + offerGood); */


let premium = prompt("Are you a premium member?");
(function premiumCk() {
    if (premium.toLowerCase() === "yes")
    {
        return true;
    } else {
        return false;
    }
})()

premiumCk()


