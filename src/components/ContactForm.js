import React from 'react'

function ContactForm() {
    return (
      <div class="contact-section">
        <h2>Let's Connect</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="name"
              name="name"
              id="name"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <textarea
              placeholder="how can we serve you?"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    )
}

export default ContactForm
