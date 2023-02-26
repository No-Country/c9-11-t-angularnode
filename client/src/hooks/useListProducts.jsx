import axios from "axios";
import { useEffect, useState } from 'react'


export const useListProducts = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;



  const getProducts = async (categoryId) => {



    try {

      
     
      if (categoryId && categoryId !== 'default') {
        
        const response = await axios.get(`${apiUrl}/products?categoryId=${categoryId}`,{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        setProducts(response.data.rows);
       
        return;
      }else{
         const response = await axios.get(`${apiUrl}/products`,{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
         })
         setProducts(response.data.rows);
         
      }


     

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
  
    getProducts(category)

   

  }  , [category])



  return { products, setCategory }
}
