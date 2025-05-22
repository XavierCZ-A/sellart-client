import { Outlet } from "react-router";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
