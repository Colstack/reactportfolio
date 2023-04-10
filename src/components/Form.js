import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "44b738b0-22ed-4884-aae2-8d414c9f5bf1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
<motion.form
  action=""
  ref={ref}
  className="contactForm"
  style={{
    transform: `translateX(${inView ? 0 : '-10vw'})`,
    opacity: inView ? 1 : 0,
    transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out'
  }}
  onSubmit={handleSubmit}
>
  <h4 className="contentTitle">Message Me</h4>
  <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
    <input
      type="text"
      className="formControl"
      onChange={handleChange}
      value={formData.name}
      id="contactName"
      name="name"
      placeholder="Name"
      required
    />
  </div>
  <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
    <input
      type="email"
      className="formControl"
      onChange={handleChange}
      value={formData.email}
      id="contactEmail"
      name="email"
      placeholder="Email"
      required
    />
  </div>
  <div className="col-12 formGroup">
    <input
      type="text"
      className="formControl"
      onChange={handleChange}
      value={formData.subject}
      id="contactSubject"
      name="subject"
      placeholder="Subject"
      required
    />
  </div>
  <div className="col-12 formGroup">
    <textarea
      className="formControl"
      onChange={handleChange}
      value={formData.message}
      name="message"
      id="contactMessage"
      rows="5"
      placeholder="Message"
      required
    ></textarea>
  </div>
  <div className="col-12 formGroup formSubmit">
    <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
  </div>
</motion.form>
  );
};

export default Form;