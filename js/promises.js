"use strict";

(function () {
let button = document.querySelector('#submit');
let input = document.querySelector('#search');
button.addEventListener('click', function(e){
    e.preventDefault();
    let uName = input.value;
        //console.log(uName);
//let uName = prompt("Please enter a username to check.")
const URL = `https://api.github.com/users/${uName}/events/public`
 fetch(URL, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
     .then((resp) => resp.json())
     .then((data) => {
         //console.log(data)
         document.querySelector('#user').innerHTML = `${data['0']['actor'].login}`,
          document.querySelector('#last-push').innerHTML = `${data['0']['created_at']}`,
          document.querySelector('#repo').innerHTML = `${data['0']['repo'].name}`
         })
     .catch(error => console.error(error));
})
}())
