import data from './Questions.json';



export const agent =()=>{
var table = []
var i = 0
while (i < 5){
    let nb = Math.floor(Math.random() * 130)
    if(!table.includes(nb)){
        table.push(nb)
        i++
    }
}
console.log(table)
    console.log(data[table[0]].question)
    console.log(data[table[0]].answer)
}