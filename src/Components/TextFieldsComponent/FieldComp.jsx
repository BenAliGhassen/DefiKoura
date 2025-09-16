import React from 'react';
import './FieldComp.css'
const FieldComp = ({nb,setPlayer}) => {
    return (
        <div className='d-flex'>
            <input type='text' className='m-auto PlayerName'  placeholder={`Joueur ${nb}`}
            onChange={(e)=>setPlayer(e.target.value)}
            />
        </div>
    );
}

export default FieldComp;
