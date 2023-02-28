import { useState } from "react";
import {Button,Dialog, DialogActions, DialogTitle,  ToggleButton} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppContext } from "../../../context/AppContext";
import { formatRequest } from "../../../hooks/useProducts";
import { toast } from "react-toastify";
import axios from "axios";

export default function ChangeVisibility({ product }) {

    const apiUrl = import.meta.env.VITE_API_URL;
    const [open, setOpen] = useState(false);
    const { state: { hasChanges }, dispatch } = useAppContext();

    const changeVisibility = async (id, product) => {

        try {
      
          dispatch({ type: 'SET_LOADING', payload: true })
          const form = formatRequest(product);
      
          toast.promise(
            axios.put(`${apiUrl}/products/${id}`, form, {
              headers: {
                'Content-Type': 'multipart/form-data'
                , Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            }),
            {
              pending: "Cambiando visibilidad del producto",
              success: {
                render(){
                  dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
                  dispatch({ type: 'SET_LOADING', payload: false })
                  return "Visibilidad del producto cambiada con éxito"
                }
              },
              error: "Error al cambiar visibilidad del producto"
            })
         
  
          return;
        } catch (err) {
      
          console.log(err)
          return;
        }
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleConfirm = () => {
        setOpen(false);
        const productRequest ={
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            discount: product.discount,
            imageUrl: product.imageUrl,
            isActive: !product.isActive,
            categoryId: product.categoryId
        }
        changeVisibility(product.id,productRequest);

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <ToggleButton onClick={handleClickOpen} sx={{ color: 'var(--primary)', p: '.5rem', border: '1px solid', borderRadius: '15%' }} value={""} ><VisibilityIcon /></ToggleButton>

            <Dialog
                open={open}
                onClose={handleClose}
                disableScrollLock
               
            >
                <DialogTitle  sx={{ fontWeight:'100'}}>
                   ¿Cambiar la visibilidad de {product.title} a {!product.isActive? 'Activo' : 'Inactivo'}?
                </DialogTitle>
                <DialogActions>
                    <Button color={'warning'} onClick={handleClose}>Cancelar</Button>
                    <Button color={'warning'} onClick={handleConfirm} autoFocus>
                        Confirmar 
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}