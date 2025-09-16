import React, { useState, useEffect } from "react";
import AutoComp from "../../Components/AutoCompleteComponent/AutoComp";
import { agent } from "../../Questions/Agent";
import TimerComp from "../../Components/TimerComponent/TimerComp";
import QustionComp from "../../Components/QuestionComponent/QustionComp";
import ButtonComp from "../../Components/ButtonComponent/ButtonComp";
import { Reponse } from "../../Questions/CheckAnswer";
import { Correct } from "../../Alerts/CorrectAlert";
import { Faux } from "../../Alerts/FalseAlert";
import ScoreComp from "../../Components/ScoreComponent/ScoreComp";

const Questions = agent();

function RoundOne() {
  const [time, setTime] = useState(30);
  const [show, setShow] = useState(false);
  const [Qnumber, setQnumber] = useState(0);
  const [rep, setRep] = useState("")
  const [scoreJ1 , setScoreJ1] = useState(0)
const [scoreJ2 , setScoreJ2] = useState(0)

const joueur1 = localStorage.getItem("joueur1")
const joueur2 = localStorage.getItem("joueur2")



  useEffect(() => {
    setShow(true);

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!show) return null;

  const widthPercent = (time / 30) * 100;

  const handleReponse = () => { 
    const result = Reponse(Questions[Qnumber]?.answer, rep);
    console.log(result);
    if (result === "Correct") {
        Correct()
        if(Qnumber%2 !== 0){
          setScoreJ1(prev => prev + 1)
        }else{
           setScoreJ2(prev => prev + 1)
        }
    } else {
      Faux()
    }

if (Qnumber < 6) {
  setTimeout(() => {
    setTime(30);
    setQnumber(prev => prev + 1);
    setRep("")
  }, 3200);
        }
  };

  return (
    <div>
      { Qnumber < 6 ? 
    (
     <div>
      <h1>Tour de { (Qnumber%2 !== 0 ) ? joueur1 : joueur2}</h1>


      <TimerComp time={time} widthPercent={widthPercent} />
      
      {time === 0 && (
        <>
          {setTime(30)}
          {setQnumber((prev) => prev + 1)}
        </>
      )}
      <QustionComp question={Questions[Qnumber]?.question || ""} />
      <AutoComp categ={Questions[Qnumber]?.category || ""} setchoix={setRep} />

      <ButtonComp text={"Repondre"} onClick={handleReponse} />
      </div>
    ) : <ScoreComp scoreJ1={scoreJ1} scoreJ2={scoreJ2} joueur1={joueur1} 
                    joueur2={joueur2}
    />
    
    }

    </div>
  );
}

export default RoundOne;
