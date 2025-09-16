export function Reponse(rep,choix) {
    console.log(rep,' / ', choix)
    if(rep.toLowerCase() === choix.toLowerCase()){
        return "Correct"
    }else{
        return "Faux"
    }
}