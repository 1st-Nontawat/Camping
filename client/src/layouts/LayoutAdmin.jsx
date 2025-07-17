import Navbar from "@/components/ui/navbar/Navbar"
import { Outlet } from "react-router-dom"


const LayoutAdmin = () => {
  return (
    <main className="container">
        
        <Navbar/>
        <Outlet />
    </main>
  )
}
export default LayoutAdmin