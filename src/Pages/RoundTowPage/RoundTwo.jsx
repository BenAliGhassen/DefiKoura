import React from 'react'
import TimerComp from '../../Components/TimerComponent/TimerComp'
import { ScoreHolder } from '../../Components/ScoreHolderComponent/ScoreHolderComp'

function RoundTwo() {
  const score1 = localStorage.getItem("ScoreJ1")
  const score2 = localStorage.getItem("ScoreJ2")
  return (
    <div>
        <ScoreHolder home={score1} away={score2}/>
        <TimerComp/>
    </div>
  )
}

export default RoundTwo