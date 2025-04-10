const score=400
const balance = new Number(100);
console.log(score);
console.log(balance.toString().length)
//using tofixed to show precision value in decimal(used more in ecommerce website)
console.log(balance.toFixed(2))
const othernum = 23.4567
const othernumm = 1123.5678
console.log(othernumm.toPrecision(3))//3 in precison baki exponential
const hundreds =10000
console.log(hundreds.toLocaleString('en-In'))
////////////MATHS////////////
console.log(Math);
//absolute value 
const price = 23.667
console.log(Math.abs(-5))
console.log(Math.round(price))
//math.ceil uses top value 
//math.floor uses lower value to control the round off decimal
//Math.min Math.mix very easy

//will always generate random between 0 to 1
//console.log(Math.random())
// this is way to avoid case where random number is 0.0X so multiply by 10 will also give 0 only
console.log((Math.random()*10)+1)// thus add 1

//smarter syntax way (where we have defined range case where we take input from user)
const max=25
const min=15
// we add min after wrapping random in fucntion because we have to set lower limit on range for random int to generate
console.log(Math.round(Math.random()*(max-min+1))+min)
