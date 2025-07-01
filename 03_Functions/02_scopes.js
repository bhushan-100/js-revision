// {} INDICATE SCOPE OF FUNCTION OR CONDITION OF THAT PROGRAM
//THIS IS BLOCK SCOPE WHICH IS IN IF BLOCK ANYTHING ELSE OUT OF IT IS GLOBAL SCOPE
if(true){
    let a = 1
    const b = 2
    var c = 3
    console.log("inner is ", a)
}

var c = 50
let a =100
//SCENARIO WHERE IF LOOP COULD BE IMPORTED FROM OTHER FILE AND USED HERE THIS IS PROBLEM WITH VAR
console.log(a)
//console.log(b)
//console.log(c)
function global(){
    const username="bhushan"
    function local(){
        const city= "dombivli"
        console.log(username);
    }
    //console.log(city) // because global one cant access inside local one
    local()
}
global()
//similar logic for IF BLOCK SCOPE we cant access variables or properties which are inside of if block