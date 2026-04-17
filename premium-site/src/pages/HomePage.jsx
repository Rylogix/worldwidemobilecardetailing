import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import FAQAccordion from '../components/FAQAccordion'
import { business, faqs, galleryItems, homeServiceCards, testimonials, trustPoints } from '../data/siteContent'

function HomePage() {
  return (
    <>
      <SEO
        title="Premium Mobile Car Detailing Atlanta | Worldwide Mobile Car Detailing"
        description="Premium mobile car detailing in Atlanta and nearby metro areas. Interior, exterior, full detail packages, and fleet services with fast booking."
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Atlanta Premium Mobile Detailing</p>
            <h1>Luxury-level detailing at your location. We come to you.</h1>
            <p>
              Exterior, interior, and full detail packages for Atlanta drivers who want premium results without the hassle.
              Book online or call/text {business.phoneDisplay}.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">Book Now</Link>
              <a className="btn btn-secondary" href={`tel:${business.phoneRaw}`}>Call / Text {business.phoneDisplay}</a>
            </div>
          </div>
          <div className="hero-panel">
            <h3>Why Atlanta chooses Worldwide</h3>
            <ul>
              {trustPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Service Categories</h2>
          <div className="card-grid">
            {homeServiceCards.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services">Explore Service</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <h2>Atlanta Metro Coverage</h2>
            <p>We service Atlanta, Sandy Springs, Roswell, Brookhaven, Alpharetta, and surrounding communities.</p>
          </div>
          <div className="pill-list">
            {business.serviceAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Gallery Preview</h2>
            <Link to="/gallery">View Full Gallery</Link>
          </div>
          <div className="gallery-grid">
            {galleryItems.slice(0, 4).map((item) => <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Real Voices</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="card">
                <p>“{testimonial.quote}”</p>
                <h4>{testimonial.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <h2>Ready for a premium mobile detail?</h2>
            <p>Book online in minutes or call/text for fast response.</p>
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/contact">Start Booking</Link>
            <a className="btn btn-secondary" href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}

export default HomePage
