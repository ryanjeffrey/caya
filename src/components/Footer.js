import React from 'react'
import pt from "../assets/images/pt-logo.png"
import tfbg from "../assets/images/tfbg-logo.png"

export default function Footer() {
    return (
      <div className="footer-wrapper">
        <a
          href="https://www.psychologytoday.com/us"
          target="_blank"
          rel="noreferrer"
        >
          <img class="footer-img" src={pt} alt="psychology today logo" />
        </a>
        <a
          href="https://therapyforblackgirls.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="footer-img"
            src={tfbg}
            alt="therapy for black girls logo"
          />
        </a>
        <footer>&copy; {new Date().getFullYear()} Caya Wellness LLC</footer>
      </div>
    )
}
