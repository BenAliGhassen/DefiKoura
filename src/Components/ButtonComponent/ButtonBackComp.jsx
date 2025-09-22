import React from 'react'
import './ButtonCss.css'
function ButtonBack({text,onClick}) {
  return (
    <div className='d-flex justify-content-end'>
        <button className='btnBack'
      onClick={onClick}
        >{text}</button>
    </div>
  )
}

export default ButtonBack