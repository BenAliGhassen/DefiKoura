import TimerComp from "../../Components/TimerComponent/TimerComp";
import { ScoreHolder } from "../../Components/ScoreHolderComponent/ScoreHolderComp";
import { useEffect, useState } from "react";
import { AgentCarrer } from "../../Questions/Agent";
import carrers from '../../Data/Carrers.json'
import { normalizeString } from "../../Questions/CheckAnswer";

function RoundTwo() {
  
    const score1 = localStorage.getItem("ScoreJ1");
    const score2 = localStorage.getItem("ScoreJ2");

    const [players,SetPlayer] = useState([])
    const [teams,SetTeams] = useState([])
    const [Qnumber, setQnumber] = useState(0);
    const [rep, setRep] = useState("")

useEffect(()=>{
  const carrer = carrers
    const rounds = AgentCarrer()

    console.log(rounds)
   const playerNames = rounds.map(car => carrer[car].name);
   const teamName = rounds.map(car => carrer[car].teams);
SetPlayer(playerNames);
SetTeams(teamName)

 
},[])
console.log(players[0]);
console.log(teams)
  return (
    <div>
      <ScoreHolder home={score1} away={score2} />
      <TimerComp Qnumber={Qnumber} ptry={0} setRep={setRep} setQnumber={setQnumber} />


  <div>
    {
    teams[Qnumber]?.map((team, index) => (
   <p key={index} className="d-inline">
  --&gt; {normalizeString(team)} 
  </p>
      ))
      }
  </div>
    </div>
  );
}

export default RoundTwo;
