"use strict";
(function () {
    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function playWithMe() {
        if(confirm("Wanna play a game?")) {
            numberGame();
        } else {
            alert("Boo... No fun...");
        }
    }

    function numberGame() {
        let userVal = parseFloat(prompt("Give me a number!"));
        if (isNaN(userVal)) {
            alert("That's not a number...");
        } else {
            alert("Hey, did you know that " + userVal + " is a(n) " + evenOrOdd(userVal) + " number?");
            alert("Hey, did you know that " + userVal + " plus 100 is " + plus100(userVal) + "?");
            alert("Hey, did you know that " + userVal + " is a " + positiveOrNegative(userVal) + " number?");
        }
    }

    function plus100(num) {
        return num + 100;
    }

    function evenOrOdd(num) {
        if (num === 0) {
            return "zero";
        } else if (num % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }

    function positiveOrNegative(num) {
        if (num === 0) {
            return "zero";
        } else if (num > 0) {
            return "positive";
        } else {
            return "negative";
        }
    }

    playWithMe();

}())