(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // console.log(planetsArray);
    console.log("--------------- \n---------------");
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsBackToString = planetsArray.join('<br>')
    console.log(planetsBackToString);
    console.log("--------------- \n---------------");
    let array1 = planetsArray[0];
    let array2 = planetsArray[1];
    let array3 = planetsArray[2];
    let array4 = planetsArray[3];
    let array5 = planetsArray[4];
    let array6 = planetsArray[5];;
    let array7 = planetsArray[6];
    let array8 = planetsArray[7];

    let planetUOList = ('<ul>' + '<li>' + array1 + '</li>' + '<li>' + array2 + '</li>' + '<li>' + array3 + '</li>' + '<li>' + array4 + '</li>' + '<li>' + array5 + '</li>'
        + '<li>' + array6 + '</li>' + '<li>' + array7 + '</li>' + '<li>' + array8 + '</li>' + '</ul>');
    console.log(planetUOList);



})();
