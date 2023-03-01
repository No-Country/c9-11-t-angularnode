import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import {
  TextField,
  DialogTitle,
  Select,
  MenuItem,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  FormControl,
  InputLabel
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import sections from '../../../helpers/sectionData';

export default function AddCategory() {
  const { state: { hasChanges }, dispatch } = useAppContext();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const addCategory = async (category) => {
    try {
      toast.promise(
        axios.post(`${ import.meta.env.VITE_API_URL }/categories`, category, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }),
        {
          pending: "Agregando categoría",
          success: {
            render(){
              dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
              return "Categoría agregada con éxito"
            }
          },
          error: "Error al agregar categoría"
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

  const onSubmit = (data) => {
    setOpen(false);
    addCategory(data);
  };

  const handleClose = () => {
    if (reason && reason == "backdropClick") return;
  };

  const closeByCancel = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        onClick={handleClickOpen}
        sx={{ color: '#fff', m: 3, lineHeight: 1.5 }}
        value={""}
      >
        <AddIcon /> Agregar categoría
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        disableEscapeKeyDown
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle sx={{ background: 'var(--primary)', color: 'white', fontWeight: '100', minWidth: '30rem' }}>
            Agregar categoría
          </DialogTitle>

          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputLabel></InputLabel>
            <TextField
              label="Nombre"
              placeholder="Ingrese el nombre de la categoría"
              variant="outlined"
              {...register("name")}
            />

            <TextField
              label="Descripción"
              multiline rows={4}
              variant="outlined"
              {...register("description")}
            />

            <FormControl fullWidth>
              <InputLabel>Sección</InputLabel>
              <Select
                label="Sección"
                variant="outlined"
                defaultValue={1}
                {...register("section")}
              >
                {sections.map((section) => (
                  <MenuItem
                    key={section.value}
                    value={section.value}
                  >
                    {section.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>

          <DialogActions>
            <Button color={'warning'} onClick={closeByCancel}>Cancelar</Button>
            <Button color={'success'} type="submit" autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div >
  );
}