import React, { useState } from "react";
import "../Components.css";

const Step8 = ({ formData, prevStep, handleFormSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:abaidullah696@gmail.com?subject=Form Submission&body=First Name: ${encodeURIComponent(
      firstName
    )}%0ALast Name: ${encodeURIComponent(
      lastName
    )}%0AEmail: ${encodeURIComponent(email)}%0AContact: ${encodeURIComponent(
      contact
    )}%0AMessage: ${encodeURIComponent(
      message
    )}%0A%0A%0AUser Form Data:%0A${encodeURIComponent(
      JSON.stringify(formData, null, 2)
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <h2>Your Personal Information</h2>
      <p>
        Please fill out your personal details, and we will send you the final
        report.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button onClick={prevStep}>Back</button>
        <button onClick={handleFormSubmit}>Submit Form</button>
      </form>
    </div>
  );
};

export default Step8;
