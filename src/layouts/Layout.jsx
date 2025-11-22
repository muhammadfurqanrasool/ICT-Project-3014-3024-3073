import {Nav, Footer} from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout