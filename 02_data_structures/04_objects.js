//singleton orn using constructor
const instaUser = {}
instaUser.id = "123"
instaUser.name = "ram"
instaUser.isLoggedIn = false
console.log(instaUser)
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(instaUser.hasOwnProperty('name'))
// Objects inside object
const Regularuser = {
    email: "some@gmail.com",
    fullname:{
           firstname:"hitesh",
           lastname:"jadhav"
    }
}
//console.log(Regularuser.fullname)
const obj1 = {1:"R", 2:"Q"}
const obj2 = {3:"P", 4:"S"}
// const obj3 = Object.assign({}, obj1, obj2)[1]// here {} empty object is target and any objects beyond that are sources for assign operation
// WE USE SPREAD OPERATOR IN REAL LIFE
const obj3= {...obj1, ...obj2}

//console.log(obj3)
// When we get values from dataset
//SO WE KNOW WE GET COMMA SEPERATED VALUES (CSV) IN FORM OF ARRAY WHEN WE FETCH DATA FROM DATABASE
const users= [
    {
        id :"1",
        name :"bhushan",

    },
    {
        id :"2",
        name :"ram",
        
    },
    {
        id :"3",
        name :"sam",
        
    },
    {
        id :"4",
        name :"Ron",
        
    }
]