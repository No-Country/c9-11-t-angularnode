import { Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { useAuth} from "../hooks/useAuth";
import { AdminPage } from "../pages/AdminPage";
import { AdminProductsPage } from "../pages/AdminProductsPage";
import { Sections } from "../pages/Sections";
import { Products } from "../pages/Products";
import { CartPage } from "../pages/CartPage";



export const AppRouter = () => {
  const { isAuthenticated } = useAuth();



  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="products/:section" element={<Sections />} />
        <Route path="products/:section/:categoryId" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<CreateAccount />} /> 
        <Route path="/admin" element={isAuthenticated ? <AdminPage/> : <Home/>} />
        <Route path="/admin/products" element={isAuthenticated ? <AdminProductsPage/> : <Home/>} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path="/*" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
