import axios from "axios";
import { useEffect, useState } from 'react'
import { useAppContext } from "../context/AppContext";

export const useProducts = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);
  const { state: { hasChanges }, dispatch } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  const getProducts = async (categoryId, page) => {

    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      if (categoryId && categoryId !== 'default') {
        const response = await axios.get(`${apiUrl}/products?categoryId=${categoryId}&page=${page}&showAll=true&limit=20`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        setProducts(response.data.rows);
        dispatch({ type: 'SET_LOADING', payload: false })
        return;
      } else {
        const response = await axios.get(`${apiUrl}/products?page=${page}&showAll=true&limit=20`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        setProducts(response.data.rows);
        dispatch({ type: 'SET_LOADING', payload: false })

      }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts(category,page)
  }, [category, hasChanges, page])


  return { products, setCategory, setPage}
}



/**
   * Formatea el producto para enviarlo al backend
   * @param {*} product 
   * @returns 
   */
export const formatRequest = (product) => {
  try{
    const form = new FormData();
    form.append('title', product.title);
    form.append('description', product.description);
    form.append('price', product.price);
    form.append('categoryId', product.categoryId);
    form.append('isActive', product.isActive);
    form.append('discount', product.discount);
    if(product.image){
        form.append('image', product.image);
    }
    return form;
  }catch(err){
    console.log(err)
  }
 
}

