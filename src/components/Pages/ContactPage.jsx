import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [searchParams] = useSearchParams()
  const artworkTitle = searchParams.get('artwork')

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page section-space">
      <div className="container">
        <div className="contact-panel row g-0">
          <div className="col-lg-5 contact-image"><img src="/images/optimized/contact.webp" alt="An artwork from the Michel Zeller gallery" /></div>
          <div className="col-lg-7 contact-form-wrap">
            <p className="eyebrow">We’d love to hear from you</p>
            <h1>Contact <span>us.</span></h1>
            {submitted ? (
              <div className="form-confirmation" role="status">
                <h2>Thank you for your message.</h2>
                <p>This preview does not send or store messages. Connect a contact service to receive enquiries.</p>
                <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {artworkTitle && <p className="enquiry-note">Enquiry about: {artworkTitle}</p>}
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label" htmlFor="firstName">First name</label><input className="form-control" id="firstName" name="firstName" autoComplete="given-name" required /></div>
                  <div className="col-md-6"><label className="form-label" htmlFor="lastName">Last name</label><input className="form-control" id="lastName" name="lastName" autoComplete="family-name" required /></div>
                  <div className="col-12"><label className="form-label" htmlFor="email">Email address</label><input className="form-control" id="email" name="email" type="email" autoComplete="email" required /></div>
                  <div className="col-12"><label className="form-label" htmlFor="message">Your message</label><textarea className="form-control" id="message" name="message" rows="4" required defaultValue={artworkTitle ? `I would like to know more about ${artworkTitle}.` : ''} /></div>
                  <div className="col-12"><button className="btn btn-accent" type="submit">Send message <span aria-hidden="true">↗</span></button></div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}