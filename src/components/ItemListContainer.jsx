// import React from 'react'
import React, { useEffect, useState } from 'react'
import { products } from '../mock/Products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
 
  useEffect(() => {
      const getProducts = () => {
          return new Promise((res, rej) => {
            const productosFiltrados = products.filter((prod) => prod.category === categoryName)
              const referencia= categoryName ? productosFiltrados : products;
            setTimeout(() => {
                  res(referencia);
              }, 500);
          });
      };
      getProducts()
          .then((res) => {
              //console.log('res', res);
              setItems(res);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [categoryName]);

  return (
    
    <div className='container-fluid'>
     <ItemList  items = {items} />
    </div>
  )
}

export default ItemListContainer;

