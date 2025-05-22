import { Route } from "react-router";
import { Routes } from "react-router";
import { MainLayout } from "../core/layouts/MainLayout";
import { ProductsPage } from "../pages/ProductsPage";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Rutas que usan el Layout (Header y Footer) */}
        <Route index element={<Home />} /> {/* Ruta para la página de inicio */}
        <Route path="products" element={<ProductsPage />} />
        {/* Ruta dinámica para detalles del producto */}
        {/* Agrega más rutas aquí que necesiten el Layout */}
        {/* Ejemplo de una ruta que NO usa el Layout (por ejemplo, una página de login/registro si la tuvieras)
        <Route path="login" element={<LoginPage />} /> 
        */}
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
