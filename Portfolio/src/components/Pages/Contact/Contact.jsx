import React, { useState } from 'react';
import "../Contact/contact.css"; // Ensure this path is correct

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        
          <div className="columns is-centered">
            <div className="column is-6-desktop">
              <div className="card">
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
                          className="input"
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="email">Email</label>
                      <div className="control">
                        <input
                          className="input"
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="message">Message</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="control">
                      <button className="button is-primary" type="submit">Send</button>
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
