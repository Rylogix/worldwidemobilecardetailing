import SEO from '../components/SEO'
import FAQAccordion from '../components/FAQAccordion'
import FleetQuoteForm from '../components/forms/FleetQuoteForm'
import { business, faqs, fleetPricing } from '../data/siteContent'

const fleetFaqs = [
  ...faqs,
  { q: 'What fleet vehicles do you service?', a: 'Semi trucks, trailers, and heavy equipment across the Atlanta metro service area.' },
]

function FleetPage() {
  return (
    <>
      <SEO title="Fleet Service | Atlanta Semi Truck & Equipment Detailing" description="Atlanta fleet detailing and washing for semi trucks, trailers, and heavy equipment. Exterior wash, full detail, and recurring fleet discounts." />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Fleet Detailing Atlanta</p>
          <h1>Reliable fleet washing and detailing for semis, trailers, and heavy equipment.</h1>
          <p>Fast response call/text <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a></p>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {fleetPricing.map((item) => (
            <article key={item.title} className="pricing-card">
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="container split">
          <div>
            <h2>Built for B2B Fleet Operations</h2>
            <ul className="list-check">
              <li>Semi truck and trailer wash combinations</li>
              <li>Heavy equipment cleaning and detailing support</li>
              <li>Recurring routes across Atlanta and nearby metro areas</li>
              <li>Priority response and contract scheduling options</li>
            </ul>
          </div>
          <FleetQuoteForm />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Fleet FAQ</h2>
          <FAQAccordion items={fleetFaqs} />
        </div>
      </section>
    </>
  )
}

export default FleetPage
