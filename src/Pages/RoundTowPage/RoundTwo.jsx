import TimerComp from "../../Components/TimerComponent/TimerComp";
import { ScoreHolder } from "../../Components/ScoreHolderComponent/ScoreHolderComp";
import { useEffect, useState } from "react";
import { AgentCarrer } from "../../Questions/Agent";
import carrers from '../../Data/Carrers.json'
import { FaArrowRight } from "react-icons/fa";
import AutoComp from "../../Components/AutoCompleteComponent/AutoComp";


function RoundTwo() {
  
    const score1 = localStorage.getItem("ScoreJ1");
    const score2 = localStorage.getItem("ScoreJ2");

    const [players,SetPlayer] = useState([])
    const [teams,SetTeams] = useState([])
    const [league,setLeague] = useState([])
    const [Qnumber, setQnumber] = useState(0);
    const [rep, setRep] = useState("")

useEffect(()=>{
  const carrer = carrers
    const rounds = AgentCarrer()

    console.log(rounds)
   const playerNames = rounds.map(car => carrer[car].name);
   const teamName = rounds.map(car => carrer[car].teams);
   const leagues = rounds.map(car => carrer[car].league);
SetPlayer(playerNames);
SetTeams(teamName)
setLeague(leagues)
 
},[])
console.log(players[0]);
console.log(teams)
console.log(league[0])


  return (
    <div>
      <ScoreHolder home={score1} away={score2} />
      <TimerComp Qnumber={Qnumber} ptry={0} setRep={setRep} setQnumber={setQnumber} />


  <div className="mb-5">
    {
    teams[Qnumber]?.map((team, index) => (
   <div key={index} className="d-inline">
    <FaArrowRight className="mx-2"/>
    
    {team} 
  </div>
      ))
      }
  </div>
      <AutoComp 
      categ="player" 
      setchoix={setRep} 
      rep={rep}
      />
    </div>
  );
}

export default RoundTwo;
