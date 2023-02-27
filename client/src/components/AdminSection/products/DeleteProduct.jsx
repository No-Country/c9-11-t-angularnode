import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import { CardMedia } from "@mui/material";
import { toast } from "react-toastify";
import { useAppContext } from "../../../context/AppContext";
import axios from "axios";

export default function DeleteProduct({ product }) {

    const { state: { hasChanges }, dispatch } = useAppContext();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [open, setOpen] = useState(false);

    const deleteProduct = async (id) => {

        try {
          toast.promise(
            axios.delete(`${apiUrl}/products/${id}`, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            }),
            {
              pending: "Eliminando producto",
              success: {
                render({data}){
                    dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
                    return "Producto eliminado con éxito"
                }
              },
              error: "Error al eliminar producto"
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
        deleteProduct(product.id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <ToggleButton onClick={handleClickOpen} sx={{ color: 'var(--primary)', p: '.5rem', border: '1px solid', borderRadius: '15%' }} value={""} ><DeleteIcon /></ToggleButton>

            <Dialog
                open={open}
                onClose={handleClose}
                disableScrollLock
               
            >
                <DialogTitle  sx={{background:'var(--primary)', color:'white', fontWeight:'100'}}>
                   Confirmar eliminación de {product.title}
                </DialogTitle>
                <DialogContent sx={{p:0}}>
                <CardMedia component={'image'}  sx={{ height: 250 }} image={product.imageUrl} />
                    <DialogContentText sx={{p:3}}>
                        ID: {product.id} <br />
                        Titulo: {product.title} <br />
                        Descripción: {product.description} <br />
                        Precio: ${product.price} <br />
                        Habilitado: {product.isActive ? 'Si' : 'No'} <br />
                        Categoría: {product.category.name} <br />
                        <br />
                        Al eliminar el producto, no podrás recuperarlo.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={'warning'} onClick={handleClose}>Cancelar</Button>
                    <Button color={'error'} onClick={handleConfirm} autoFocus>
                        Eliminar producto
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}