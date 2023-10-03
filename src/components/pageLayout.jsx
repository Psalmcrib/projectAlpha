import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const PageLayout = () => {
  return (
    <div className="div-wrapper">
      <Navbar />
      <main className="main-body">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default PageLayout;
