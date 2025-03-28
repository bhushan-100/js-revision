"use strict";//treat all js code as newer version
// alert("hello") we are using nodejs,not browser

let name="bhushan"
let age="21"
let isLogggedIn= false
let state;
console.log(typeof null);
console.log(typeof undefined);
// number ->2 to power 53
//big int
const bigNumber = 4759947902849n
console.log(typeof(bigNumber))

console.log
// string=> ""
//boolean => true/false
//null => standalone value MATLAB MAI BOL RHA BHAI YE KHALI HAI NOT UNDEFINED 
//UNDEFINED
//symbol =>unique

// Symbol
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id === anotherid)

// non primitive Array,Objects,Functions
const heroes =["ironman","captain america"];

let myObj ={
    name:"bhushan",
    age:21,
}
const myFunction= function(){
    console.log("hello world");

}
console.log(typeof(myFunction))//but this is object function it just returns function
console.log(typeof(heroes))
console.log(typeof(myObj))
// type of null is object but it is a standalone value
////////////////////////////////////////////////
// Stack and Heap Memory
// Stack(Primitive) Heap(Non Primitive)
let bhushan="bhushan.jadhav";
let anothername =bhushan;
anothername= "guddi";
console.log(bhushan);
//heap me reference change hota hai