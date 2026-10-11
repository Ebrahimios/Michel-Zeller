import { Link } from 'react-router-dom'

export default function ImageSection() {
  return (
    <section className="story-section" id="story">
      <div className="container story-grid">
        <div className="story-image">
          <img src="/images/optimized/Michel_Zeller_1.webp" alt="Artwork from the Michel Zeller collection" />
        </div>
        <div className="story-copy">
          <p className="eyebrow">A life in art</p>
          <h2>Who is <span>Michel Zeller?</span></h2>
          <p>Originally from Sologne, Michel Zeller arrived in the Hautes-Pyrénées with his family in 1939. Trained in lacquer painting by his father, Pierre Zeller, he became a gallery owner and a passionate advocate for the artists of Tarbes.</p>
          <p>After years devoted to his own lacquer work, Michel and Brigitte Zeller reopened their gallery in 1982. Their gallery became an important meeting place for local artists and their work.</p>
          <Link to="/about"><button className='michel-btn btn'>Read his story <span aria-hidden="true">↗</span></button></Link>
        </div>
      </div>
    </section>
  )
}