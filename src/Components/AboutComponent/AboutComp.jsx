import React from 'react'
import './AboutCss.css'
import dinho from '../../Images/dinho10.png'
import ball from '../../Images/ftball.png'
function AboutComp() {
  return (
    <div className='About'>
        <img src={dinho} alt='ronaldinho' className='Dinho' />


        <div className='reglesCont'>
        <img src={ball} alt='ball' className='ball2' />
        <h1 className='title mt-auto mb-2'>C’est Quoi le Jeu</h1>
        </div>
        
        <p className='text-white aboutText'>Un duel 1v1 en 3 manches :
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