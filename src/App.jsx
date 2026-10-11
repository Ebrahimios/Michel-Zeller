import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/Layout/SiteLayout.jsx'
import AboutPage from './components/Pages/AboutPage.jsx'
import ArtworkPage from './components/Pages/ArtworkPage.jsx'
import ContactPage from './components/Pages/ContactPage.jsx'
import GalleryPage from './components/Pages/GalleryPage.jsx'
import HomePage from './components/Pages/HomePage.jsx'
import NotFoundPage from './components/Pages/NotFoundPage.jsx'
import PressPage from './components/Pages/PressPage.jsx'
import './gallery.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="buy">
            <Route index element={<GalleryPage />} />
            <Route path=":paint" element={<ArtworkPage />} />
          </Route>
          <Route path="press" element={<PressPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
