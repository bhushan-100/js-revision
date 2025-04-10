let myDate = new Date()
//DATE IS OBJECT TYPE IN JAVASCRIPT
console.log(myDate.toDateString())
console.log(myDate.toJSON())
let createddate = new Date("2023-01-14")//month start from 0 
console.log(createddate.toLocaleString())

//let timestamp= Date.now()
//console.log(createddate.getTime());// gives total millseconds from defined date 
//console.log(Math.floor(Date.now()/1000));// gives total millseconds from defined date 
console.log(createddate.getDay())// index Sunday 0 
// we can define object and parameters
console.log(myDate.toLocaleString('default',{
timeZone:'Asia/Kolkata',
weekday:'long'
})) 

