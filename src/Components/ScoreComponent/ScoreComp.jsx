import React from 'react'
import ButtonComp from '../ButtonComponent/ButtonComp'
import { ToRound2 } from '../../Functions/NextRound'
import { useNavigate } from "react-router-dom";

function ScoreComp({scoreJ1,scoreJ2,joueur1,joueur2}) {
const navigate = useNavigate();
  return (
    
    <div>
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "75vh" }}>
          <h1>
    Score : 
    <span className="mx-4">{joueur1}</span>
    {scoreJ1} -
    <span className="mx-4">{joueur2}</span>
    {scoreJ2}
  </h1>
        </div>
  <ButtonComp text={"Next"} onClick={()=>{ToRound2(scoreJ1,scoreJ2,navigate)}} />
    </div>
  )
}

export default ScoreComp