import React from 'react'
import user from '../../Images/Sample_User_Icon.png'
import './PlayerCss.css'
function PlayerComp() {
  return (
    <div>
        <div className='userCont d-flex'>
            <img src={user} alt='user' className='userImg m-auto' />
        </div>

    </div>
  )
}

export default PlayerComp