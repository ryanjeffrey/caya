import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import { FaHandHoldingHeart } from "react-icons/fa"

const About = () => {
  return (
    <Layout>
      <main>
        <div className="bio-container">
          <div className="bio">
            <div className="bio-headshot">
              <StaticImage
                src="../assets/images/headshot.jpeg"
                alt=""
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              /></div>
            <h2>Dr. Courtney Cornick Skinner</h2>
            <p>
              <strong>Dr. Courtney Cornick Skinner</strong> is a licensed
              psychologist in the states of Illinois, Wisconsin, Indiana, and
              Florida. Dr. Skinner completed her PhD in Counseling Psychology at
              the University of Iowa, followed by an APA-accredited internship
              at the Milwaukee VA Medical Center and an APA-accredited
              postdoctoral fellowship in medical rehabilitation psychology at
              Hines VA Medical Center in the Chicagoland area. Dr. Skinner
              received specialized training and instruction in health psychology
              and completed her doctoral dissertation on clinical hypnosis and
              chronic pain. Dr. Skinner has experience providing mental health
              services in private hospitals, Department of Veterans Affairs, and
              private practice.
            </p>
            <p>
              Dr. Skinner has published research and conducted trainings in
              various settings around the country. Dr. Skinner serves as a
              consultant related to hiring and retention of diverse staff,
              intergroup relations, improving employee awareness within the
              workplace, and best practices in psychological assessment via
              telemedicine platforms.
            </p>
            <div className="areas">
              <FaHandHoldingHeart
              size="50px"/>
              <h3>Areas of Specialization:</h3>
              <ul>
                <li>
                  Health Psychology
                  <ul>
                    <li>Chronic Pain</li>
                    <li>Chronic Medical Conditions</li>
                    <li>Women's Health</li>
                    <li>Behavioral Health</li>
                    <li>Obesity &#38; Body Positive Psychotherapy</li>
                  </ul>
                </li>
                <li>
                  Disability
                  <ul>
                    <li>Multiple Sclerosis</li>
                    <li>Spinal Cord Injury</li>
                  </ul>
                </li>
                <li>Depression</li>
                <li>Holistic Wellness</li>
                <li>Anxiety</li>
                <li>Trauma</li>
                <li>Military Personnel/Veterans</li>
                <li>Spirituality &#38; Religion</li>
                <li>Relationships</li>
                <li>Race/Multicultural Approaches to Psychotherapy</li>
                <li>Clinical Hypnosis</li>
                <li>Mindfulness/Meditation</li>
                <li>Coaching</li>
                <li>
                  Assessment
                  <ul>
                    <li>Organ Transplant</li>
                    <li>Bone Marrow and Stem Cell Transplant</li>
                    <li>
                      Neuromodulation
                      <ul>
                        <li>Spinal Cord Stimulator</li>
                        <li>Intrathecal Pain Pump</li>
                        <li>Peripheral Nerve Stimulator</li>
                      </ul>
                    </li>
                    <li>Bariatric Surgery</li>
                    <li>Cosmetic Surgery</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <Link to="/services" className="btn">
            Learn More
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default About
