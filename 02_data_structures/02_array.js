const marvel =['spiderman','thor','ironman']
const DC=['batman','superman','flash']
//marvel.push(DC)
//console.log(marvel)
ALL_HERO= marvel.concat(DC)
//console.log(ALL_HERO)
const all_new_heros=[...marvel,...DC]
console.log(all_new_heros)

const another_array =[1,2,3,[4,5,6],7,8,[9,[10,11]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)

//USED FOR WEB SCRAPING
//TO CONVERT GIVEN DATA IN ARRAY FORMAT
console.log(Array.from("bhushan"))
console.log(Array.from({name:"bhushan"})) //unique IT doesnt understands if ther key value pair or not
let score1 =80
let score2 =90
let score3 =10
console.log(Array.of(score1,score2,score3))
