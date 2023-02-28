import cart from "../../assets/icon/cart.png";
import { IconButton } from "@mui/material"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 5,
      top: 1,
      border: `2px solid var(--primary)`,
      color:'var(--four)',
      padding: '0 0px',
    },
  }));



export const CartButton = () => {

    const { totalUniqueItems } = useCart();

    return (
        <Link to={'/cart'}>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={totalUniqueItems} color="warning">
                <img src={cart} alt="icon cart" />
            </StyledBadge>
        </IconButton>
        </Link>

    )
}
