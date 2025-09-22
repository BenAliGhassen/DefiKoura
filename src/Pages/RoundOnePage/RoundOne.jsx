import React, { useState, useEffect} from "react";
import AutoComp from "../../Components/AutoCompleteComponent/AutoComp";
import { agent } from "../../Questions/Agent";
import TimerComp from "../../Components/TimerComponent/TimerComp";
import QustionComp from "../../Components/QuestionComponent/QustionComp";
import ButtonComp from "../../Components/ButtonComponent/ButtonComp";
import { Reponse } from "../../Questions/CheckAnswer";
import { Correct } from "../../Alerts/CorrectAlert";
import { Faux } from "../../Alerts/FalseAlert";
import ScoreComp from "../../Components/ScoreComponent/ScoreComp";
import { Play, Stop } from "../../Functions/TimerAudioManager";
import { ScoreHolder } from "../../Components/ScoreHolderComponent/ScoreHolderComp";
import TourComp from "../../Components/TourComponent/TourComp";
import { RemoveItems } from "../../Functions/RemoveLocalItems";
import { useNavigate } from "react-router-dom";
import {ToRound2} from '../../Functions/NextRound'
import { RiArrowGoBackFill } from "react-icons/ri";
import ButtonBack from "../../Components/ButtonComponent/ButtonBackComp";

const Questions = agent();

function RoundOne() {

  const [Qnumber, setQnumber] = useState(0);
  const [show, setShow] = useState(false);
  const [rep, setRep] = useState("")
  const [ptry,setTry] = useState(0)
  const [scoreJ1 , setScoreJ1] = useState(0)
const [scoreJ2 , setScoreJ2] = useState(0)
const joueur1 = localStorage.getItem("joueur1")
const joueur2 = localStorage.getItem("joueur2")

const navigate = useNavigate();

useEffect(() => {
  if (Qnumber >= 6) {
    Stop();
  }
}, [Qnumber]);


useEffect(() => {
    setShow(true);
    Play()
    
  return () => {
    Stop()
  }
  }, []);
    if (!show) return null;

 

  const handleReponse = () => { 
    setTry(prev => prev +1)
    if (Reponse(Questions[Qnumber]?.answer, rep) === "Correct") {
        Correct()
        if(Qnumber%2 !== 0){
          setScoreJ1(prev => prev + 1)
        }else{
           setScoreJ2(prev => prev + 1)
        }
    } else {
      Faux(Questions[Qnumber].answer)
    }
    };


 
  return (
    <div>
      { Qnumber < 6 ? 
    (
     <div>
      <ScoreHolder home={scoreJ1} away={scoreJ2}/>
      <div className="container">
      <ButtonBack text={<RiArrowGoBackFill />} onClick={RemoveItems} />
      <TourComp joueur={(Qnumber%2 !== 0 ) ? joueur1 : joueur2} />
      </div>
      <TimerComp 
      Qnumber={Qnumber} 
      ptry={ptry}
      setRep={setRep}
      setQnumber={setQnumber}
      rep={Questions[Qnumber]?.answer}
      />
      <QustionComp question={Questions[Qnumber]?.question || ""} />
      <AutoComp 
      categ={Questions[Qnumber]?.category || ""} 
      setchoix={setRep} 
      rep={rep}
      />
      <ButtonComp text={"Repondre"} onClick={handleReponse} />
      </div>
    ) : 
      <div>
            <ScoreComp 
    scoreJ1={scoreJ1} 
    scoreJ2={scoreJ2} 
    joueur1={joueur1} 
     joueur2={joueur2}
    />
    <ButtonComp text={"Next"} onClick={()=>{ToRound2(scoreJ1,scoreJ2,navigate,"/RoundTwo")}} />
    <ButtonBack text={<RiArrowGoBackFill />} onClick={RemoveItems} />
      </div>
    }
    </div>
  );
}

export default RoundOne;
