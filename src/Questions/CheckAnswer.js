function normalizeString(str) {
  return str
    .normalize("NFD")            // décompose les caractères accentués en lettre + accent
    .replace(/[\u0300-\u036f]/g, "") // supprime les accents
    .toLowerCase();              // convertit en minuscules
}

export function Reponse(rep,choix) {
    if(normalizeString(rep) === normalizeString(choix)){
        return "Correct"
    }else{
        return "Faux"
    }
}