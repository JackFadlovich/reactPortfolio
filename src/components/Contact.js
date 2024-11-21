import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value) {
      newErrors[name] = `${name} is required.`;
    } else if (name === "email" && !validateEmail(value)) {
      newErrors.email = "Invalid email address.";
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!validateEmail(formData.email)) formErrors.email = "Invalid email address.";
    if (!formData.message) formErrors.message = "Message is required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setEmailStatus("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setEmailStatus("Please correct the errors.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-box">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-box wide">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {emailStatus && <p className="email-status">{emailStatus}</p>}
    </div>
  );
}

export default Contact;
