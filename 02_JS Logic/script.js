
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
//map
var names=["Virat","Rohit","Hardik","Dhoni","Bumrah"]
//blank array
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
