<<<<<<< HEAD
import {Route, Routes}
export const AppRouter=()=>{
    return {
        <>
        <Routes>
        </Routes>
        </>
    };
};
=======
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
>>>>>>> f516f15488ec79d2eb0c7c6280a01a7edff7d9cf
