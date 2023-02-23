import { AppRouter } from "./routes/AppRouter";
import { Footer } from "./ui/Footer/Footer";
import { Navar } from "./ui/Navar";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
     
      <Navar />
      <AppRouter />
      <Footer />
      <ToastContainer />
    </>
  );
};
