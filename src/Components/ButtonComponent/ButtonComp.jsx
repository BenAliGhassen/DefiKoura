import React from 'react'
import './ButtonCss.css'
function ButtonComp({text,onClick}) {
  return (
    <div className='container d-flex mt-5'>
        <button className='btnJ m-auto mb-5'
      onClick={onClick}
        >{text}</button>
    </div>
  )
}

export default ButtonComp