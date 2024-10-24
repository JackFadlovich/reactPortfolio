import React, { useState } from 'react';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import "../styles/App.css";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [emailStatus, setEmailStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value) {
      newErrors[name] = `${name} is required`;
    } else {
      delete newErrors[name];
      if (name === 'email' && !validateEmail(value)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gptl5ay',   // Replace with your EmailJS service ID
      'template_lino2tu',  // Replace with your EmailJS template ID
      e.target,
      'rWWLnww5Wz7FyXcxL'       // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      setEmailStatus('Email sent successfully!');
    }).catch((error) => {
      console.log(error.text);
      setEmailStatus('Failed to send email.');
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!validateEmail(formData.email)) formErrors.email = 'Invalid email address';
    if (!formData.message) formErrors.message = 'Message is required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      sendEmail(e);
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
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
        <button type="submit">Submit</button>
      </form>
      {emailStatus && <p>{emailStatus}</p>}
      <Footer />
    </div>
  );
}

export default Contact;
