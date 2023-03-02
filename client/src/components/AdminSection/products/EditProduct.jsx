import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { CardMedia, TextField, ToggleButton, Switch, Select, MenuItem, DialogContent, DialogActions, Dialog, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid, FormControlLabel, FormGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { formatRequest } from "../../../hooks/useProducts";

export default function EditProduct({ product }) {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [open, setOpen] = useState(false);
    const { state: { hasChanges, categories }, dispatch } = useAppContext();
    const { register, handleSubmit, reset } = useForm();

    const editProduct = async (id, product) => {

        const form = formatRequest(product);
        try {
            toast.promise(
                axios.put(`${apiUrl}/products/${id}`, form, {
                    headers: {
                        'Content-Type': 'form-data'
                        , Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }),
                {
                    pending: "Editando producto",
                    success: {
                        render() {
                            dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
                            return "Producto editado con éxito"
                        }
                    },
                    error: "Error al editar producto"
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

    const onSubmit = (data) => {
        setOpen(false);
        // Validar que venga una imagen desde el formulario
        data.image.length > 0 ? data.image = data.image[0] : delete data.image;
        reset();
        editProduct(product.id, data);
    };

    const handleClose = () => {
        reset();
        setOpen(false);
    };

    return (
        <div >
            <ToggleButton onClick={handleClickOpen} sx={{ color: 'var(--primary)', p: '.5rem', border: '1px solid', borderRadius: '15%' }} value={""} ><EditIcon /></ToggleButton>

            <Dialog
                open={open}
                onClose={handleClose}
                disableScrollLock
                disableEscapeKeyDown

            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle sx={{ background: 'var(--primary)', color: 'white', fontWeight: '100', minWidth: '30rem' }}>
                        Editar producto
                    </DialogTitle>
                    <CardMedia component="img" height="240" image={product.imageUrl} alt={product.title} />
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button variant="outlined" color={'warning'} component="label">
                            Cargar imagen
                            <input hidden accept="image/*" {...register("image")} type="file" />
                        </Button>


                        <InputLabel></InputLabel>
                        <TextField label="Titulo" defaultValue={product.title} variant="outlined" {...register("title")} />

                        <TextField label="Descripción" defaultValue={product.description} multiline rows={4} variant="outlined" {...register("description")} />
                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-precio">Precio</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-precio"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Precio"
                                defaultValue={product.price}
                                {...register("price")}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>Categoría</InputLabel>
                            <Select label="Categoría" variant="outlined" defaultValue={product.categoryId} {...register("categoryId")}>
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-descuento">Descuento</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-descuento"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Descuento"
                                defaultValue={product.discount}
                                {...register("discount")}
                            />
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={
                                <Switch defaultChecked={product.isActive} color={'warning'} {...register("isActive")} />
                            }
                                label="Habilitado"
                            />
                        </FormGroup>




                    </DialogContent>

                    <DialogActions>
                        <Button color={'warning'} onClick={handleClose}>Cancelar</Button>
                        <Button color={'success'} type="submit" autoFocus>
                            Confirmar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div >
    );
}