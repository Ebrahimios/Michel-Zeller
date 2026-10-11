import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchArtworkById } from '../../data/galleryData.jsx'
import NotFoundPage from './NotFoundPage.jsx'

export default function ArtworkPage() {
  const { paint } = useParams()
  const [artwork, setArtwork] = useState(null)

  useEffect(() => {
    let active = true

    fetchArtworkById(paint)
      .then((data) => {
        if (active) setArtwork(data)
      })
      .catch(() => {
        if (active) setArtwork(null)
      })

    return () => {
      active = false
    }
  }, [paint])

  if (!artwork) return <NotFoundPage />

  return (
    <main className="page-main artwork-detail section-space">
      <div className="container">
        <Link to="/buy" className="back-link">← Back to the gallery</Link>
        <div className="row align-items-center g-5 mt-2">
          <div className="col-lg-7"><img className="detail-image" src={artwork.image} alt={artwork.title} loading="eager" /></div>
          <div className="col-lg-5 detail-copy">
            <p className="eyebrow">Original artwork · No. {artwork.id}</p>
            <h1>{artwork.title}</h1>
            <p>{artwork.description}</p>
            <p className="detail-price">€{artwork.price}</p>
            <dl className="detail-specs">
              <div><dt>Artist</dt><dd>{artwork.artist}</dd></div>
              <div><dt>Dimensions</dt><dd>{artwork.size}</dd></div>
              <div><dt>Year</dt><dd>{artwork.year}</dd></div>
            </dl>
            <Link className="btn btn-accent" to={`/contact?artwork=${encodeURIComponent(artwork.title)}`}>Enquire about this work <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </main>
  )
}