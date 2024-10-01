/*
//DOM-->Document Object Model

//4 pillars of DOM
-Selection of an Element
-Changing HTML
-Changing CSS
-Event Listener
*/

var a = document.querySelector("h1")


// console.log(a);
// a.innerHTML = "Changed"

a.style.color = "pink"
a.style.backgroundColor="royalblue"

//Event Listener
var h1=document.querySelector("h1")
h1.addEventListener("dblclick",function(){
    h1.innerHTML="changed"
    h1.style.color="black"
})