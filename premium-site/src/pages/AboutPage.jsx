import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { business } from '../data/siteContent'

function AboutPage() {
  return (
    <>
      <SEO title="About | Worldwide Mobile Car Detailing Atlanta" description="Learn about Worldwide Mobile Car Detailing and how we deliver premium mobile detailing across Atlanta metro areas." />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Worldwide Mobile Car Detailing</p>
          <h1>Premium detailing built for busy Atlanta drivers.</h1>
          <p>
            Worldwide Mobile Car Detailing was built around one promise: high-end results without disrupting your day.
            We bring expert interior and exterior detailing directly to your home, office, or preferred location.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>Our Service Approach</h2>
            <p>
              Our team uses professional-grade tools, premium products, and careful detailing methods to deliver a clean,
              refined finish on every vehicle. From daily commuters to luxury vehicles, we tailor service to condition and goals.
            </p>
            <p>
              The result is convenience, consistency, and trusted care that helps your vehicle look its best all year.
            </p>
          </div>
          <div className="card">
            <h3>Service Areas</h3>
            <p>{business.serviceAreas.join(', ')}, and nearby metro communities.</p>
            <p>Need quick scheduling? Call/text {business.phoneDisplay}.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">Book Now</Link>
              <a className="btn btn-secondary" href={`tel:${business.phoneRaw}`}>Call / Text</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
