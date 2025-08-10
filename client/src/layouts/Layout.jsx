import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
        <Navbar />
        {/* <hr /> */}
    <Outlet />
    </div>
   
  )
}
export default Layout;