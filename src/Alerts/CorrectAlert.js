import CorrectAudio from '../Audio/Correct Sound Effect  Bgm & Sound Effect.mp3'
import Swal from 'sweetalert2'

export const Correct =()=>{
  const audio = new Audio(CorrectAudio)
      Swal.fire({
  title: "Correct",
  icon: "success",
   background: 'rgba(0, 0, 0, 0)',
    timer: 3000, 
  showConfirmButton: false, 
  timerProgressBar: true,
  allowOutsideClick: false
});
audio.play().catch(err => console.error("Audio play error:", err));
}