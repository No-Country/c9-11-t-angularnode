import { ListButtonsSectionFood } from "../components/ListButtonsSectionFood/ListButtonsSectionFood.jsx";
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
export const ProductsPage = () => {
  return (
    <Grid container sx={{ display: 'flex',minWidth:'100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
     <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ 
      background: "linear-gradient(172deg, rgba(255,124,0,0.6362920168067228) 0%, rgba(242,189,11,0) 100%), url('https://i.imgur.com/dEbqNVb.jpg')", backgroundSize: '150%', backgroundPosition: '50%,20%', height: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ color: '#fff' }}>Productos</Typography>
            </Grid>
      <ListButtonsSectionFood />
    </Grid>

  );
};
