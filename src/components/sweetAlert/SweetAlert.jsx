import React from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlert = () => {
    useEffect(() => {
        mostrarAlerta()
         },[])
         const mostrarAlerta = () =>{
            Swal.fire({
                title: 'Error!',
                text: 'NO HAY PRODUCTOS EN EL CARRITO',
                icon: 'error',
                confirmButtonText: 'ok'
              })
         } 
  return (
    <div></div>
  )
}

export default SweetAlert