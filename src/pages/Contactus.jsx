import React from "react";
import ContactForm from "../components/ContactForm";
const Contactus = () => {
  return (
    <div className="contact-us">
      <div className="center-wr">
        <h2>Contact us</h2>
        <div className="contact-us-inner d-flex">
          <div className="contact-form">
            <ContactForm />
          </div>
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14723.756985404874!2d75.91148249999998!3d22.69330545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723195603281!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
