import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import { CardMedia, TextField, DialogTitle, Switch, Select, MenuItem, DialogContent, DialogActions, Dialog, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid, FormControlLabel, FormGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

import { formatRequest } from "../../../hooks/useProducts";

export default function AddProduct() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [image, setImage] = useState(null);
    const [open, setOpen] = useState(false);
    const { state: { hasChanges, categories }, dispatch } = useAppContext();
    const { register, handleSubmit, watch } = useForm();

    const addProduct = async (product) => {

        const form = formatRequest(product);
        try {
            toast.promise(
                axios.post(`${apiUrl}/products`, form, {
                    headers: {
                        'Content-Type': 'form-data'
                        , Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }),
                {
                    pending: "Agregando producto",
                    success: {
                        render(){
                            dispatch({ type: 'HAS_CHANGES', payload: !hasChanges })
                            return "Producto agregado con éxito"
                        } 
                    },
                    error: "Error al agregar producto"
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
        addProduct(data);
    };


    //Manejo de la imagen NO TOCAR SE ROMPE POR CASI TODO
    const imageName = watch("image",false);
    useEffect(() => {
        if(imageName){
            try{
                 const imagen_url = URL.createObjectURL(imageName[0]);
                  setImage(imagen_url)
            }catch(err){
                console.log(err)
                setImage(false)
            }
           
           
        }
    },[imageName])
    
        

    




    const handleClose = () => {
        if (reason && reason == "backdropClick") return;
    };

    const closeByCancel = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="contained" color="warning" onClick={handleClickOpen} sx={{ color: '#fff', m: 3, lineHeight: 1.5 }} value={""} ><AddIcon /> Agregar producto</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                disableScrollLock
                disableEscapeKeyDown



            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle sx={{ background: 'var(--primary)', color: 'white', fontWeight: '100', minWidth: '30rem' }}>
                        Agregar producto
                    </DialogTitle>
                    {!image && <CardMedia component="img" height="300" image={'https://via.placeholder.com/300x300'} alt={"preview"} />}
                    {image && <CardMedia component="img" height="240" image={image} alt={"preview"} />}
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button variant="outlined" color={'warning'} component="label">
                            Cargar imagen
                            <input hidden accept="image/*" type="file"   {...register("image")} />
                        </Button>





                        <InputLabel></InputLabel>
                        <TextField label="Titulo" placeholder="Titulo.." variant="outlined" {...register("title")} />

                        <TextField label="Descripción" multiline rows={4} variant="outlined" {...register("description")} />
                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-precio">Precio</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-precio"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Precio"

                                {...register("price")}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>Categoría</InputLabel>
                            <Select label="Categoría" variant="outlined" defaultValue={1} {...register("categoryId")}>
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
                                {...register("discount")}
                            />
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={
                                <Switch defaultChecked color={'warning'} {...register("isActive")} />
                            }
                                label="Habilitado"
                            />
                        </FormGroup>




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