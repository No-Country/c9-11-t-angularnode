import { useState, useEffect } from "react";
import axios from "axios";
import {toast} from 'react-toastify';
const api_url = import.meta.env.VITE_API_URL;
import { useAppContext } from "../context/AppContext";

export const useCategories = () => {

    const { dispatch } = useAppContext();

    const getCategories = async (page) => {
        try{
           if(page){
                const response = await axios.get(`${api_url}/categories?page=${page}`)
                dispatch({type: 'SET_CATEGORIES', payload: response.data.rows})
              
                return;
            }else{
                const response = await axios.get(`${api_url}/categories`)
                dispatch({type: 'SET_CATEGORIES', payload: response.data.rows})
                return;
            }
            
        }catch(err){
            console.log(err)
            return;
        } 
    }
       
   


    useEffect(() => {
        getCategories();
        
    }, []);

    return { getCategories };
}


export const addCategory = async (category) => {
    try{
        toast.promise(
        axios.post(`${api_url}/categories`, category,{
            headers: {
                'Content-Type': 'application/json'
                , Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }),
        {
            loading: "Creando categoría",
            success: "Categoría creada con éxito",
            error: "Error al crear categoría"
        })
        getCategories();
        return;

    }catch(err){
        console.log(err)
        return;
    }
}

export const editCategory = async (id, category) => {
    try{
        toast.promise(
        axios.put(`${api_url}/categories/${id}`, category,{
            headers: {
                'Content-Type': 'application/json'
                , Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }),
        {
            loading: "Editando categoría",
            success: "Categoría editada con éxito",
            error: "Error al editar categoría"
        })
        getCategories();
        return;
    }catch(err){
        console.log(err)
        return;
    }
}

export const deleteCategory = async (id) => {
    try{
        toast.promise(
        axios.delete(`${api_url}/categories/${id}`,{
            headers: {
                'Content-Type': 'application/json'
                , Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }),
        {
            loading: "Eliminando categoría",
            success: "Categoría eliminada con éxito",
            error: "Error al eliminar categoría"
        })
        getCategories();
        return;
    }catch(err){
        console.log(err)
        return;
    }   
}