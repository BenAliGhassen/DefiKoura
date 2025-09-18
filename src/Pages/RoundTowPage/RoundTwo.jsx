import TimerComp from "../../Components/TimerComponent/TimerComp";
import { ScoreHolder } from "../../Components/ScoreHolderComponent/ScoreHolderComp";
import { useEffect, useState } from "react";
import { AgentCarrer } from "../../Questions/Agent";
import carrers from '../../Data/Carrers.json'
import AutoComp from "../../Components/AutoCompleteComponent/AutoComp";
import logosData from '../../Data/Logos.json'
import TeamLogosComp from "../../Components/TeamLogosComponent/TeamLogosComp";
import { Reponse } from "../../Questions/CheckAnswer";
import ButtonComp from "../../Components/ButtonComponent/ButtonComp";

const logo = logosData
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
const handleReponse = ()=>{
  console.log(players[Qnumber])
  const result = Reponse(players[Qnumber],rep)
  console.log(result)

  setTimeout(() => {
    setQnumber(prev => prev + 1 )
  }, 2000);

}


  return (
    <div>
      <ScoreHolder home={score1} away={score2} />
      <TimerComp Qnumber={Qnumber} ptry={0} setRep={setRep} setQnumber={setQnumber} />


  <div className="mb-5">
    {
    teams[Qnumber]?.map((team, index) => (


      <TeamLogosComp url={logo[team]?.github || ""} team={team} />

      ))
      }
  </div>
      <AutoComp 
      categ="player" 
      setchoix={setRep} 
      rep={rep}
      />
      <ButtonComp text={"Repondre"} onClick={handleReponse} />
    </div>
  );
}

export default RoundTwo;
