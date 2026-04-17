import SEO from '../components/SEO'
import BookingForm from '../components/forms/BookingForm'
import FleetQuoteForm from '../components/forms/FleetQuoteForm'
import { business } from '../data/siteContent'

function ContactPage() {
  return (
    <>
      <SEO title="Book Now | Worldwide Mobile Car Detailing Atlanta" description="Book premium mobile detailing in Atlanta or request a fleet quote. Call/text 404-907-7803 for fast response." />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Bookings & Contact</p>
          <h1>Book mobile detailing or request a fleet quote.</h1>
          <p>We come to you across Atlanta metro areas. Call/text <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>Consumer Booking</h2>
            <BookingForm />
          </div>
          <div>
            <h2>Fleet Quote</h2>
            <FleetQuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
