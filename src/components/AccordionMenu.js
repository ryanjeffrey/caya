import React from "react"
import Accordion from "../components/Accordion"

function AccordionMenu() {
  return (
    <div className="App">
      <Accordion
        title="Psychotherapy"
        content="<p>Psychotherapy helps individuals manage a wide range of mental health-related concerns and diagnoses. CAYA wellness offers evidence-based, effective treatments for mental health conditions, coping with chronic illness, and healing past traumas. All psychotherapy patients will receive an initial psychological assessment for diagnosis and treatment planning.</p>
        <h3>Treatments Offered:</h3>
        <ul>
            <li>Symptom-Focused Hypnosis</li>
            <li>Cognitive Behavioral Therapy (CBT)</li>
            <li>Acceptance and Commitment Therapy (ACT)</li>
            <li>Cognitive Processing Therapy (CPT)</li>
            <li>Prolonged Exposure (PE)</li>
            <li>Humanistic-Existential Psychotherapy</li>
        </ul>
        <h3>Fees:</h3>
        <ul>
            <li>Initial Intake: $225/per 55-minute session</li>
            <li>Psychotherapy: $185/per 50-minute session</li>
        </ul>"
      />
      <Accordion
        title="Assessment"
        content="<p>Pre-surgical psychological assessment/clearance is often a requirement prior to specific surgeries and procedures. CAYA Wellness offers high-quality, compassionate, and straightforward presurgical assessments for patients seeking bariatric surgery, spinal cord stimulators, intrathecal pain pumps, and other surgical procedures.</p>
        <h3>Fees*:</h3>
        <ul>
            <li>Bariatric Assessment: $500</li>
            <li>Spinal Cord Stimulator: $500</li>
            <li>Intrathecal Pain Pump: $500</li>
            <li>Peripheral Nerve Stimulator: $500</li>
            <li>Transplant Assessment: $900</li>
            <li>Other Assessment: $500-$900</li>
            <li>Spinal Cord Stimulator: $500</li>
            <p>*Includes assessment and testing services</p>
        </ul>"
      />
      <Accordion
        title="Consultation"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      />
      <Accordion
        title="Coaching"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  )
}

export default AccordionMenu
