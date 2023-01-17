import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5i2acbd",
      "template_h7t6h4h",
      form.current,
      "5RPmM1MQ7GH1_QBSj"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>alenatokar22@gmail.com</h5>
            <a href="mailto:alenatokar22@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@ITAU007</h5>
            <a href="@ITAU007" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <TiSocialLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Alona Tokar</h5>
            <a
              href="https://www.linkedin.com/in/alona-tokar-817068194/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
