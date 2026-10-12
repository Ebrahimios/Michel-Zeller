import { Link } from 'react-router-dom'

export default function Card({ artwork }) {
  const handleImageError = (event) => {
    event.currentTarget.src = '/images/optimized/testing_images/image_1.webp'
    event.currentTarget.onerror = null
  }

  return (
    <article className="artwork-card h-100">
      <Link to={`/gallery/${artwork.id}`} className="artwork-link">
        <div className="artwork-image-wrap">
          <img className="artwork-image" src={artwork.image} alt={artwork.title} onError={handleImageError} />
          <span className="artwork-open" aria-hidden="true">View artwork ↗</span>
        </div>
        <div className="artwork-caption">
          <div>
            <h3>{artwork.title}</h3>
            <p>{artwork.artist}</p>
            <p>{artwork.size} · {artwork.year}</p>
          </div>
          <span className="artwork-price">€{artwork.price}</span>
        </div>
      </Link>
    </article>
  )
}