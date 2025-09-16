import React from 'react'
import './ReglesCss.css'
import ref from '../../Images/arbitre.png'
function ReglesComp() {
  return (
    <div className='mt-5 regles'>
          <div className='reglesCont container'>
        <img src={ref} alt='arbitre' className='ref' />
        <h1 className='text-white mt-auto mx-5'>Regles de jeu</h1>
          </div>
          <div className='RegCont m-auto mt-5'>
            <ol className='textIn'>
                <li>Répondez correctement aux questions de foot.
                <br/>👉 Vous avez 3 questions chacun.</li>
                <li>Devinez le joueur à partir de sa carrière.
                <br/>👉 Vous avez 2 essais.</li>
                <li>Une enchère : qui peut citer le plus de réponses en 30 secondes.
                <br/>👉 Vous n’avez qu’un seul essai.</li>
            </ol>
          </div>
          <hr className='mt-5 line'/>
    </div>
  )
}

export default ReglesComp