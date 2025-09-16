import './TimerCss.css'

function TimerComp({time, widthPercent}) {


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
