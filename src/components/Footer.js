import React from 'react'
import pt from "../assets/images/pt-logo.png"
import tfbg from "../assets/images/tfbg-logo.png"

export default function Footer() {
    return (
      <div>
        <div>
        <img class="footer-img" src={pt} alt="psychology today logo" />
        <img class="footer-img"src={tfbg} alt="therapy for black girls logo" />
        </div>
        <footer>&copy; {new Date().getFullYear()} Caya Wellness LLC</footer>
      </div>
    )
}
