import { Route } from "react-router";
import { Routes } from "react-router";
import { MainLayout } from "../core/layouts/MainLayout";
import { Suspense, lazy } from "react";
import Home from "../pages/Home";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { ProductFormPage } from "../pages/ProductFormPage";

const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export const AppRoute = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas que usan el Layout (Header y Footer) */}
          <Route index element={<Home />} />
          {/* Ruta para la página de inicio */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="product/new" element={<ProductFormPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};
