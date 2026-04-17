import { useState } from 'react'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        return (
          <article key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              <span>{item.q}</span>
              <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <p>{item.a}</p>}
          </article>
        )
      })}
    </div>
  )
}

export default FAQAccordion
