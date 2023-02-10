import { Route, Routes } from "react-router-dom";
import { Contact } from "../components/Contact";
import { CreateAccount } from "../components/CreateAccount";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Products } from "../components/Products";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="createAccount" element={<CreateAccount/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </>
  );
};
