import TimerComp from "../../Components/TimerComponent/TimerComp";
import { useNavigate } from 'react-router-dom';
import { ScoreHolder } from "../../Components/ScoreHolderComponent/ScoreHolderComp";
import { useEffect, useState } from "react";
import { AgentCarrer } from "../../Questions/Agent";
import carrers from '../../Data/Carrers.json'
import AutoComp from "../../Components/AutoCompleteComponent/AutoComp";
import logosData from '../../Data/Logos.json'
import TeamLogosComp from "../../Components/TeamLogosComponent/TeamLogosComp";
import { Reponse } from "../../Questions/CheckAnswer";
import ButtonComp from "../../Components/ButtonComponent/ButtonComp";
import { Correct } from "../../Alerts/CorrectAlert";
import { Faux } from "../../Alerts/FalseAlert";
import { Play, Stop } from "../../Functions/TimerAudioManager";
import ScoreComp from "../../Components/ScoreComponent/ScoreComp";
import {ToRound2} from '../../Functions/NextRound'
import ButtonBack from "../../Components/ButtonComponent/ButtonBackComp";
import { RemoveItems } from "../../Functions/RemoveLocalItems";
import { RiArrowGoBackFill } from "react-icons/ri";


const logo = logosData
function RoundTwo() {
  
  const navigate = useNavigate();
    const score1 = parseInt(localStorage.getItem("ScoreJ1") || 0) ;
    const score2 =parseInt(localStorage.getItem("ScoreJ2") || 0) ;
    const joueur1 = localStorage.getItem("joueur1")
    const joueur2 = localStorage.getItem("joueur2")
    const [players,SetPlayer] = useState([])
    const [teams,SetTeams] = useState([])
    const [ptry,setTry] = useState(2)
    const [next, setNext] = useState(0)
    const [Qnumber, setQnumber] = useState(0);
    const [rep, setRep] = useState("")
    const [scoreJ1 , setScoreJ1] = useState(score1)
    const [scoreJ2 , setScoreJ2] = useState(score2)
    const [show, setShow] = useState(false);
    
useEffect(()=>{
      const carrer = carrers
      
    const rounds = AgentCarrer() || []

  const validRounds = rounds.filter(car => carrer[car])

  const playerNames = validRounds.map(car => carrer[car].name)
  const teamName = validRounds.map(car => carrer[car].teams)

SetPlayer(playerNames);
SetTeams(teamName)

},[])

useEffect(()=>{

  if(Qnumber >= 5){
   Stop() 
  }

},[Qnumber])


  useEffect(()=>{

    setTry(2)

    },[next])



useEffect(() => {
    setShow(true);
    Play()
    
  return () => {
    Stop()
  }
  }, []);
    if (!show) return null;


const handleReponse = ()=>{

  const result = Reponse(players[Qnumber],rep)
  
  if(result === "Correct"){
    Correct()
    if(Qnumber%2 !== 0){
      setScoreJ1(prev => prev + 1)
    }else{
      setScoreJ2(prev => prev + 1)
    }
    setNext(prev => prev + 1)
  }else {

    if(ptry%2 === 0){
      Faux("Try again")
    }else{
      setNext(prev => prev + 1)
      Faux(players[Qnumber])
    }
    setTry(prev => prev + 1)
    
  }}
  return (
    <div>
    {Qnumber < 5 ? 
  <div>
      <ScoreHolder home={scoreJ1} away={scoreJ2} />

      <ButtonComp text={<RiArrowGoBackFill />} onClick={RemoveItems} />
      <TimerComp 
      Qnumber={Qnumber} 
      ptry={next} 
      setRep={setRep} 
      setQnumber={setQnumber} 
      rep={players[Qnumber]}
      guess={ptry}
      />

  <div className="mb-5">
    {
    teams[Qnumber]?.map((team, index) => (


      <TeamLogosComp key={index} url={logo[team]?.github || ""} team={team} />

      ))
      }
  </div>
      <AutoComp 
      categ="player" 
      setchoix={setRep} 
      rep={rep}
      />
      <ButtonComp text={"Repondre"} onClick={handleReponse} />
  </div>  :
  
  <div>
    <ScoreComp
    scoreJ1={scoreJ1} 
    scoreJ2={scoreJ2} 
    joueur1={joueur1} 
     joueur2={joueur2}
    />

  <ButtonComp text={"Next"} onClick={()=>{ToRound2(scoreJ1,scoreJ2,navigate,"/")}} />
  <ButtonBack text={<RiArrowGoBackFill />} onClick={RemoveItems} />
  </div>
  }
    </div>
  );
}

export default RoundTwo;
