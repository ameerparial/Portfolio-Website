import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const icons = [
    {
      className: "fa fa-phone",
      label: "Phone",
      value: "+923173465664",
    },
    {
      className: "fa fa-envelope",
      label: "Email",
      value: "khuhroameerhamza4@gmail.com",
    },
    {
      className: "fa fa-map-marker",
      label: "Address",
      value: "Sindh, Pakistan",
    },
  ];
  return (
    <>
      <div className="col-md-5 form shadow-lg">
        <Form />
      </div>
      <div className="col-md-6 offset-1 m-auto">
        <ShowData icons={icons} />
      </div>
    </>
  );
};

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Your message is sent Successfully, Thanks.");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
          setLoading(false);
        }
      );
  }

  return (
    <>
      <h1>Send Message</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Your Name"
          className="mb-3 w-100"
          name="from_name"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="mb-3 w-100"
          name="from_email"
          required
        />
        <textarea
          placeholder="Type your message here"
          className="mb-3 w-100"
          name="from_message"
          required
        />

        <input
          type="submit"
          value={`${loading ? "loading..." : "Submit"}`}
          disabled={loading}
        />
      </form>
    </>
  );
};

const ShowData = ({ icons }) => {
  return icons?.map((icon, key) => (
    <div className="d-flex mb-3" key={key}>
      <div className="p-3 m-2 icon-holder">
        <i className={icon.className} style={{ color: "#18ca87" }}></i>
      </div>
      <div className="label d-flex flex-column justify-content-center">
        <span style={{ color: "#8b8b94" }}>{icon.label}</span>
        <span>{icon.value}</span>
      </div>
    </div>
  ));
};

export default Contact;
