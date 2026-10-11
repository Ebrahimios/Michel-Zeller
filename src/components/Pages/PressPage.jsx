import { useEffect, useState } from 'react'
import { pressItems } from '../../data/galleryData.jsx'

export default function PressPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedImage])

  return (
    <main className="page-main section-space">
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">In the archives</p>
          <h1>Zeller with <span>the press.</span></h1>
          <p>Selected articles, publications, and moments from the gallery archive.</p>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3 press-grid">
          {pressItems.map((item) => (
            <div className="col" key={item.id}>
              <button className="press-image-button" type="button" onClick={() => setSelectedImage(item.image)} aria-label={`Enlarge press archive image ${item.id}`}>
                <img src={item.image} alt={`Press archive ${item.id}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Press image viewer" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setSelectedImage(null)}>×</button>
          <img src={selectedImage} alt="Enlarged press archive" loading="eager" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  )
}