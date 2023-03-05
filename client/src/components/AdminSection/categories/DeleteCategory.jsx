import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ToggleButton,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Dialog,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { useAppContext } from "../../../context/AppContext";
import axios from "axios";
import translateSectionName from '../../../helpers/translateSectionName';

export default function DeleteCategory({ category }) {
  const { state: { hasChanges }, dispatch } = useAppContext();
  const [open, setOpen] = useState(false);

  const deleteCategory = async (id) => {
    try {
      toast.promise(
        axios.delete(`${ import.meta.env.VITE_API_URL }/categories/${ id }`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }),
        {
          pending: "Eliminando categoría",
          success: {
            render({data}){
              dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
              return "Categoría eliminada con éxito"
            }
          },
          error: "Error al eliminar categoría"
        }
      )
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
    deleteCategory(category.id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <ToggleButton
        onClick={handleClickOpen}
        sx={{ color: 'var(--primary)', p: '.5rem', border: '1px solid', borderRadius: '15%' }}
        value={""}
      >
        <DeleteIcon />
      </ToggleButton>

      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
      >

        <DialogTitle  sx={{background:'var(--primary)', color:'white', fontWeight:'100'}}>
          Confirmar eliminación de {category.name}
        </DialogTitle>

        <DialogContent sx={{p:0}}>
          <DialogContentText sx={{p:3}}>
            ID: {category.id} <br />
            Nombre: {category.name} <br />
            Descripción: {category.description} <br />
            Sección: {translateSectionName(category.section)} <br />
            <br /> Al eliminar la categoría, no podrás recuperarlo.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button color={'warning'} onClick={handleClose}>Cancelar</Button>
          <Button color={'error'} onClick={handleConfirm} autoFocus>Eliminar categoría</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}