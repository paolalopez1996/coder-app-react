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