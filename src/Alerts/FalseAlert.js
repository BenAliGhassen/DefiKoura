import Swal from 'sweetalert2'
import FalseAudio from '../Audio/Wrong Sound, Background Sound Effect  Funny Sounds  Background Music  No Copyright Sound.mp3'

export const Faux =(rep)=>{
const audio = new Audio(FalseAudio);

audio.currentTime = 1.3;
audio.play().catch(err => console.error("Audio play error:", err));
     Swal.fire({
      icon: "error",
      title: "FAUX",
      text : `${rep}`,
         background: 'rgba(0, 0, 0, 0)',
          timer: 3000, 
      showConfirmButton: false,
      timerProgressBar: true,
      allowOutsideClick: false
});
}