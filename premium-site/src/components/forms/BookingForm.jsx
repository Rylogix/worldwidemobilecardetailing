import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  vehicle: '',
  details: '',
}

function BookingForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Valid email is required.'
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    if (!form.service.trim()) next.service = 'Choose a service.'
    if (!form.vehicle.trim()) next.vehicle = 'Vehicle type is required.'
    return next
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    try {
      setStatus('loading')
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
      setMessage('Thanks. Your booking request was sent. We will follow up shortly.')
      setForm(initialState)
    } catch {
      setStatus('error')
      setMessage('Submission failed. Please try again or call/text us directly.')
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h3>Book Mobile Detailing</h3>
      <div className="form-grid">
        <label>
          Name
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <small>{errors.name}</small>}
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
          Service
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
            <option value="">Select service</option>
            <option>Interior Detailing</option>
            <option>Exterior Detailing</option>
            <option>Full Detail Package</option>
            <option>Maintenance Detail</option>
          </select>
          {errors.service && <small>{errors.service}</small>}
        </label>
        <label>
          Vehicle
          <input value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} placeholder="Sedan, SUV, Truck..." />
          {errors.vehicle && <small>{errors.vehicle}</small>}
        </label>
        <label className="full-width">
          Notes
          <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows="4" placeholder="Condition, preferred time, location" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Submit Booking Request'}
      </button>
      {message && <p className={`form-message ${status}`}>{message}</p>}
    </form>
  )
}

export default BookingForm
