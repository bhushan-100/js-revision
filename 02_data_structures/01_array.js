//arrays
const newArr =[1,2,3,4]
//imp points to notes
//1.Resizable, can contain diff data types
//2.Not associative arrays : YOU CAN ONLY STORE THE VALUES WHICH YOU CAN RETRIEVE USING INDEX
   //ASSOCIATIVE ARRAYS: ARRAY INDEX VALUE CAN BE NON INTEGER TYPE: VARCHAR AND INTEGER ARE SUPPORTED
//3. Zero indexed
//4.array copy operations create shallow copies(property share same reference)

//ARRAY METHODS////
newArr.push(6)
//console.log(newArr)
//pop works reverse
newArr.unshift(9)
//console.log(newArr)
//console.log(newArr.includes(9))
//const myArr = newArr.join()
// concatenate all the elements of an array into a single string
myArr = newArr.concat(5,6,7)
console.log(typeof(myArr))
//slice spice (imp one)
console.log("A", myArr); //original array

const myn1 =myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr);
const myn2 =myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)
// Slice me range include hoti hai aur splice me nahi hoti this is wrong answer
// Thus splice manipulates original array SLice doesnt manipulate
