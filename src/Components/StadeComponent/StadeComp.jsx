import React from 'react'
import stade from '../../Images/stadeFb.jpg'
import './StadeCss.css'
function StadeComp() {
  return (
    <div className='container d-flex justify-content-center'>
        <img src={stade} alt='stade' className='stade' />

    </div>
  )
}

export default StadeComp