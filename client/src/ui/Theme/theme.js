import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#E38B29',
    },
    secondary: {
      main: '#FFD8A9',
    },
    thirt:{
        main: '#FDEEDC',
    },
    four:{
        main:"#FFF9F3"
    },
    error: {
      main: red.A400,
    },
    black:{
        main:"#000000"
    }
  },
});

export default theme;