import React from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9m29wl",
        "template_2uugwdm",
        e.target,
        "Js0lOZkqRrfcwqrt9"
      )
      .then(
        (result) => {
          alert(
            "Thank you! Email sent. I will get back to you as soon as possible."
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-body">
        <div className="contact-title">
          <h3><u>E-mail Me</u></h3>
        </div>

        <div className="form-container">
          <div className="contact-form">
            <form className="email-form" onSubmit={sendEmail}>
              <input
                className="form-input"
                type="text"
                name="from_name"
                placeholder="Name"
              />

              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
              />

              <textarea
                name="message"
                placeholder="Message"
                cols="30"
                rows="8"
              />
              <br></br>
              <input className="send-btn" type="submit" value="Send" />
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
