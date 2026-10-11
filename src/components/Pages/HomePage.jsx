import { useEffect, useState } from 'react'
import { fetchArtworks } from '../../data/galleryData.jsx'
import CustomerOpinion from '../Ui/CustomerOpinion.jsx'
import Gallery from '../Gallery/Gallery.jsx'
import HeroSections from '../HeroSection/HeroSections.jsx'
import ImageSection from '../Section/ImageSection.jsx'

export default function HomePage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    const loadHomeArtworks = async () => {
      setLoading(true)

      try {
        const nextArtworks = await fetchArtworks({ limit: 4, offset: 0 })
        if (active) setItems(nextArtworks)
      } finally {
        if (active) setLoading(false)
      }
    }

    loadHomeArtworks()

    return () => {
      active = false
    }
  }, [])

  return (
    <main>
      <HeroSections />
      <ImageSection />
      <Gallery items={items} eyebrow="Selected works" title="Take a" highlight="look." className="home-gallery" showAll loading={loading} />
      <CustomerOpinion />
    </main>
  )
}