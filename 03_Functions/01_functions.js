function name(){
    console.log("function")
}
name //exectute
//function addNums(num1,num2){  //PARAMETERS ARE USED WHEN WE DEFINE FUNCTION
  //  console.log(num1 + num2);
//}
function addNums(num1,num2){  //PARAMETERS ARE USED WHEN WE DEFINE FUNCTION
    
    let result = (num1 + num2)
    return result
    //result ke bad kuch nhi hota
}
//addNums(3,"a") //THIS IS ARGUMENT(VALUES)
const result= addNums(1,3)
console.log("Result is ", result)
function justloggedin(username){
  if(!username){
    console.log("please enter a username");
    return
  }
  return `${username} just logged in`
}
//console.log(justloggedin())// undefined when no param is given to function
//REST OPERATOR
function calculatecartprice(val1,val2,...num1){
  return  num1
}
console.log(calculatecartprice(400,500,600,1000))
const item = {
  itemname : "heater",
  price: 999
}
function handleObject(item){
  console.log(`item is ${item.itemname} and its price is ${item.price}`)
  return
}
handleObject(item)
//but if obect has name PRICES and we pass PRICE in JS it cant check 
const myNewarray =[4,5,6,7]
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(myNewarray))