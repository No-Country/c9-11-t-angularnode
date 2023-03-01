import { useCart } from "react-use-cart"
import cartIcon from '../assets/icon/cart.png'
import './styles/cartPage.css'
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'



export const CartPage = () => {

    const { isEmpty,  items,  cartTotal, updateItemQuantity } = useCart()


    return (
        <>

            <div className='cart_title'>
                <h5> <img src={cartIcon} alt="cartIcon" /> Mi pedido</h5>
            </div>

            <div className='cart_container'>


                {isEmpty ? (<>
                    <div className='cart_empty'>
                        <h5>El carrito está vacío</h5>
                    </div>
                    <div className="cart_summary_buttons">
                    <Link to="/products" style={{textDecoration:'none',color:'inherit'}}>
                    <Button variant='contained' sx={{background:'var(--second)',color:'#000', textTransform:'none',width:'100%','&:hover':{background:'var(--thirt)'}, borderRadius:'0.3rem'}} >Seguir comprando</Button>
                    </Link>
                    </div>
                </>
                ) : (
                    <>
                        <div className='cart_items'>
                            {items.map((item, index) => (
                                <div className='cart_item' key={index}>
                                    <div className='cart_item_price'>
                                        <h6>{item.title}</h6>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className='cart_item_quantity'>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    
                                   
                                </div>
                            ))}
                        </div>
                        <div className='cart_summary'>
                            <div className='cart_summary_total'>
                                <h3>Subtotal</h3>
                                <p>${cartTotal}</p>
                            </div>
                           
                        </div>
                        <div className='cart_summary_buttons'>
                       <Link to="/products" style={{textDecoration:'none',color:'inherit'}}><Button variant='contained' sx={{background:'var(--second)',color:'#000', textTransform:'none',width:'100%','&:hover':{background:'var(--thirt)'}, borderRadius:'0.3rem'}} >Seguir comprando</Button> 
                       </Link> 
                       <Link to="/cart/checkout" style={{textDecoration:'none',color:'inherit'}}> <Button variant='contained' sx={{background:'var(--primary)', textTransform:'none',width:'100%','&:hover':{background:'#c56b07'},borderRadius:'0.3rem'}} >Finalizar compra</Button> </Link>
                        </div>

                    </>
                )}

                </div>

        </>
    )
}
