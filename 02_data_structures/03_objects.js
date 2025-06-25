// singleton constructor se banega to singleton banega

//object literal
const mySym = Symbol("key1")
const person = {
    name : "Bhushan",
    age :20,
    location :"Dombivli",
    "full address": "Old dombivli",
    //wrong way
    
    //correct way
    [mySym] : "mykey1",
    email: "bhushanjadhav.works@google.com",
    isLoggedin : false,
    lastLogin:["Monday","Wednesday"]
}
//symbol

console.log(person.location)
console.log(person["location"])
console.log(person["full address"])// you can only use square notation in case of identifier
// Question take a symbol and use it as key in the object
console.log(person[mySym])// string le rha hai

person.email = "bhushan.jadhav@google.com"//change will happen
// to freeze the object use


// In Javascript you can use function as variable
person.greeting =  function(){
    console.log(`Hello, ${this.name}`)

}
console.log(person.greeting())
