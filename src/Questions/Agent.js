import data from './Questions.json';



export const agent =()=>{
var table = []
var i = 0
while (i < 6){
    let nb = Math.floor(Math.random() * 130)
    if(!table.includes(nb)){
        table.push(nb)
        i++
    }
}

const questions = table
  .slice(0, 6)
  .map(id => data[id]);

  return questions
}