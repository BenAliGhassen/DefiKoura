import React from 'react'
import './AboutCss.css'
import dinho from '../../Images/dinho10.png'
import ball from '../../Images/ftball.png'
function AboutComp() {
  return (
    <div className='About mt-5'>
        <img src={dinho} alt='ronaldinho' className='Dinho' />


        <div className='reglesCont container'>
        <img src={ball} alt='ball' className='ball2' />
        <h2 className='title mt-auto mb-auto'>C’est Quoi le Jeu</h2>
        </div>
        
        <p className='text-white'>Un duel 1v1 en 3 manches :
            <br/>
           - questions-réponses
            <br/>
            - devine le joueur
            <br/>
            - les enchères
            <br/>
             quiz, devine le joueur, question finale.</p>
        <hr className='mt-5'/>
        </div>
  )
}

export default AboutComp