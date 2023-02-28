import { Backdrop, Fade, CircularProgress, Box, Typography, Button, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { Link } from 'react-router-dom';

export const ProductAddedConfirm = (openProps) => {

    const { openConfirm, setOpenConfirm } = openProps;
    const [isAdding, setIsAdding] = useState(false);

    const handleClose = () => {
        setOpenConfirm(false);
    };

    useEffect(() => {
        if (openConfirm) {
            setIsAdding(true);
            setTimeout(() => {
                setIsAdding(false);
            }, 1000);
        }
    }, [openConfirm])



    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openConfirm}
            >
                {isAdding && <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, justifyContent: 'center', height: '100%' }}>
                    <CircularProgress color="inherit" />
                    <Typography variant="h5" component="div" gutterBottom>
                        Agregando productos al carrito
                    </Typography>

                </Box>}
                {
                    !isAdding &&
                    <Grid container spacing={2} sx={{ color: 'white', width: '500px', height: '400px', background: 'var(--primary)', borderRadius: '15px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', m: 1 }}>


                        <Grid item md={12}>
                            <Fade in={!isAdding} timeout={1000}>
                                <CheckCircleOutlineIcon sx={{ fontSize: '10em' }} />

                            </Fade>
                        </Grid>

                        <Grid item md={12}>
                            <Typography variant="h5" component="div">
                                Tu producto fue añadido exitosamente
                            </Typography>
                        </Grid>
                        <Grid item md={12} sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <Button variant={'text'} color={'warning'} sx={{ color: '#000', background: 'var(--second)', borderRadius: '5px', minWidth: '10em', textTransform: 'none', '&:hover': { background: 'var(--four)' } }} onClick={handleClose}>Seguir comprando</Button>
                           <Link to={'/cart'} style={{textDecoration:'none'}}> <Button variant={'text'} color={'warning'} sx={{ color: '#000', background: 'var(--second)', borderRadius: '5px', minWidth: '10em', textTransform: 'none', '&:hover': { background: 'var(--four)' } }}>Ir al carrito</Button></Link>
                        </Grid>
                    </Grid>

                }


            </Backdrop>
        </>)
}
