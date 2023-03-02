import { Card } from "react-bootstrap";
import { useState } from "react";
import { Modal, Box, Typography, CardMedia, Grid, Button, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useMediaQuery } from '@mui/material';
import { useCart } from "react-use-cart";
import { useTheme } from '@mui/material/styles';

import { ProductAddedConfirm } from "./ProductAddedConfirm";

import './ProductDetail.css'

export const ProductDetail = ({ product, index }) => {

 
    

    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [quantity, setQuantity] = useState(1)

    const { addItem } = useCart();

    const screen = useMediaQuery("(min-width: 600px)");
    const tablet = useMediaQuery("(min-width: 768px)");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        height: '60%',
        bgcolor: 'var(--primary)',
        borderRadius: '8px',
        boxShadow: 24,
        p: 1.5,
    };


    const handleAddQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleRemoveQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        setOpen(false);
        setOpenConfirm(true);
        addItem(product, quantity)
        setQuantity(1)
    }




    return (<>
        <button onClick={handleOpen} className="button_product_detail">
            <Card key={index} className="card_products">
                <Card.Body>
                    <Card.Title className="card_title_product" >
                        {product.title} <span>${product.price}</span>
                    </Card.Title>
                    <Card.Text style={{ fontSize: "12px", fontWeight: 300 }}>
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </button>

        <ProductAddedConfirm openConfirm={openConfirm} setOpenConfirm={setOpenConfirm} />



       
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                 <Fade in={open}>
                <Box sx={style}>
                    <Grid container spacing={0} sx={{ color: 'white' }}>

                        {/* iMAGEN */}
                        <Grid item xs={12} sm={6} md={6}  sx={{ minHeight:`${screen? "57vh": "27vh"}`, background:`url(${product.imageUrl})`, backgroundSize:'cover', borderRadius:'10px', backgroundPosition:'center' }}
                        
                        >
                          
                           
                           
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} sx={{ p: 1, color: 'white', display: 'flex', flexDirection: 'column' }}>


                            <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Grid item xs={6} md={6}>
                                    <Typography id="modal-modal-title" variant="h6" sx={{ lineHeight: '1.2em' }}>
                                        {product.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6} sx={{ textAlign: 'right', }}>
                                    <Typography variant="h6" sx={{ lineHeight: '1.2em' }}>
                                        ${product.price}
                                    </Typography>
                                </Grid>
                            </Grid>


                            <Grid item xs={12} md={12} zeroMinWidth>
                                <Typography variant={'body1'} sx={{ mt: 2, fontWeight: 200 }} >
                                    {product.description}
                                </Typography>

                            </Grid>




                            {/* MORE WIDER SCREENS */}
                            <Grid item xs={false}  md={12}></Grid>
                            <Grid item xs={false} md={12}></Grid>





                            <Grid item xs={false} md={12}></Grid>
                            <Grid item xs={false} md={12}></Grid>
                            <Grid item xs={false}  md={12} sx={{ position: 'absolute', bottom: '2vh', minWidth: (screen ? '41vw' : '77.5vw'), display: 'flex', flexDirection: 'column' }}>

                                <Grid item xs={12} md={12} sx={{ marginTop: '1em', display: 'flex', flexDirection: 'row' }}>
                                    <Grid item xs={6} md={6}>
                                        <Typography variant="h6" sx={{ textAlign: 'left', fontSize: '1em' }}>
                                            Unidades
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={6} md={6} sx={{ alignItems: 'right', justifyContent: 'right', display: 'flex' }}>
                                        <Button variant="text" sx={{ color: 'white', fontSize: '20px', minWidth: '2em' }} onClick={handleRemoveQuantity}>
                                            <RemoveIcon />
                                        </Button>
                                        <Typography variant="body1" sx={{ background: 'var(--second)', color: '#000', pt: '.3em', borderRadius: '7px', width: '3em', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            {quantity}  </Typography>
                                        <Button variant="text" sx={{ color: 'white', minWidth: '2em', fontSize: '20px' }} onClick={handleAddQuantity}>
                                            <AddIcon />
                                        </Button>
                                    </Grid>


                                </Grid>

                                <Grid item xs={12} md={12} sx={{ marginTop: '1em', display: 'flex', flexDirection: 'row' }}>
                                    <Button variant="contained" color={'warning'} sx={{ backgroundColor: 'var(--second)', boxShadow: 'none', textTransform: 'none', color: '#000', width: '100%', '&:hover': { background: 'var(--second)' }, borderRadius: '8px' }}
                                        onClick={handleAddToCart}>
                                        Agregar al carrito
                                    </Button>
                                </Grid>

                            </Grid>





                        </Grid>


                    </Grid>



                </Box>
                </Fade>
            </Modal>
        

    </>

    )
}
