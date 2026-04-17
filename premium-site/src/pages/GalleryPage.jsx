import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import { galleryItems } from '../data/siteContent'

function GalleryPage() {
  const categories = useMemo(() => ['All', ...new Set(galleryItems.map((item) => item.category))], [])
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeImage, setActiveImage] = useState(null)

  const visibleItems = galleryItems.filter((item) => activeCategory === 'All' || item.category === activeCategory)

  return (
    <>
      <SEO title="Gallery | Worldwide Mobile Car Detailing" description="Before and after style gallery for premium mobile detailing services in Atlanta and surrounding areas." />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>Before and after style detailing results.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {visibleItems.map((item) => (
              <button key={item.src} type="button" className="gallery-tile" onClick={() => setActiveImage(item)}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>{item.category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setActiveImage(null)}>Close</button>
            <img src={activeImage.src} alt={activeImage.alt} />
            <p>{activeImage.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryPage
