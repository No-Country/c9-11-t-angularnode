import { AppRouter } from "./routes/AppRouter";
import { Footer } from "./ui/Footer/Footer";
//import { Navar } from "./ui/Navar";
import { AppBarMenu } from "./ui/NavBar-v2/AppBar";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/useAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from "./context/AppContext";
import { LoadingBar } from "./ui/LoadingBar";
import { ThemeProvider } from "@mui/material/styles";
import { CartProvider } from "react-use-cart"
import { theme } from "./ui/Theme/theme";


export const App = () => {

  return (
    <>
    <AppProvider>
      <ThemeProvider theme={theme}>
      <CartProvider>
     <AuthProvider>
      {/*<Navar />*/}
      <AppBarMenu /> 
      <LoadingBar/>
      <AppRouter />
      <Footer />
      <ToastContainer />
     </AuthProvider>
      </CartProvider>
      </ThemeProvider>
     </AppProvider>
      
    </>
  );
};
