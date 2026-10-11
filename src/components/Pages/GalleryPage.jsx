import { useEffect, useState } from 'react'
import { fetchArtworks } from '../../data/galleryData.jsx'
import Gallery from '../Gallery/Gallery.jsx'

const PAGE_SIZE = 12

export default function GalleryPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    const loadInitialArtworks = async () => {
      setLoading(true)

      try {
        const nextArtworks = await fetchArtworks({ limit: PAGE_SIZE, offset: 0 })
        if (active) {
          setItems(nextArtworks)
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadInitialArtworks()

    return () => {
      active = false
    }
  }, [])

  return (
    <main className="page-main">
      <Gallery
        items={items}
        eyebrow="Original works"
        title="Take a"
        highlight="look."
        description="Explore a richer selection of paintings from the public collection archive."
        loading={loading}
      />
    </main>
  )
}