import Navbar from "@/components/ui/navbar/Navbar"
import { Outlet } from "react-router-dom"


const LayoutAdmin = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}
export default LayoutAdmin