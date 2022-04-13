// console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
let color_alert = prompt("What is your favorite color?");
alert(color_alert + " is my favorite color too!");

alert("Movie rental time!");
let mermaid = prompt("How many days would you like to keep The Little Mermaid?");
let bbear = prompt("How many days would you like to keep Brother Bear?");;
let hercules = prompt("How many days would you like to keep Hercules?");;
let day_rate = 3;
let cost = ((mermaid * day_rate) + (bbear * day_rate) + (hercules * day_rate));
alert("The total cost based on the number of days you have slected is $" + cost);

alert("Moving on to making money instead of spending it");
let gPay = 400;
let amzPay = 380;
let fbPay = 350;
let gHours = prompt("How many hours did you work for Google?");
let amzHours = prompt("How many hours did you work for Amazon?");
let fbHours = prompt("How many hours did you work for Facebook?");
let total_pay = ((gPay * gHours) + (amzPay * amzHours) + (fbPay * fbHours));
alert("Your total pay for this period is $" + total_pay);

alert("Done with money, now let's see if we can go to school");
let cFullQ = prompt("Is the class currently full?");
let cSchedQ = prompt("Are there any scheduling conflicts?");
let cFull = (cFullQ.toLowerCase() === "yes");
let cSched = (cSchedQ.toLowerCase() === "yes");
alert("You can attend school if true: " + (!cFull && !cSched));

alert("Ok, school taken care of, now for some shopping!");
alert("Let's check to see if you can take advantage of our 2-for-1 special.")
let premium = confirm("If you a premium member, click OK.")
let productQty = confirm("Are you buying more than one Commodore 64 today? If so, click OK.")
let offerDate = confirm("If the offer is still valid, click OK.")
let offerGood = (premium && productQty && offerDate);
// console.log(offerGood);
alert("You qualify for this offer if true: " + offerGood);





