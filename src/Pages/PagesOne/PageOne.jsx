import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PlayerComp from '../../Components/PlayerComponent/PlayerComp';
import NavBarComp from '../../Components/NavBarComponent/NavBarComp';
import ButtonComp from '../../Components/ButtonComponent/ButtonComp';
import VersusComp from '../../Components/VersusComponent/VersusComp';
import FieldComp from '../../Components/TextFieldsComponent/FieldComp';

function PageOne() {
  const navigate = useNavigate();

 const [joueur1, setJoueur1] = useState("")
const [joueur2, setJoueur2] = useState("")

localStorage.setItem("joueur1",joueur1)
localStorage.setItem("joueur2",joueur2)
  return (
    <div>
      <NavBarComp />

      <div className="d-flex justify-content-between px-3 py-2 mt-5">
        <div>
          <PlayerComp />
          <FieldComp nb={1} setPlayer={setJoueur1} />
        </div>

        <VersusComp />

        <div>
          <PlayerComp />
          <FieldComp nb={2} setPlayer={setJoueur2}/>
        </div>
      </div>

      <div className="text-center mt-4">
        {
          joueur1.length > 0 && joueur2.length > 0 ? <ButtonComp
          text="jouer"
          onClick={() => navigate('/RoundOne')}
        /> : 
        ""
        }
      </div>
    </div>
  );
}

export default PageOne;
