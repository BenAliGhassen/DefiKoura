import './ScoreHolderCss.css'
export function ScoreHolder({home,away}) {

const joueur1 = localStorage.getItem('joueur1')
const joueur2 = localStorage.getItem('joueur2')
  return (
    <div className="ticker">
      <div className="team home">{joueur1}</div>
      <div className="score">{home? home : 0} - {away? away : 0}</div>
      <div className="team away">{joueur2}</div>
    </div>
  );
}
