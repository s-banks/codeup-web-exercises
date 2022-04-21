"use strict";
(function () {

//     function showMultiplicationTable(val) {
//         let itr = 0;
//         let mult = 1;
//         while (itr < 10) {
//             console.log(`${val} * ${mult} = ` + (val * mult));
//             mult++
//             itr++
//         }
//     }
// showMultiplicationTable(10);
// Oops, above was done as while loop, not as a for loop. redoing below

   function showMultiplicationTable(val) {
       for(let itr = 1; itr <= 10; itr++) {
           console.log(`${val} * ${itr} = ` + (itr * val));
       }
   }
showMultiplicationTable(10)
console.log("--------------- \n---------------");
function rndmTen() {
    for (let itr = 1; itr <= 10; itr++) {
        let val = Math.floor(Math.random() * 10) + 1;
        if (val % 2 !== 0) {
            console.log('Here is an odd number: ' + val);
        } else {
            console.log('Here is an even number: ' + val);
        }
    }
}
rndmTen()
console.log("--------------- \n---------------");

function loopLoop() {
    for (let itr = 1; itr < 10; itr++) {

    }
}


}())