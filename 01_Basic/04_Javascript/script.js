// developer tools,exp is crome dev tools

/* console.log("hello guys!!")
console.warn("This is warning")
console.error("This is error")*/

/*
alert("This is alert")

var ans=confirm("Are you an Adult?")
console.log(ans)

var a=prompt("Enter your name?")
console.log('Username is',a)
*/

/*
JS DataTypes-

-Premetive
    -Number(1,2,3,20.6,4.77777)
    -String('a','Virat')
    -Boolean(true,false)
    -undefined
    -null
    -Symbol
    -NaN(Not a Number)

-Reference
    -Array
    -Objects
    -function    
*/

//concatination
var a = "Virat"
var b = 3
console.log(a + b)

/*
//if-else
var age = prompt("Enter your age")
if(age>18)
    console.log("You enter this website");
else
    console.log("You can't enter this website")
*/


/*
//Loop
var a=1
while(a<5){
    console.log(a);
    a++;
}

for(var b=1;b<5;b++){
    console.log("hiiiiiii")
}

//== vs ===
*/


//function

function dance() {
    console.log("Doremon Doremon la laaa...")
}

function walk(a) {
    console.log("Hay,I am walking...", a)
}

function eat() {
    console.log("Hey!I a eating Dora cake...")
}

dance()
eat()
walk(78)
dance()

function abc() {
    console.log("Hello")

    return 39
}

var a = abc()
console.log(a)

//first class function
var baby = function () {
    console.log("le mare baby..")
}

baby()

//arrow function
var virat = () => {
    console.log("Ee sala Cup Namde")
}

virat()

//ES5 is upto 2015-->var
//global variable

const groom = "Selmon"
const bride = "Kat"


//groom="Vickey"

console.log(groom, "weds", bride)


//Arrays
var arr = [11, 22, 33, 44]
console.log(arr)
console.log(arr[0])
console.log(arr[3])

arr.push(88)
console.log(arr);

arr.pop()
console.log(arr);
console.log(arr.length);

var arr1 = [1, 2, 3, 4, 5]
arr1.forEach(function (elam) {
    console.log('hello', elam)
})

/*
() -->Function
{}-->Object
[]-->Array
*/

//Object
var obj = {
    user: 'Virat',
    age: 36,
}
console.log(obj);
console.log(obj.user); //Virat

var user = {
    userName: 'Anish',
    Age: 21,
    greet: function () {
        console.log("Good Night");
        return 10
    }
}
//console.log(user.greet());  //Good Night,undefined
console.log(user.greet());    //Good Night,10

//Array of obj**
var arr = [
    { name: "Virat", age: 36 },
    { name: "Rohit", age: 38 },
    { name: "Akash", age: 22 }
]
console.log(arr);
console.log(arr[1]); //{name: 'Rohit', age: 38}
console.log(arr[2].age); //22
