/*
// Selecting multiple elements at a same time
var h=document.querySelectorAll("h1")
console.log(h);
    
h.forEach(function(e){
    console.log(e)
})
*/

//document.getElementById("box")   
// document.getElementsByClassName("box")

// var h=document.querySelector("h1")
// h.textContent="bye"

var box = document.querySelector("#box")
box.innerHTML = "<h1>Virat</h1>"
// box.textContent="<h1>Virat</h1>"

