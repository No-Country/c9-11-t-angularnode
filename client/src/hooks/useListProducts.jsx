import axios from "axios";
import { useEffect, useState } from 'react'

export const useListProducts = () => {

    const [products, setProducts] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
       const getProducts = async () => {
        try{
           const response = await axios.get(`${apiUrl}/products`)
           
           setProducts(response.data.rows);

        }catch(error){
            console.log(error);
        }
    }
    getProducts();
    }, [])
        
        

  return { products }
}
