import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'

export default function SiteLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}