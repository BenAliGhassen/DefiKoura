import React from 'react'

function ScoreComp({scoreJ1,scoreJ2,joueur1,joueur2}) {

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

    </div>
  )
}

export default ScoreComp