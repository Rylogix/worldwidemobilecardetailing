import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { serviceDetails } from '../data/siteContent'

function ServicesPage() {
  return (
    <>
      <SEO title="Services | Mobile Car Detailing Atlanta" description="Interior, exterior, full detail, luxury and maintenance mobile detailing services in Atlanta and metro areas." />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Professional mobile detailing packages for every vehicle type.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container service-grid">
          {serviceDetails.map((service) => (
            <article key={service.title} className="pricing-card">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <p><strong>Ideal for:</strong> {service.idealFor}</p>
              <Link className="btn btn-secondary" to="/contact">Request This Service</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
