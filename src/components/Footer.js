import React from 'react'
import pt from "../assets/images/pt-logo.png"
import tfbg from "../assets/images/tfbg-logo.png"

export default function Footer() {
    return (
      <div className="footer-wrapper">
        <footer>&copy; {new Date().getFullYear()} CAYA Wellness LLC</footer>
        <a
          href="https://www.psychologytoday.com/us/therapists/courtney-cornick-chula-vista-ca/859200"
          target="_blank"
          rel="noreferrer"
        >
          <img class="footer-img" src={pt} alt="psychology today logo" />
        </a>
        <a
          href="https://providers.therapyforblackgirls.com/listing/dr-courtney-cornick/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="footer-img"
            src={tfbg}
            alt="therapy for black girls logo"
          />
        </a>
        
        <p>site by <a
          href="https://conjure.company"
          target="_blank"
          rel="noreferrer"
          className="conjure"
        >conjure</a></p>
      </div>
    )
}
