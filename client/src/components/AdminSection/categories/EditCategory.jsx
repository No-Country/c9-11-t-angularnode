import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import {
  TextField,
  ToggleButton,
  Select,
  MenuItem,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import sections from '../../../helpers/sectionData';

export default function editCategory({ category }) {
  const [open, setOpen] = useState(false);
  const { state: { hasChanges }, dispatch } = useAppContext();
  const { register, handleSubmit } = useForm();

  const editCategory = async (id, category) => {
    try {
      toast.promise(
        axios.put(`${ import.meta.env.VITE_API_URL }/categories/${ id }`, category, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }),
        {
          pending: "Editando categoría",
          success: {
          render() {
            dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
            return "Categoría editada con éxito"
          }
        },
        error: "Error al editar categoría"
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
    editCategory(category.id, data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ToggleButton onClick={handleClickOpen} sx={{ color: 'var(--primary)', p: '.5rem', border: '1px solid', borderRadius: '15%' }} value={""} ><EditIcon /></ToggleButton>

      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        disableEscapeKeyDown
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle
            sx={{ background: 'var(--primary)', color: 'white', fontWeight: '100', minWidth: '30rem' }}>
            Editar producto
          </DialogTitle>

          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputLabel></InputLabel>
            <TextField
              label="Nombre"
              defaultValue={category.name}
              variant="outlined"
              {...register("name")}
            />

            <TextField
              label="Descripción"
              defaultValue={category.description}
              multiline rows={4}
              variant="outlined"
              {...register("description")}
            />

            <FormControl fullWidth>
              <InputLabel>Sección</InputLabel>
              <Select
                label="Sección"
                variant="outlined"
                defaultValue={category.section}
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
            <Button color={'warning'} onClick={handleClose}>Cancelar</Button>
            <Button color={'success'} type="submit" autoFocus>Confirmar</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div >
  );
}