import {createHashRouter, RouterProvider} from 'react-router-dom'
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
  const routes = createHashRouter([
    {path: '/', element: <SiteLayout />, children: [
      {index: true, element: <HomePage />},
      {path: 'about', element: <AboutPage />},
      {path: 'gallery', children: [
        {index: true, element: <GalleryPage />}, 
        {path: ':paint', element: <ArtworkPage />}
      ]},
      {path: 'press', element: <PressPage />},
      {path: 'contact', element: <ContactPage />},
      {path: '*', element: <NotFoundPage />},
    ]}
]);

return (
    <>
      <RouterProvider router={routes}/>
    </>
)
}
