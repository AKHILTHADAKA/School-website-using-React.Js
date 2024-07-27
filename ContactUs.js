import React from "react";
import "./ContactUs.css"; // Import the CSS file

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <section className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> Springdale Public School, 123 Education
          Lane, Cityville, State, ZIP Code
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@springdale.edu">info@springdale.edu</a>
        </p>
      </section>
      <section className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="map">
        <h2>Find Us on the Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.874280113885!2d-73.97417868459085!3d40.77359777932938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2587c92727a1b%3A0x6fef0ff0e7e21d5!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1636617648937!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;
