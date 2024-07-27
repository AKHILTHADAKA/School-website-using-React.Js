import React from "react";
import "./Admissions.css"; // Import the CSS file

function Admissions() {
  return (
    <div className="admissions">
      <h1>Admissions</h1>
      <section className="process">
        <h2>Process</h2>
        <p>
          The admission process at Springdale Public School is designed to be
          straightforward and accessible. Prospective students and their
          families can download the admission forms from our official website.
          Once completed, these forms must be submitted along with the required
          documents to the school office. The documents typically include proof
          of identity, previous academic records, and other necessary paperwork
          as specified in the admission guidelines. We recommend submitting the
          forms well before the deadline to ensure that all required
          documentation is reviewed thoroughly. Our admissions team is available
          to assist with any queries or provide support throughout the process
          to make it as smooth as possible.
        </p>
      </section>
      <section className="criteria">
        <h2>Criteria</h2>
        <p>
          Admission to Springdale Public School is determined based on merit and
          the availability of seats in the respective grade levels. For certain
          grades, entrance tests may be conducted to assess the candidate’s
          suitability and academic readiness. The entrance tests are designed to
          evaluate key competencies in subjects relevant to the grade level
          being applied for. The results of these tests, combined with academic
          performance and other factors, help in making a fair and informed
          decision. We encourage all applicants to prepare well for the entrance
          tests and provide accurate information in their application to
          facilitate a smooth admission process.
        </p>
      </section>
      <section className="important-dates">
        <h2>Important Dates</h2>
        <ul>
          <li>
            <strong>Admission Form Availability:</strong> March 1st
          </li>
          <li>
            <strong>Last Date for Submission:</strong> March 31st
          </li>
          <li>
            <strong>Entrance Test:</strong> April 15th
          </li>
          <li>
            <strong>Announcement of Results:</strong> April 30th
          </li>
        </ul>
        <p>
          To ensure a seamless admission experience, please make note of the key
          dates. Admission forms will be available from March 1st, and the last
          date for form submission is March 31st. For those applying to grades
          where entrance tests are required, these will be held on April 15th.
          The results of the entrance tests will be announced on April 30th. It
          is important to adhere to these dates to avoid missing any critical
          deadlines and to facilitate timely processing of applications.
        </p>
      </section>
    </div>
  );
}

export default Admissions;
