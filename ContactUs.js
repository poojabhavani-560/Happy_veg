import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  function update(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function submit(event) {
    event.preventDefault();

    // Demo only: connect your contact API to send the message.
    setMessageSent(true);
  }

  if (messageSent) {
    return (
      <section className="form-page contact-page">
        <div className="site-form contact-success">
          <h1>Message Sent Successfully!</h1>

          <p>Thank you for contacting HappyVeg.</p>
          <p>We appreciate your feedback and will get back to you.</p>

          <Link to="/" className="green-button contact-home-link">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page contact-page">
      <form className="site-form" onSubmit={submit}>
        <h1>Contact Us</h1>

        <label htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={update}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={update}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={update}
          placeholder="Enter subject"
          required
        />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={update}
          placeholder="Write your message"
          rows={4}
          required
        />

        <button type="submit" className="green-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactUs;