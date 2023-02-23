import { Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
