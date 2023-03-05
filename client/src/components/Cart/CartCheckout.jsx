import { useCart } from "react-use-cart"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Checkbox from "@mui/material/Checkbox";
import './CartCheckout.css'
import { Button } from "@mui/material"
import { useState } from "react"
import paperIcon from '../../assets/icon/paper.png'
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'
import { CartOrderConfirmed } from "./CartOrderConfirmed";


export const CartCheckout = () => {

    const [paymentData, setPaymentData] = useState({
        paymentMethod: 'Efectivo',
        deliveryMethod: 'Delivery',
    })

    const [order, setOrder] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { isEmpty, items, cartTotal, emptyCart } = useCart()

    const buttonStyle = { textTransform: 'none', width: '100%', borderRadius: '0.45rem', };
    const buttonStyleChecked = { textTransform: 'none', width: '100%', borderRadius: '0.45rem', color: '#fff' };


    const handlePaymentMethod = (paymentMethod) => {
        setPaymentData({
            ...paymentData,
            paymentMethod: paymentMethod
        })
    }


    const handleDeliveryMethod = (deliveryMethod) => {
        setPaymentData({
            ...paymentData,
            deliveryMethod: deliveryMethod
        })
    }


    const onSubmit = (data) => {
        const order = {
            deliveryMethod: paymentData.deliveryMethod,
            paymentMethod: paymentData.paymentMethod,
            cart: items,
            total: cartTotal,
            ...data
        }
        emptyCart()
        setOrder(order)
    }

    return (
        <>  {order ? <Navigate to="/order-confirmed" replace state={{ order: order }} /> :
            <form className="cart_checkout" onSubmit={handleSubmit(onSubmit)}>
                <div className='cart_checkout_container'>
                    <div className='cart_checkout_title'>
                        <h5><CheckCircleOutlineIcon sx={{ color: 'var(--primary)', fontSize: '2em' }} />  Confirmación</h5>
                    </div>




                    {isEmpty ? (<>
                        <div className='cart_checkout_empty'>
                            <h5>El carrito está vacío</h5>
                        </div>
                        <div className="cart_checkout_summary_buttons">
                            <Button variant='contained' sx={{ background: 'var(--second)', color: '#000', textTransform: 'none', width: '100%', '&:hover': { background: 'var(--thirt)' }, borderRadius: '0.3rem' }} >Seguir comprando</Button>
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cart_checkout_items'>
                                <h6>Detalle del pedido</h6>
                                {items.map((item, index) => (
                                    <div className='cart_checkout_item' key={index}>
                                        <div className='cart_checkout_item_price'>
                                            <p> {item.quantity} x {item.title}</p>
                                        </div>
                                        <p>$ {item.price}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='cart_checkout_summary'>
                                <div className='cart_checkout_summary_total'>
                                    <h6>Total</h6>

                                </div>
                                <div className='cart_checkout_summary_total'>
                                    <h6>${cartTotal}</h6>
                                </div>

                            </div>

                        </>
                    )}


                    <div className="cart_checkout_title_2"    >
                        <p><InfoOutlinedIcon color="primary" /> Mi pago</p>
                    </div>
                    <div className="cart_checkout_buttons">

                        <Checkbox sx={{ width: '90%', height: '100%', pl: 0 }}
                            checked={paymentData.paymentMethod === 'Efectivo'}
                            onChange={() => handlePaymentMethod('Efectivo')}
                            icon={<Button variant='outlined' color='black' sx={buttonStyle}>
                                Efectivo</Button>} checkedIcon={<Button variant="contained" sx={buttonStyleChecked} color='black'>
                                    Efectivo</Button>}> </Checkbox>


                        <Checkbox sx={{ width: '90%', height: '100%', pr: 0 }} checked={paymentData.paymentMethod === 'MercadoPago'}
                            onChange={() => handlePaymentMethod('MercadoPago')}
                            icon={<Button variant='outlined' color='black' sx={buttonStyle}> Mercado Pago</Button>} checkedIcon={<Button variant="contained" sx={buttonStyleChecked} color='black'>Mercado Pago</Button>}>
                        </Checkbox>


                    </div>


                    <div className="cart_checkout_title_2"    >
                        <p><InfoOutlinedIcon color="primary" /> Entrega del pedido</p>
                    </div>
                    <div className="cart_checkout_buttons">

                        <Checkbox sx={{ width: '90%', height: '100%', pl: 0 }}
                            checked={paymentData.deliveryMethod === 'TakeAway'}
                            onChange={() => handleDeliveryMethod('TakeAway')}
                            icon={<Button variant='outlined' color='black' sx={buttonStyle}  >
                                Take Away</Button>} checkedIcon={<Button variant="contained" sx={buttonStyleChecked} color='black'>
                                    Take Away</Button>}> </Checkbox>


                        <Checkbox sx={{ width: '90%', height: '100%', pr: 0 }} checked={paymentData.deliveryMethod === 'Delivery'}
                            onChange={() => handleDeliveryMethod('Delivery')}
                            icon={<Button variant='outlined' color='black' sx={buttonStyle}> Delivery</Button>} checkedIcon={<Button variant="contained" sx={buttonStyleChecked} color='black'>Delivery</Button>}>
                        </Checkbox>


                    </div>


                    <div className="cart_checkout_inputs_container">
                        <div className="cart_checkout_title_2"    >
                            <p><InfoOutlinedIcon color="primary" /> Mis datos</p>
                        </div>

                        {/*Render condicional si elige take away o delivery */}
                        {paymentData.deliveryMethod === 'TakeAway' ? (
                            <div className="cart_checkout_input" >
                                <label htmlFor="personalData">Nombre y apellido</label>
                                <input type="text" name="personalData" id="personalData-name" className={`${errors.name_surname && "checkout_error_input"}`} {...register("name_surname", { required: true })} />
                                {errors.name_surname && <p className="checkout_error_field">Este campo es obligatorio</p>}

                            </div>) : (
                            <div className="cart_checkout_input">
                                <label htmlFor="personalDataName">Nombre y apellido:</label>
                                <input type="text" name="personalDataName" className={`${errors.name_surname && "checkout_error_input"}`} id="personalData-name" {...register("name_surname", { required: true })} />
                                {errors.name_surname && <p className="checkout_error_field">Este campo es obligatorio</p>}
                                <label htmlFor="personalData">Dirección:</label>
                                <input type="text" name="personalDataAdress" className={`${errors.address && "checkout_error_input"}`} id="personalData-address"  {...register("address", { required: true })} />
                                {errors.address && <p className="checkout_error_field">Este campo es obligatorio</p>}
                            </div>

                        )}

                        <div className="cart_checkout_title_2"    >
                            <p><img src={paperIcon} alt="iconpaper" />Aclaraciones</p>
                        </div>
                        <div className="cart_checkout_input_lg">
                            <textarea type="text" rows="4" cols={'4'} name="personalDataAclarations" id="personalDataAclarations" {...register("aclarations")} />
                        </div>

                    </div>


                    <div className="cart_checkout_final_button">
                        <Button variant='contained' sx={{ background: 'var(--primary)', color: '#fff', fontSize: '1em', textTransform: 'none', width: '100%', '&:hover': { background: '#c56b07' }, borderRadius: '0.3rem' }} type="submit"> Finalizar compra</Button>
                    </div>

                </div>
            </form>

        }
        </>
    )
}
