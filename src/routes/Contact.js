import React, { useState } from "react";
import { useForm } from "@formspree/react";
import Typed from "react-typed";

function Contact() {
  const [state, handleSubmit] = useForm("xqknnrqa");
  console.log(`state`);
  console.log(state);
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val) => !!val,
    name: (val) => !!val,
  };

  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };

  const renderEmailError = (field) => {
    console.log(fieldErrors[field]);
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };
  const renderMessageError = (field) => {
    console.log(fieldErrors[field]);
    if (fieldErrors[field]) {
      return <p className="errorMsg">Message field can't be blank</p>;
    }
  };
  // useEffect(() => {
  //   // Only perform interactive validation after submit
  //   if (Object.keys(fieldErrors).length > 0) {
  //     validate();
  //   }
  // }, [inputs]);
  /* End new validation ^^^^ */
  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    name: "",
  });

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      // handleSubmit();
      return;
    }
    // handleSubmit();
  };

  if (state.succeeded) {
    return (
      <div className="form-container container">
        <h1 className="contact-header">Thanks!</h1>
        <p>I'll be in touch with you asap.</p>
      </div>
    );
  }
  return (
    <div className="form-container container">
      <Typed
        className="contact-header"
        strings={["contact"]}
        typeSpeed={100}
        showCursor={false}
      />
      <form onSubmit={handleOnSubmit} noValidate>
        <div className="mb-3">
          <input
            id="name"
            className="form-control"
            type="name"
            name="name"
            onChange={handleOnChange}
            value={inputs.name}
            placeholder="Name"
          />
          {/* <ValidationError prefix="Name" field="name" errors={state.errors} /> */}
        </div>
        <div className="mb-3">
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
            placeholder="Email"
          />
          {renderEmailError("email")}
          {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        </div>
        <div className="mb-3">
          <textarea
            id="message"
            className="form-control"
            type="message"
            name="message"
            onChange={handleOnChange}
            value={inputs.message}
            placeholder="Message"
          ></textarea>
          {renderMessageError("message")}
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
            disabled={state.submitting}
            // onClick={() => validate()}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
