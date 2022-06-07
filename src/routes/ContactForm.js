import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typed from "react-typed";
// service Id
// service_h46c297
// My Default Template
// Template ID:template_k7cyyjf

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container container">
      <Typed
        className="contact-header"
        strings={["contact"]}
        typeSpeed={100}
        showCursor={false}
      />
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <input
            id="name"
            className="form-control"
            type="name"
            name="from_name"
            // onChange={handleChange}
            // value={toSend.from_name}
            placeholder="Name"
          />
          {/* <ValidationError prefix="Name" field="name" errors={state.errors} /> */}
        </div>
        <div className="mb-3">
          <input
            id="email"
            className="form-control"
            type="email"
            name="reply_to"
            // onChange={handleChange}
            // value={toSend.email}
            placeholder="Email"
          />
          {/* {renderEmailError("email")} */}
          {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        </div>
        <div className="mb-3">
          <textarea
            id="message"
            className="form-control"
            type="message"
            name="message"
            // onChange={handleChange}
            // value={toSend.message}
            placeholder="Message"
          ></textarea>
          {/* {renderMessageError("message")} */}
          {/* <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          /> */}
        </div>

        <div className="d-grid -2 d-sm-block">
          <button
            className="btn submit-button"
            type="submit"
            value="Send"
            // disabled={state.submitting}
            // onClick={() => validate()}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
