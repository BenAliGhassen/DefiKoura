import Swal from 'sweetalert2'

export const Faux =()=>{
     Swal.fire({
      icon: "error",
      title: "FAUX",
         background: 'rgba(0, 0, 0, 0)',
          timer: 3000, 
      showConfirmButton: false,
      timerProgressBar: true,
})
}