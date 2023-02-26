import { AppRouter } from "./routes/AppRouter";
import { Footer } from "./ui/Footer/Footer";
import { Navar } from "./ui/Navar";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/useAuth";
import { LinearProgress } from "@mui/material"


import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  
  return (
    <>
     <AuthProvider>
      <Navar />
      {<LinearProgress color="warning" /> && false}
      <AppRouter />
      <Footer />
      <ToastContainer />
     </AuthProvider>
      
    </>
  );
};
