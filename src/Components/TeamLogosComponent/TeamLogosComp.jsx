import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function TeamLogosComp({url,team}) {
  return (
    <div className='d-inline'>
            <FaArrowRight className="mx-2"/>
             <img 
                src={url} 
                alt={`${team} logo`} 
                style={{ width: "100px", height: "100px" }}
                className="mx-2"
              />

    </div>
  )
}

export default TeamLogosComp