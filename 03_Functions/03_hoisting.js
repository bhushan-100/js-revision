console.log(addone(1))
//in first one JUST DECLARATION OF the function SO I CAN EXECUTE FUNCTION BEFORE ALSO
function addone(num){
    return num + 1; 
}
// THIS IS INITALIASING THE FUNCTION AND STORING IT IN A VARIABLE
//INITIALISATION ARE NOT HOISTED
//addtwo(1) this will create as addtwo is initialised later
const addtwo = function(num){
    return num +2;
}
console.log(addtwo(1))// this will work
