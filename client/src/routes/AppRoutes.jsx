import About from "@/pages/About";
import Dashboard from "@/pages/Admin/Dashboard";
import Manage from "@/pages/Admin/Manage";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        { /* Public */ }
        <Route element={<Layout />}  >

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>

        { /* Private */ }
        <Route path="admin" element={<LayoutAdmin />} >
          
          <Route index element={<Dashboard />} />
          <Route path="manage/:id" element={<Manage />} />     
        </Route>

        { /* Error */ }
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;