import { Outlet, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className=" d-flex flex-column h-100 w-100">
      <Header />

      <main className="d-flex flex-fill justify-content-center align-items-start overflow-auto p-3 w-100">
        <Outlet /> {/* Hier wird der jeweilige Seiten-Content gerendert */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
