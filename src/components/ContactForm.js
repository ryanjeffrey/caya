import React from 'react'

function ContactForm() {
    return (
      <div class="contact-section">
        <h2>Let's Connect</h2>
        <p>
          You may schedule a free 15-minute consultation to determine if CAYA
          Wellness is the best fit for your present mental health needs.
        </p>
        <p>
          Please do not include private/sensitive information in your message.
          This form is to be used for scheduling purposes only.
        </p>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input type="text" placeholder="name" name="name" id="name" />
          </div>
          <div>
            <input
              type="email"
              placeholder="email address"
              name="email"
              id="email"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="phone number"
              name="number"
              id="number"
            />
          </div>
          <div>
            <textarea
              placeholder="when would you like to schedule your consultation?"
              name="message"
              id="message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="contact-button">
            <button type="submit">Send</button>
          </div>
        </form>
        <div className="disclaimer">
          <p>
            Please note: Contacting CAYA Wellness by phone or e-mail does not
            establish a professional, therapeutic, and/or client-therapist
            relationship.
          </p>
          <p>
            {" "}
            If you are experiencing a medical or mental health emergency, please
            call 911.
          </p>
          <p>
            {" "}
            If you or a loved one are experiencing a mental health crisis,
            please call 1-800-273-8255.
          </p>
        </div>
      </div>
    )
}

export default ContactForm
