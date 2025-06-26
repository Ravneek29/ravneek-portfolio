import React, { useState } from "react";
import { send } from "emailjs-com";
import styles from "./ContactStyles.module.css"; // ✅ Import your styles

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      "service_l2o0icn",
      "template_wtlo4h4",
      toSend,
      "user_7xPYeLEzShYLjclM2UQN1"
    )
      .then(() => {
        alert("Message sent!");
        e.target.reset();
      })
      .catch((error) => alert(error));
  };
  
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Name"
            required
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="reply_to"
            id="email"
            placeholder="Email"
            required
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}
