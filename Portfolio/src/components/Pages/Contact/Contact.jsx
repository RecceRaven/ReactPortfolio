import React, { useState } from 'react';
import "../Contact/contact.css"; // Ensure this path is correct

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'This field is required',
      }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'Please enter a valid email address',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for any errors before submitting
    const isFormValid = Object.values(formData).every(val => val) && 
                         validateEmail(formData.email) &&
                         Object.values(errors).every(err => !err);
    if (!isFormValid) {
      console.log("Form is invalid!");
      return;
    }
    console.log(formData);
  };

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-6-desktop">
            <div className="card" id="contactCard">
              <div className="card-content">
                <h1 className="title">Contact Me</h1>
                <p>
                  I love hearing feedback! Please feel free to write a message to me and I will
                  respond as soon as possible. Great communication is key to a great project!
                  I'm always looking to hear from new clients, and anyone else interested in my services.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label" htmlFor="name">Name</label>
                    <div className="control">
                      <input
                        className={`input ${errors.name ? 'is-danger' : ''}`}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {errors.name && <p className="help is-danger">{errors.name}</p>}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="email">Email</label>
                    <div className="control">
                      <input
                        className={`input ${errors.email ? 'is-danger' : ''}`}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {errors.email && <p className="help is-danger">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="message">Message</label>
                    <div className="control">
                      <textarea
                        className={`textarea ${errors.message ? 'is-danger' : ''}`}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      ></textarea>
                      {errors.message && <p className="help is-danger">{errors.message}</p>}
                    </div>
                  </div>

                  <div className="control">
                    <button className="button is-large" type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
