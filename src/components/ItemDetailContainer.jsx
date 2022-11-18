import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";
import { collectionProd } from '../services/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { idProducto } = useParams();
   
    useEffect(() => {
      // const getProduct = () => {
        //       return new Promise((res, rej) => {
        //         const productDetalles = products.find((prod)=>prod.id === idProducto)
        //         const ref = idProducto ? productDetalles : products;
        //           setTimeout(() => {
        //               res(ref);
        //           }, 800);
        //       });
        //   };
        //   getProduct()
      const ref = doc(collectionProd, idProducto);
      getDoc(ref)
          .then((res) => {
              //console.log(res);
              setItem({
                  id: res.id,
                  ...res.data(),
              });
          })
          .catch((error) => {
              console.log(error);
          })
          .finally(() => {
              setLoading(false);
          });
  }, [idProducto]);

  if(loading){
    return (
      <div className='container-loader'>
          <ClockLoader
          size={100}
          />
        </div> 
    )
  }
  return (
    <>
    <ItemDetail product = {item}/>
    </>
  )
}

export default ItemDetailContainer


// useEffect(() => {
//   const getProduct = () => {
//       return new Promise((res, rej) => {
//         const productDetalles = products.find((prod)=>prod.id === idProducto)
//         const ref = idProducto ? productDetalles : products;
//           setTimeout(() => {
//               res(ref);
//           }, 800);
//       });
//   };
//   getProduct()
//       .then((res) => {
//           setItem(res);
//       })
//       .catch((error) => {
//           console.log(error);
//       })
//       .finally(() => {
//           setLoading(false)
//       })
//       return () => setLoading(true)
// }, [idProducto]);