import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main>
        <div className="bio-container">
          <div className="bio">
            <h1>Dr. Courtney Skinner</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pharetra vel turpis nunc eget lorem. Montes nascetur ridiculus mus
              mauris vitae ultricies. Volutpat blandit aliquam etiam erat. Vel
              fringilla est ullamcorper eget. At erat pellentesque adipiscing
              commodo elit at imperdiet dui. Ipsum suspendisse ultrices gravida
              dictum fusce ut placerat. Pulvinar elementum integer enim neque.
              Quisque non tellus orci ac auctor augue mauris augue neque. Ac
              feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper. Lectus nulla at volutpat diam ut venenatis. Dui
              sapien eget mi proin sed libero enim sed. Est sit amet facilisis
              magna etiam tempor orci. Molestie nunc non blandit massa enim nec
              dui. Varius vel pharetra vel turpis nunc eget lorem dolor sed.
              <br />
              <br />
              Sapien faucibus et molestie ac feugiat sed lectus. Vel fringilla
              est ullamcorper eget. Risus feugiat in ante metus dictum.
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit.
              Libero id faucibus nisl tincidunt eget. Gravida in fermentum et
              sollicitudin ac. Mauris augue neque gravida in fermentum. Quis
              auctor elit sed vulputate mi sit. Id aliquet risus feugiat in.
              Quam id leo in vitae turpis. Egestas pretium aenean pharetra magna
              ac. Dolor morbi non arcu risus quis varius quam. Neque vitae
              tempus quam pellentesque nec nam aliquam sem. Ultrices vitae
              auctor eu augue ut lectus arcu bibendum at. Non sodales neque
              sodales ut etiam sit amet.
              <br />
              <br />
              Placerat vestibulum lectus mauris ultrices eros in cursus.
              Sollicitudin nibh sit amet commodo nulla facilisi nullam.
              Consequat ac felis donec et. Pellentesque sit amet porttitor eget
              dolor morbi. Aliquet bibendum enim facilisis gravida neque. Nisl
              nisi scelerisque eu ultrices vitae auctor eu augue ut. Dignissim
              sodales ut eu sem integer vitae justo. Bibendum ut tristique et
              egestas quis ipsum suspendisse. Viverra orci sagittis eu volutpat
              odio facilisis mauris sit amet. Augue mauris augue neque gravida.
              Sed viverra ipsum nunc aliquet bibendum. Consectetur adipiscing
              elit duis tristique sollicitudin nibh. Orci ac auctor augue mauris
              augue neque gravida. Cursus turpis massa tincidunt dui ut. Risus
              at ultrices mi tempus. Sem nulla pharetra diam sit amet nisl
              suscipit adipiscing. Lacus viverra vitae congue eu. Aliquet nec
              ullamcorper sit amet risus nullam eget.
              <br />
            </p>
          </div>
        </div>
        <div className="btn-wrapper">
          <Link to="/services" className="btn">
            Learn More &gt;
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default About
