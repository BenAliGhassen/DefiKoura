import { useEffect, useState } from 'react';
import './TimerCss.css'
import { ResetTimerAudio } from '../../Functions/TimerAudioManager';
import { Faux } from '../../Alerts/FalseAlert';

function TimerComp({Qnumber,ptry,setRep,setQnumber,rep,guess,timeCount}) {
  
  const [time, setTime] = useState(timeCount);



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
   setQnumber(prev => prev + 1);
    setTime(timeCount);
    if(timeCount !==60){
      ResetTimerAudio()
      Faux(rep)
    } 
    setRep("");
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [time, Qnumber]);



 useEffect(()=>{
   if (Qnumber < 6 && ptry > 0) {
      if(timeCount !==60) ResetTimerAudio()
      setTimeout(() => {
      setTime(timeCount);
      setQnumber(prev => prev + 1);
      setRep("")
      }, 3700);
        }

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[ptry])

useEffect(()=>{
  if(guess !== 2 && time <= 10) setTime(prev => prev + 8)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[guess])


  const widthPercent = (time / timeCount) * 100;

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
