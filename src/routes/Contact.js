import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Typed from "react-typed";
import ProjectModal from "../components/ProjectModal";

function Contact() {
  const [state, handleSubmit] = useForm("xqknnrqa");
  console.log(state);
  if (state.succeeded) {
    <ProjectModal text="thanks, I'll be in touch asap" />;
  }
  return (
    <div className="form-container">
      <Typed
        className="contact-header"
        strings={["contact"]}
        typeSpeed={100}
        showCursor={false}
      />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            id="name"
            className="form-control"
            type="name"
            name="name"
            placeholder="Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="mb-3">
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-3">
          <textarea
            id="message"
            className="form-control"
            type="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="d-grid gap-2 col-sm-12 mx-auto">
          <button
            className="btn submit-button"
            type="submit"
            disabled={state.submitting}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
