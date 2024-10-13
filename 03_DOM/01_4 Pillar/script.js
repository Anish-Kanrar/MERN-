/*
//1.Selection of an Element--->

var a=document.querySelector("h1")
// var a=document.querySelector(".box")
// var a=document.querySelector("#box")

console.log(a);
//-->output -<h1>Vii DOM parle</h1>
*/

/*
//2.Changing HTML
//document.querySelector("h1").innerHTML="CSS"
//here we not use multiple time.

var a=document.querySelector("h1");
 a.innerHTML="HTML 2.0"
 */

 /*
//3.Changing CSS
var a=document.querySelector("h1")
a.style.color="red"
a.style.backgroundColor="pink"
*/

// var a=document.querySelector("h1")
// a.innerHTML="jhdjshvjsh"
// a.style.color="#fff"

//4.Event Listener
var a=document.querySelector("h1")

a.addEventListener("click",function(){
    a.innerHTML="Change ho geya mai"
    a.style.color="red"
    a.style.backgroundColor="#fff"
})
