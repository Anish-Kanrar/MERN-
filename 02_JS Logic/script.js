/*
//**foreach**

var names=["Virat","Rohit","Hardik","Dhoni","Bumrah"]

names.forEach(function(value){
    console.log(value);
})

//2
names.forEach(function(value){
    if(value === "Hardik"){}
    else{
        console.log(value);
    }
})
//Virat,Rohit,Dhoni,Bumrah
//here not use 'break','continue'-keyword
*/


/*
//map*****
var names=["Virat","Rohit","Hardik","Dhoni","Bumrah"]
//to create a blank array
let newarr=names.map(function(value){
    return 1;
})

//newarr->[1,1,1,1,1]

//2
var names=["Virat","Rohit","Hardik","Dhoni","Bumrah"]

let newarr2=names.map(function(value){
    return value+" ji";
})
// newarr2-->["Virat ji","Rohit ji","Hardik ji","Dhoni ji","Bumrah ji"]
//create a new array

*/

/*
//filter
const names=["Virat","Rohit","Hardik","Dhoni","Bumrah"]

let newarr=names.filter(function(value){
    return true;
})
// newarr-->[Virat', 'Rohit', 'Hardik', 'Dhoni', 'Bumrah']

const names1=["Virat","Rohit","Hardik","Dhoni","Bumrah"]

let newarr1=names1.filter(function(value){
    return false;
})

//newarr1-->[]

const names2 = [
    "John", "Sophia", "Liam", "Emma", "Olivia", 
    "James", "Ava", "Isabella", "Mason", "Lucas", 
    "Mia", "Ethan", "Charlotte", "Amelia", "Noah", 
    "Elijah", "Aiden", "Lily", "Jacob", "Grace"
  ];

let newArr = names2.filter(function(value){
    return value.startsWith('A');
  })
//['Ava', 'Amelia', 'Aiden']  
*/

/*
//Destructuring
const user ={
    id:1,
    firstName:"Virat",
    lastName:"Kohali",
    email:"virat.doe@example.com",
    age:36,
    address:{
        street:"133 Main St",
        city:"Anytown",
        state:"CA",
        zipCode:"98765",
    },
    phoneNumber: [{
        type:"home",
        number:"55-1566",
    },
    {
        type:"home",
        number:"55-9562",
    },
],
isActive: true,
roles: ["user","admin"],
preference: {
    theme: "dark",
    notification:{
        email:true,
        sms: false,
    },
},
lastLogin: new Date("2024-11-02T10:30:009"),
};

// user.address.zipCode

let {state}=user.address;
console.log(state);

//array ka andar destructure
// let [first, second]=user.roles;
//console.log(first,second);  //user admin

let [_,second]=user.roles;
console.log(second) //admin
*/

/*
const names=['John','Jane','Doe','Smith'];

// spread operator ...
//const copynames=names;
const copynames=[...names]; //use spread operator,here we will copy array

const smallObject = {
    name: "Jahn",
    age: 30,
    city:"New York",
};

const newobj = {...smallObject} //here we will copy obj
*/

/*
//rest operator
// 1
function abcd(...rest){
    console.log(rest);
}
abcd(1,2,3,4,5,6);

//2
function abdce(...papa){
    console.log(papa);
}
abdce(1,2,3,4)

//3
function xyz(a,b,c,...lala){
    console.log(a,b,c,lala);
}
xyz(11,22,33,44,55)  //11 22 33 (2) [44, 55]
*/

/*
//1. Marging two arrays of data fetched from sepate APIs into a single list.

const name=["Anik","Raja","Soham","Sagnik"];
const lastName=["Kanrar","Ghosh","Mayur","Metiya"];

const fullName=[...name,...lastName];
*/

/*
// 2.Filtering an array of objects to display items based on a search query(e.g.,filtering products by type).

const products = [
    {name:"Laptop",type:"Electronics"},
    {name:"Phone",type:"Electronics"},
    {name:"Tablet",type:"Electronics"},
    {name:"Monitor",type:"Electronics"},
    {name:"Shirt",type:"Clothing"},
    {name:"Pants",type:"Clothing"},
    {name:"Shoes",type:"Footwear"},
];

let newarr=products.filter(function(product){
    return product.type === "Electronics"
})
console.log(newarr);
*/

/*
//3.Mapping over an array of user data to create a list of user cards.

const users = [
    {name:"Jahn",age:20},
    {name:"Jane",age:21},
    {name:"Doe", age:22},
];

let newarr=users.map(function(user){
    return `<div><h3>${user.name}<h3><h5>${user.age}</h5></div>`;
})
*/
/*
//Grouping an array of objects by a specific property(e.g., grouping users by role)

const users = [
    {name:"Jahn",age:20, role:"admin"},
    {name:"Jane",age:21,role:"user"},
    {name:"Doe", age:22,role:"admin"},
];

let obj={};

users.forEach(function(user){
    if(obj[user.role]){
        obj[user.role].push(user);
    }
    else{
        obj[user.role]=[];
        obj[user.role].push(user);
    }
});

console.log(obj);
*/

//Removing or updating a specific
const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 38 },
    { id: 3, name: "Charlie", age: 25 },
    { id: 4, name: "Diana", age: 29 },
    { id: 5, name: "Ethan", age: 30 },
];

let newarr = users.filter(function (user) {
    return user.id !== 2;
});
console.log(newarr);
