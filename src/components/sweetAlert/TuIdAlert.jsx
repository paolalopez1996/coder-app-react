import React from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const TuIdAlert = () => {
    useEffect(() => {
        mostrarId()
         },[])
         const mostrarId = () =>{
            Swal.fire({
                title: 'importante!',
                text: 'Guarda el siguiente codigo para futuro seguimiento de tu compra',
                icon: 'warning',
                confirmButtonText: 'ok'
              })
         } 
  return (
    <div></div>
  )
}

export default TuIdAlert