import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
        <h1>Main Nav</h1>
        <hr />
    <Outlet />
    </div>
   
  )
}
export default Layout;