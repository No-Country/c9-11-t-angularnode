import { AppRouter } from "./routes/AppRouter";
import { Footer } from "./ui/Footer/Footer";
import { Navar } from "./ui/Navar";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/useAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from "./context/AppContext";
import { LoadingBar } from "./ui/LoadingBar";

import { CartProvider } from "react-use-cart"



export const App = () => {

  return (
    <>
      <AppProvider>
        <CartProvider>
          <AuthProvider>
            <Navar />
            <LoadingBar />
            <AppRouter />
            <Footer />
            <ToastContainer />
          </AuthProvider>
        </CartProvider>
      </AppProvider>

    </>
  )
}
