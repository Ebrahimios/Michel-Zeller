import axios from 'axios'

const MET_API_BASE = 'https://collectionapi.metmuseum.org/public/collection/v1'
const MET_SEARCH_API = 'https://collectionapi.metmuseum.org/public/collection/v1.1/search'

export function buildArtworkImage(item) {
  if (!item) return ''
  return item.primaryImage || item.primaryImageSmall || ''
}

export function normalizeArtwork(item) {
  return {
    id: String(item.objectID || item.id),
    title: item.title || 'Untitled artwork',
    description: item.artistDisplayName
      ? `${item.artistDisplayName} • ${item.title || 'Artwork from the collection'}`
      : 'Artwork from the Metropolitan Museum of Art collection.',
    price: 250 + (Number(item.objectID || item.id) % 12) * 75,
    size: item.dimensions || 'Original work',
    image: buildArtworkImage(item),
    artist: item.artistDisplayName || 'The Met',
    year: item.objectDate || 'Unknown',
  }
}

function hasArtworkImage(item) {
  return Boolean(item && (item.primaryImage || item.primaryImageSmall))
}

async function fetchMetMuseumObject(objectId) {
  const response = await axios.get(`${MET_API_BASE}/objects/${objectId}`)

  if (!hasArtworkImage(response.data)) {
    return null
  }

  return normalizeArtwork(response.data)
}

export async function fetchArtworks({ limit = 12, offset = 0 } = {}) {
  const searchResponse = await axios.get(MET_SEARCH_API, {
    params: {
      departmentId: 11,
      q: 'painting',
      hasImages: true,
      limit,
      offset,
    },
  })

  const objectIds = Array.isArray(searchResponse.data?.objectIDs) ? searchResponse.data.objectIDs : []

  if (!objectIds.length) {
    return []
  }

  const artworks = await Promise.all(objectIds.map(fetchMetMuseumObject))
  return artworks.filter(Boolean)
}

export async function fetchArtworkById(id) {
  return fetchMetMuseumObject(id)
}

export const artworks = []

export const pressItems = Array.from({ length: 35 }, (_, index) => ({
  id: index + 1,
  image: `/images/optimized/press/image_${index + 1}.webp`,
}))