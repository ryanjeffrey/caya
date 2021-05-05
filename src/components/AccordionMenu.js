import React from "react"
import Accordion from "../components/Accordion"

function AccordionMenu() {
  return (
    <div className="App">
      <Accordion
        title="Psychotherapy"
        content="<p>Psychotherapy helps individuals manage a wide range of mental health-related concerns and diagnoses. CAYA wellness offers evidence-based, effective treatments for mental health conditions, coping with chronic illness, and healing past traumas. All psychotherapy patients will receive an initial psychological assessment for diagnosis and treatment planning.</p>
        </br>
        <span><h3>Treatments Offered:</h3>
        <ul>
            <li>Symptom-Focused Hypnosis</li>
            <li>Cognitive Behavioral Therapy (CBT)</li>
            <li>Acceptance and Commitment Therapy (ACT)</li>
            <li>Cognitive Processing Therapy (CPT)</li>
            <li>Prolonged Exposure (PE)</li>
            <li>Humanistic-Existential Psychotherapy</li>
        </ul>
        </br>
        <h3>Fees:</h3>
        <ul>
            <li>Initial Intake: $225/per 55-minute session</li>
            <li>Psychotherapy: $185/per 50-minute session</li>
        </ul>
        </span>"
      />
      <Accordion
        title="Assessment"
        content="<p>Pre-surgical psychological assessment/clearance is often a requirement prior to specific surgeries and procedures. CAYA Wellness offers high-quality, compassionate, and straightforward presurgical assessments for patients seeking bariatric surgery, spinal cord stimulators, intrathecal pain pumps, and other surgical procedures.</p>
        </br>
        <span><h3>Fees*:</h3>
        <ul>
            <li>Bariatric Assessment: $500</li>
            <li>Spinal Cord Stimulator: $500</li>
            <li>Intrathecal Pain Pump: $500</li>
            <li>Peripheral Nerve Stimulator: $500</li>
            <li>Transplant Assessment: $900</li>
            <li>Other Assessment: $500-$900</li>
            <li>Spinal Cord Stimulator: $500</li>
            <p>*Includes assessment and testing services</p>
        </ul>
        </span>"
      />
      <Accordion
        title="Consultation"
        content="
        <p>CAYA Wellness provides a wide range of consultation services to large corporations and start-ups. Services include diversity and inclusion seminars, company wellness trainings, corporate assessment and intergroup relations.</p>
        </br>
        <span>
        <h3>Fee:</h3>
        <p>$185/per hour</p>
        </span>"
      />
      <Accordion
        title="Modern Love Coaching"
        content="<p>CAYA Wellness offers coaching services for online daters that are in the process of finding lasting love. Techniques utilized in these services incorporate scientific research to help daters engage in best practices when it comes to dating. In addition, services help daters get clear on the traits of their ideal partner, navigate online dating platforms, and learn about common pitfalls and barriers to successful dating.</p>
        </br>
        <span><h3>**Differences between coaching and psychotherapy:</h3><p>While overlaps exist between coaching and psychotherapy, coaching and psychotherapy are two distinct practices. Psychotherapy focuses on the assessment and treatment of mental health disorders. Coaching is a future-focused approach that centers on achieving a particular goal. Coaching gives mentally healthy individuals tools to work towards their desired goal and is not a substitute for psychotherapy.</p>
        </br>
        <h3>Fee:</h3>
        <p>$150/per 60-minute meeting</p>
        </>"
      />
      <Accordion
        title="Speaking &#38; Workshops"
        content="<p>Please Contact For Rates</p>
        "
      />
    </div>
  )
}

export default AccordionMenu
