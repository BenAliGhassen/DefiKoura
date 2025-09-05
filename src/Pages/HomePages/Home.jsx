import React from 'react'
import NavBarComp from '../../Components/NavBarComponent/NavBarComp'
import AboutComp from '../../Components/AboutComponent/AboutComp'
import ReglesComp from '../../Components/ReglesComponent/ReglesComp'
import StadeComp from '../../Components/StadeComponent/StadeComp'
import ButtonComp from '../../Components/ButtonComponent/ButtonComp'

function Home() {
  return (
    <div>
        <NavBarComp/>
        <AboutComp/>
        <ReglesComp/>
        <StadeComp/>
        <ButtonComp/>
    </div>
  )
}

export default Home