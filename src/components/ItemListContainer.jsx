// import React from 'react'
import React, { useEffect, useState } from 'react'
import { products } from '../mock/Products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
 import ClockLoader from "react-spinners/ClockLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryName } = useParams();
 
  useEffect(() => {
      const getProducts = () => {
          return new Promise((res, rej) => {
            const productosFiltrados = products.filter((prod) => prod.category === categoryName)
              const referencia= categoryName ? productosFiltrados : products;
            setTimeout(() => {
                  res(referencia);
              }, 1500);
          });
      };
      getProducts()
          .then((res) => {
              //console.log('res', res);
              setItems(res);
          })
          .catch((error) => {
              console.log(error);
          })
          .finally(() => {
            setLoading(false)
        })
        return () => setLoading(true)
  }, [categoryName]);


  if(loading){
    return (
      <div className='container-loader'>
      <ClockLoader
      size={100}
      />
    </div> 
    );

  }


  return (
    
    <div className='container-fluid'>
     <ItemList  items = {items} />
    </div>
  )
}

export default ItemListContainer;

