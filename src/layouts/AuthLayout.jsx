import { Outlet } from "react-router-dom"
import { Footer } from "../components"

const AuthLayout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AuthLayout;