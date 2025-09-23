import { useEffect, useState } from 'react';
import './TimerCss.css'
import { ResetTimerAudio } from '../../Functions/TimerAudioManager';
import { Faux } from '../../Alerts/FalseAlert';

function TimerComp({Qnumber,ptry,setRep,setQnumber,rep,guess}) {
  
  const [time, setTime] = useState(30);



useEffect(() => {
    const interval = setInterval(() => {
    setTime(prevTime => {
      if (prevTime > 0) return prevTime - 1;
      else return 0;
    });
  }, 1000);
  return () => {
    clearInterval(interval);
  }
  }, []);


useEffect(() => {
  if (time === 0 && Qnumber < 6) {
    console.log(guess)
    if(guess%2 === 0){
      setQnumber(prev => prev + 1);
    }
    setTime(30);
    Faux(rep)
    ResetTimerAudio()
    setRep("");
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [time, Qnumber]);



 useEffect(()=>{
   if (Qnumber < 6 && ptry > 0) {
      ResetTimerAudio()
      setTimeout(() => {
      setTime(30);
      setQnumber(prev => prev + 1);
      setRep("")
      }, 3700);
        }

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[ptry])




  const widthPercent = (time / 30) * 100;

  return (
    <div className='timer mx-auto mt-5 mb-5'>
      <div className='time' 
      style={{ width: `${widthPercent}%` }}
      >
        <h5 className='m-0'>{time}</h5>
      </div>
    </div>
  );
}

export default TimerComp;
