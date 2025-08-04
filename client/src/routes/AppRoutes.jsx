import About from "@/pages/About";
import Dashboard from "@/pages/Admin/Dashboard";
import Manage from "@/pages/Admin/Manage";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import Camping from "@/pages/Admin/Camping"; 
import Profile from "@/pages/user/Profile"; 
import ProtectRoute from "./ProtectRoute";
import CampingDetail from "../pages/user/CampingDetail";
import Checkout from "../pages/user/Checkout";
import CheckoutComplete from "../pages/user/CheckoutComplete";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        { /* Public */ }
        <Route element={<Layout />}  >

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>


        { /* Private User*/ }
        <Route path="user" element={<Layout />} >
          <Route path="profile" element={<Profile />} />
          <Route path="camping/:id" element={<CampingDetail />} />
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="complete/:session" element={<CheckoutComplete />} />
          </Route>

        { /* Private */ }
        <Route path="admin" element={<ProtectRoute  el={<LayoutAdmin />} />} >

          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />     
          <Route path="camping" element={<Camping />} />
        </Route>

        { /* Error */ }
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;