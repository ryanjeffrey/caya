import React from "react"
import Layout from "../components/Layout"
import {Link} from 'gatsby'

const Services = () => {
  return (
    <Layout>
      <div className="services-wrapper">
        <article className="services-content">
          <h2>Psychotherapy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
            Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Porttitor
            rhoncus dolor purus non enim praesent elementum facilisis. Eget
            magna fermentum iaculis eu non diam phasellus vestibulum lorem. Est
            ultricies integer quis auctor elit sed vulputate mi sit. Lectus
            mauris ultrices eros in cursus turpis massa tincidunt. Eu lobortis
            elementum nibh tellus molestie nunc non. Eleifend mi in nulla
            posuere sollicitudin. Pellentesque id nibh tortor id aliquet lectus.
            Eget magna fermentum iaculis eu non. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec. Tincidunt lobortis
            feugiat vivamus at augue eget arcu dictum varius. Praesent tristique
            magna sit amet purus. Mauris augue neque gravida in fermentum et
            sollicitudin. Nulla pellentesque dignissim enim sit amet venenatis
            urna cursus.
          </p>
        </article>
        <article className="services-content">
          <h2>Assessment</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
            Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Porttitor
            rhoncus dolor purus non enim praesent elementum facilisis. Eget
            magna fermentum iaculis eu non diam phasellus vestibulum lorem. Est
            ultricies integer quis auctor elit sed vulputate mi sit. Lectus
            mauris ultrices eros in cursus turpis massa tincidunt. Eu lobortis
            elementum nibh tellus molestie nunc non. Eleifend mi in nulla
            posuere sollicitudin. Pellentesque id nibh tortor id aliquet lectus.
            Eget magna fermentum iaculis eu non. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec. Tincidunt lobortis
            feugiat vivamus at augue eget arcu dictum varius. Praesent tristique
            magna sit amet purus. Mauris augue neque gravida in fermentum et
            sollicitudin. Nulla pellentesque dignissim enim sit amet venenatis
            urna cursus.
          </p>
        </article>
        <article className="services-content">
          <h2>Coaching</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
            Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Porttitor
            rhoncus dolor purus non enim praesent elementum facilisis. Eget
            magna fermentum iaculis eu non diam phasellus vestibulum lorem. Est
            ultricies integer quis auctor elit sed vulputate mi sit. Lectus
            mauris ultrices eros in cursus turpis massa tincidunt. Eu lobortis
            elementum nibh tellus molestie nunc non. Eleifend mi in nulla
            posuere sollicitudin. Pellentesque id nibh tortor id aliquet lectus.
            Eget magna fermentum iaculis eu non. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec. Tincidunt lobortis
            feugiat vivamus at augue eget arcu dictum varius. Praesent tristique
            magna sit amet purus. Mauris augue neque gravida in fermentum et
            sollicitudin. Nulla pellentesque dignissim enim sit amet venenatis
            urna cursus.
          </p>
        </article>
      </div>
      <div className="btn-wrapper">
        <Link to="/contact" className="btn">
          Reach Out
        </Link>
      </div>
    </Layout>
  )
}

export default Services
