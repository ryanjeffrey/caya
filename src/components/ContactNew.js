import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="contact-section">
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
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="email"
              name="email"
              placeholder="email address"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="number"
              name="number"
              placeholder="phone number"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <textarea
              name="message"
              placeholder="when would you like to schedule your consultation?"
              cols="30"
              rows="4"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
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
          If you or a loved one are experiencing a mental health crisis, please
          call 1-800-273-8255.
        </p>
      </div>
    </div>
  )
}
