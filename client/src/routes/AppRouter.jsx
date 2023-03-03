import { Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { useAuth} from "../hooks/useAuth";
import { AdminPage } from "../pages/AdminPage";
import { AdminProductsPage } from "../pages/AdminProductsPage";
import { AdminCategoriesPage } from "../pages/AdminCategoriesPage";
import { Sections } from "../pages/Sections";
import { Products } from "../pages/Products";
import { CartPage } from "../pages/CartPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartCheckout } from "../components/Cart/CartCheckout";
import { CartOrderConfirmed } from "../components/Cart/CartOrderConfirmed";
import { UserProfile } from "../pages/UserProfile";

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:section" element={<Sections />} />
        <Route path="products/:section/:categoryId" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<CreateAccount />} />
        <Route path="/admin" element={isAuthenticated ? <AdminPage/> : <Home/>} />
        <Route path="/admin/products" element={isAuthenticated ? <AdminProductsPage/> : <Home/>} />
        <Route path="/admin/categories" element={isAuthenticated ? <AdminCategoriesPage/> : <Home/>} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path={'/cart/checkout'} element={<CartCheckout />} />
        <Route path={'/order-confirmed'} element={<CartOrderConfirmed />} />
        <Route path={'/profile'} element={<UserProfile />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
