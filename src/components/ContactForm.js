import React from 'react'

function ContactForm() {
    return (
      <div id="contact-form">
        <form id="form" class="topBefore">
          <input id="name" type="text" placeholder="NAME" />
          <input id="email" type="text" placeholder="E-MAIL" />
          <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
          <input id="submit" type="submit" value="SEND" />
        </form>
      </div>
    )
}

export default ContactForm
