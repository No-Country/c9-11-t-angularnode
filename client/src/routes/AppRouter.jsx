import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import { Contact } from "../components/Contact";
import { CreateAccount } from "../components/CreateAccount";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Products } from "../components/Products";
=======
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact";
>>>>>>> Stashed changes

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
