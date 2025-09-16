import Swal from 'sweetalert2'

export const Correct =()=>{
      Swal.fire({
  title: "Correct",
  icon: "success",
   background: 'rgba(0, 0, 0, 0)',
    timer: 3000, 
  showConfirmButton: false, 
  timerProgressBar: true,
});
}