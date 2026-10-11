import { Link } from 'react-router-dom'
import Card from './Card.jsx'

export function ArtworkGrid({ items }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 g-xl-5">
      {items.map((artwork) => <div className="col" key={artwork.id}><Card artwork={artwork} /></div>)}
    </div>
  )
}

export default function Gallery({
  items,
  eyebrow,
  title,
  highlight,
  description,
  className = '',
  showAll = false,
  loading = false,
}) {
  return (
    <section className={`section-space ${className}`}>
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title} <span>{highlight}</span></h2>
            {description && <p className="gallery-description">{description}</p>}
          </div>
          {showAll && <Link className="text-link" to="/buy">Explore the gallery <span aria-hidden="true">↗</span></Link>}
        </div>

        {loading && items.length === 0 ? (
          <div className="gallery-loader" aria-live="polite">
            <span className="loader-spinner" aria-hidden="true" />
            <span>Loading paintings…</span>
          </div>
        ) : (
          <ArtworkGrid items={items} />
        )}
      </div>
    </section>
  )
}