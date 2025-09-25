import data from './Questions.json';
import DataFam from './FamillyFeudQs.json'


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


export const AgentCarrer =()=>{
var table = []
var i = 0
while (i < 5){
    let nb = Math.floor(Math.random() * 998)
    if(!table.includes(nb)){
        table.push(nb)
        i++
    }
}


  return table
}

export const AgentFamilly =()=>{
var table = []
var i = 0
while (i < 3){
    let nb = Math.floor(Math.random() * 50)
    if(!table.includes(nb)){
        table.push(nb)
        i++
    }
}

const questions = table
  .slice(0, 3)
  .map(id => DataFam[id]);

  return questions

}