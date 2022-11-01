import React from 'react'
import { useEffect, useState } from 'react'
import { products } from '../mock/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { idProducto } = useParams();
   
  useEffect(() => {
      const getProduct = () => {
          return new Promise((res, rej) => {
            const productDetalles = products.find((prod)=>prod.id === idProducto)
            const ref = idProducto ? productDetalles : products;
              setTimeout(() => {
                  res(ref);
              }, 500);
          });
      };
      getProduct()
          .then((res) => {
              setItem(res);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [idProducto]);
  return (
    <>
    <ItemDetail product = {item}/>
    
    </>
  )
}

export default ItemDetailContainer