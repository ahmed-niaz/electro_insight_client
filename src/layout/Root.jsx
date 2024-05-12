import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <main className="font-outfit">
      <Navbar />
      <div className="min-h-[calc(100vh-297px]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Root;
