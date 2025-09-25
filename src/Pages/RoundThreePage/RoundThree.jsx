import React, { useEffect, useState } from 'react'
import TimerComp from '../../Components/TimerComponent/TimerComp'
import TableComp from '../../Components/TableComponent/TableComp'
import { AgentFamilly } from '../../Questions/Agent'
import QustionComp from '../../Components/QuestionComponent/QustionComp'
import AutoComp from '../../Components/AutoCompleteComponent/AutoComp'
import ButtonComp from '../../Components/ButtonComponent/ButtonComp'
import { Reponse } from '../../Questions/CheckAnswer'
import { Correct } from '../../Alerts/CorrectAlert'
import { Faux } from '../../Alerts/FalseAlert'
import { ScoreHolder } from '../../Components/ScoreHolderComponent/ScoreHolderComp'
import ScoreComp from '../../Components/ScoreComponent/ScoreComp'
import ButtonBack from '../../Components/ButtonComponent/ButtonBackComp'
import { RiArrowGoBackFill } from "react-icons/ri";
import { RemoveItems } from '../../Functions/RemoveLocalItems'

function RoundThree() {

  const score1 = parseInt(localStorage.getItem("ScoreJ1") || 0);
  const score2 = parseInt(localStorage.getItem("ScoreJ2") || 0);
  const joueur1 = localStorage.getItem("joueur1");
  const joueur2 = localStorage.getItem("joueur2");

  const [scoreJ1, setScoreJ1] = useState(score1);
  const [scoreJ2, setScoreJ2] = useState(score2);

  const [Qnumber, setQnumber] = useState(0);
  const [rep, setRep] = useState("");
  const [ptry, setTry] = useState(0);
  const [ranking, setRanking] = useState(null);

  const [questions, setQuestions] = useState(AgentFamilly() || []);
  const [answers, setAnswers] = useState(questions?.[0]?.answers || []);

  useEffect(() => {
    if (questions[Qnumber]) {
      setAnswers(questions[Qnumber].answers);
    }
  }, [Qnumber, questions]);

  const handleReponse = () => {
    let Iscorrect = false;
    let tour = ptry + 1;
    setTry(prev => prev + 1);

    answers.forEach((answer, index) => {
      if (Reponse(answer.answer, rep) === "Correct") {
        setRanking(index);
        Iscorrect = true;
        Correct();
        if (tour % 2 !== 0) {
          setScoreJ1(prev => prev + (answer.points / 5) * (Qnumber + 1));
        } else {
          setScoreJ2(prev => prev + (answer.points / 5) * (Qnumber + 1));
        }
      }
    });

    if (!Iscorrect) {
      Faux("yadi chbik");
    }
  };

  return (
    <div>
      {Qnumber < 3 ? (
        <div>
          <ScoreHolder home={scoreJ1} away={scoreJ2} />

          <TimerComp
            Qnumber={0}
            ptry={0}
            setRep={setRep}
            setQnumber={setQnumber}
            rep={rep}
            guess={2}
            timeCount={70}
          />

          {questions[Qnumber] && (
            <QustionComp question={questions[Qnumber].question} />
          )}

          <TableComp
            rep={answers[ranking || 0]?.answer}
            rank={ranking}
            setRanking={setRanking}
            Qnumber={Qnumber}
          />

          <AutoComp
            categ={questions[Qnumber]?.category}
            setchoix={setRep}
            rep={rep}
          />

          <ButtonComp text={"Repondre"} onClick={handleReponse} />
        </div>
      ) : (
        <div>
            <ScoreComp
          scoreJ1={scoreJ1}
          scoreJ2={scoreJ2}
          joueur1={joueur1}
          joueur2={joueur2}
        />
        <ButtonBack text={<RiArrowGoBackFill />} onClick={RemoveItems} />
        </div>
      )}
    </div>
  );
}

export default RoundThree;
