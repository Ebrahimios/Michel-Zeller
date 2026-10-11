import { Link } from 'react-router-dom'

export default function HeroSections() {
  return (
    <section className="home-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">The world of Michel Zeller</p>
          <h1>Zeller’s lacquers are not just looked at, <em>they are contemplated.</em></h1>
          <p className="hero-intro">Discover the work and legacy of a French lacquer painter whose life was shaped by art.</p>
          <Link className="btn btn-accent" to="/about">Discover Michel <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-art">
          <img src="/images/optimized/HeroPhoto.webp" alt="A selection of Michel Zeller's lacquer paintings" loading="eager" />
          <span className="hero-art-note">Colour, patience, and light</span>
        </div>
        <a className="hero-scroll" href="#story">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}