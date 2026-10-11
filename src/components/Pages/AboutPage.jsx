import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img src="/images/optimized/SlideSwiper/image_1.webp" alt="A detail from Michel Zeller's artistic world" loading="eager" />
        <div className="about-hero-shade" />
        <div className="container about-hero-copy">
          <p className="eyebrow">The artist and the gallerist</p>
          <h1>A life shaped<br />by <em>art.</em></h1>
          <p>From Sologne to the foothills of the Pyrenees, Michel Zeller built a life around making, discovering, and sharing art.</p>
        </div>
      </section>
      <section className="about-story section-space">
        <div className="container about-story-grid">
          <p className="eyebrow">1939 — onward</p>
          <div>
            <h2>Painter, collector, <span>advocate.</span></h2>
            <p>Michel Zeller arrived in the Hautes-Pyrénées in 1939. His father, Pierre, trained him in the art of lacquer painting; the artists around Henri Borde further shaped his eye and his friendships.</p>
            <p>Michel and Brigitte opened their first exhibition space in Tarbes in 1957, later moving between Pau and Tarbes. Alongside their gallery work, Michel continued to create lacquer pieces inspired by the Far East. In 1982 they reopened a gallery at Place du Foirail, where they championed generations of regional artists until their retirement in 1999.</p>
            <Link className="text-link" to="/buy">View selected works <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}