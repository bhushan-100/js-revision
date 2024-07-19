
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
//reason is equality check == and comparisons >= <= work differently
//comparisons convert null to number ,treating as 0
//thats why (3) null>=0 is true and null>0 is false 
// null == 0 here null is nott converted to any number and thus false
//strict check === checks value and datatype
console.log("2">1)
console.log("2" === 2)