const name = "bhushan"
const IQ= 220

//String interpolation method to concat any string
console.log(`Hello my name is ${name} and my Iq is ${IQ}`);
if (IQ>210)(
    console.log(`hey ${name} you are genius`)
);
// String is object with key value pair 
console.log(name[0]);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('n'));
//substring (last inex wont be included)
const newName = name.substring(0,4);// no negative index in substring will start from negative
console.log(newName);
//slicing the string we can give negative value as well
const whatname = name.slice(-7,4);
console.log(whatname);
// extra spaces scenario very often

const newString= "  bhushan  "
console.log(newString.trim());
// used in the case where browser converts in urln coding but we want replace the url
const url= "https://bhushanblog.com/bhushan%20/jadhav"
console.log(url.replace('%20','-'));
console.log(url.includes('blog'));
console.log(url.split('/'))// splitting based on character
