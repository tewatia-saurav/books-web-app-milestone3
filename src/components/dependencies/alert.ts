import swal from  'sweetalert2'

export const fireAlert = (title:string, text:string, icon:any, buttonText =  'OK!') =>{
    swal.fire({
        title: title,
        text : text,
        icon : icon,
        confirmButtonText: buttonText,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

export const confirmDelete = (title:string, text:string, icon:any, buttonText =  'OK!') =>{
  let response = null;
  swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      return true
    }
    return false
  })
}
