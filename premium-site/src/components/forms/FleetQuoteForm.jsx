import { useState } from 'react'

const initialState = {
  company: '',
  contact: '',
  email: '',
  phone: '',
  fleetSize: '',
  serviceType: '',
  frequency: '',
  notes: '',
}

function FleetQuoteForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const validate = () => {
    const next = {}
    if (!form.company.trim()) next.company = 'Company is required.'
    if (!form.contact.trim()) next.contact = 'Contact name is required.'
    if (!form.phone.trim()) next.phone = 'Phone is required.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Valid email is required.'
    if (!form.fleetSize.trim()) next.fleetSize = 'Fleet size is required.'
    if (!form.serviceType.trim()) next.serviceType = 'Select a service type.'
    return next
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    try {
      setStatus('loading')
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Fleet quote request submitted. We will contact you quickly with next steps.')
      setForm(initialState)
    } catch {
      setStatus('error')
      setMessage('Unable to submit right now. Please call/text 404-907-7803.')
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h3>Request Fleet Quote</h3>
      <div className="form-grid">
        <label>
          Company
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          {errors.company && <small>{errors.company}</small>}
        </label>
        <label>
          Contact Name
          <input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
          {errors.contact && <small>{errors.contact}</small>}
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <small>{errors.email}</small>}
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
        <label>
          Fleet Size
          <input value={form.fleetSize} onChange={(e) => setForm({ ...form, fleetSize: e.target.value })} placeholder="5, 10, 25..." />
          {errors.fleetSize && <small>{errors.fleetSize}</small>}
        </label>
        <label>
          Service Type
          <select value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}>
            <option value="">Select one</option>
            <option>Exterior Wash</option>
            <option>Full Interior/Exterior Detail</option>
            <option>Semi Only</option>
            <option>Tractor + Trailer</option>
            <option>Heavy Equipment</option>
          </select>
          {errors.serviceType && <small>{errors.serviceType}</small>}
        </label>
        <label>
          Frequency
          <select value={form.frequency} onChange={(e) => setForm({ ...form, frequency: e.target.value })}>
            <option value="">Select frequency</option>
            <option>One-time service</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </label>
        <label className="full-width">
          Fleet Notes
          <textarea rows="4" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Vehicle types, locations, scheduling needs" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Get Fleet Quote'}
      </button>
      {message && <p className={`form-message ${status}`}>{message}</p>}
    </form>
  )
}

export default FleetQuoteForm
