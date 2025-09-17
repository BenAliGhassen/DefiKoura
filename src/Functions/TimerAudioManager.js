import TimerAudio from '../Audio/30 Second Ticking Countdown Timer With Alarm.mp3';

const TimerSound = new Audio(TimerAudio)

export function Play(){
    if(TimerSound){
    TimerSound.pause();
    TimerSound.currentTime = 5;
    setTimeout(() => {
    TimerSound.play()
    }, 50);
    }

}

export function Stop(){
    TimerSound.pause()
}

export function ResetTimerAudio(){
    Stop()
    TimerSound.currentTime = 5
    Play()
}