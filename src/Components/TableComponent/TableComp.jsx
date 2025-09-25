import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './TableCss.css'
function TableComp({rep,rank,setRanking,Qnumber}) {


const [repsonses,setReponses] = useState( [
     { col1: 1, col2: 4 },
    { col1: 2, col2: 5 },
    { col1: 3, col2: "." }
])

useEffect(() => {
  setReponses(prev => {
    const newArr = [...prev];
    if (rank < 3) {
      newArr[rank] = { ...newArr[rank], col1: rep};
    } else {
      newArr[rank - 3] = { ...newArr[rank - 3], col2: rep};
    }
    return newArr;
  });
}, [rep, rank]); 


useEffect(() => {
  if (repsonses.length > 0) {
    if (rank < 3 && repsonses[rank]) {
      //console.log(repsonses[rank].col1);
    } else if (rank >= 3 && repsonses[rank - 3]) {
      //console.log(repsonses[rank - 3].col2);
    }
  }
}, [repsonses, rank]);


useEffect(()=>{
    setRanking(null)
    setReponses([
     { col1: 1, col2: 4 },
    { col1: 2, col2: 5 },
    { col1: 3, col2: "." }
])
},[Qnumber])



  return (
    <div className='container'>
        <Table bordered className='w-75 m-auto text-center mb-5'>
      <tbody>
        {
         repsonses.map((nb,index)=>(
        <tr key={index}>
        <td>
          {index === rank ? rep : nb.col1}
        </td>

        <td>
          {index === rank -3 && rank >= 3 ? rep : nb.col2}
        </td>

        </tr>
        ))
        }
      </tbody>
    </Table>
    </div>
  )
}

export default TableComp