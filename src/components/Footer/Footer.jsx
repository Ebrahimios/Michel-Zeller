import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/buy', label: 'Gallery' },
  { to: '/about', label: 'The artist' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-5">
            <Link className="footer-brand" to="/">Michel Zeller</Link>
            <p className="mb-0 mt-2">A life devoted to lacquer and the artists of Tarbes.</p>
          </div>
          <div className="col-lg-5 footer-links">
            {footerLinks.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
          </div>
          <div className="col-lg-2 text-lg-end">
            <a className="social-link" href="https://www.instagram.com/maison_zeller/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
        <div className="footer-rule mt-4 pt-3">© {new Date().getFullYear()} Michel Zeller. All rights reserved.</div>
      </div>
    </footer>
  )
}