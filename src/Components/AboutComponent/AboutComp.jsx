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
        
        <p className='text-white aboutText'>
         Un jeu entre amis 
        <br/>
         Un match se compose de 3 manches
        <br/>
        Celui avec le plus de points gagne.
        <br/>
        1V1
        <br/>
        Des questions de football
          
          </p>
        <hr className='mt-5 line'/>
        </div>
  )
}

export default AboutComp