import { AppRouter } from "./routes/AppRouter";
import { Footer } from "./ui/Footer";
import { Navar } from "./ui/Navar";

export const App = () => {
  return (
    <>
      <Navar />
      <AppRouter />
      <Footer/>
    </>
  );
};
