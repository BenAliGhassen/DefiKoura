export function RemoveItems(){
    localStorage.removeItem('joueur1');
    localStorage.removeItem('joueur2');
    localStorage.removeItem('ScoreJ1');
    localStorage.removeItem('ScoreJ2');
    window.location.href = '/'
}