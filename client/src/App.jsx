import { AppRouter } from "./routes/AppRouter";
import { Footer } from "./ui/Footer";
import { Navar } from "./ui/Navar";

import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <>
      <Navar />
      <AppRouter />
      <Footer />
    </>
  );
};
