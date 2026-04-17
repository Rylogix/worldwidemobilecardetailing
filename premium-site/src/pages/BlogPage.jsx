import SEO from '../components/SEO'
import { blogPosts } from '../data/siteContent'

function BlogPage() {
  return (
    <>
      <SEO title="Blog | Atlanta Mobile Detailing Tips" description="Worldwide Mobile Car Detailing blog with Atlanta-focused detailing tips, fleet care insights, and service updates." />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Detailing insights for Atlanta drivers and fleet operators.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container blog-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-image" aria-hidden="true" />
              <p className="blog-meta">{post.date} • {post.tag}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button type="button" className="btn btn-secondary">Read More</button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default BlogPage
