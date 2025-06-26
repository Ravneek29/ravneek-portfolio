import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_l2o0icn','template_wtlo4h4', form.current, 'user_7xPYeLEzShYLjclM2UQN1')
    .then(
      () => {
        setStatus(' Message sent successfully!');
        form.current.reset();

        // 👇 Clear the status after 3 seconds
        setTimeout(() => {
          setStatus('');
        }, 3000);
      },
      (error) => {
        setStatus('Failed to send message. Try again later.');

        // 👇 Clear the status after 3 seconds
        setTimeout(() => {
          setStatus('');
        }, 3000);

        console.error(error.text);
      }
    );
};

  
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>

      {/* ✅ Status message */}
      {status && <p className={styles.statusMessage}>{status}</p>}
    </section>
  );
}

export default Contact;
