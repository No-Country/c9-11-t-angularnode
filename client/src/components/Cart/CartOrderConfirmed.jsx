import { useLocation, Navigate } from 'react-router-dom'
import './OrderConfirmed.css'
import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'

export const CartOrderConfirmed = () => {

    

    const location = useLocation()

    if (!location.state) {
        return <Navigate to='/' />
    }

    const order = location.state.order




    const orderParser = (order) => {
        const { cart, total, ...data } = order
        const cartParser = cart.map(item => {
            return `
            ${item.quantity}x ${item.title} - $${item.price}
            `
        })

        if (data.deliveryMethod === 'Delivery') {


            return `
            Hola, quiero pedir desde la web en delivery:
            (Pedido: ${cartParser.join(' ')} )
            (El total calculado es $${total} )
            (Domicilio entrega:  ${data.address})
            (Persona que recibe:  ${data.name_surname})
            (Pago con ${data.paymentMethod})
            (Comentarios: ${data.aclarations})

        
        ` } else {
            return ` Hola, quiero pedir desde la web con retiro en local:
                    (Pedido: ${cartParser.join(' ')} )
                    (El total calculado es $${total} )
                    (Persona que retira:  ${data.name_surname})
                    (Pago con ${data.paymentMethod})
                    (Comentarios: ${data.aclarations})

        `}
    }

    useEffect(() => {
        document.body.style.background = 'var(--four)';
        setTimeout(() => {
            const msj = orderParser(order)
            const url = `https://wa.me/5491130000000?text=${msj}`
            window.location.replace(url)
            document.body.style.background = "url('../src/assets/images/Fondo.jpg')"
        }, 5000)
    }, [])




    return (<div className="conf_container">

        <div className='order_confirmed'>
            <CircularProgress sx={{ m: 5 }} />
            <h2>¡Muchas gracias por tu compra!</h2>
            <h6>A continuación, serás redirigido a WhatsApp para que te notifiquemos sobre el estado de tu pedido.</h6>
            <span>Que disfrutes tu comida :) </span>


        </div>
        <div className="img_bg"></div>
        <div className="order_confirmed_footer">
            {"  "}
        </div>

    </div>
    )
}
