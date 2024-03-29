import React from 'react';
import * as emailjs from '@emailjs/browser';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      submitted: false,
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // Name
    if (!fields['name']) {
      formIsValid = false;
      // Set error message under Name input
      errors['name'] = 'Please enter a name';
    }
    // Email
    if (!fields['email'] || !this.validateEmail(fields['email'])) {
      formIsValid = false;
      errors['email'] = 'Please enter a valid email';
    }
    // Message
    if (!fields['message']) {
      formIsValid = false;
      errors['message'] = 'Please enter a message';
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  validateEmail = email => {
    return email.match(
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleValidation() ? this.handleSend() : console.log('Form has errors');
  }

  handleSend() {
    const { name, email, message } = this.state.fields;

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        result => {
          this.setState({ submitted: true });
          console.log(result);
          console.log(result.text);
        },
        error => console.log(error)
      );
  }

  render() {
    return (
      <div className='form-container container mobile'>
        {this.state.submitted ? (
          <>
            <h1 className='contact-header contact'>Thanks!</h1>
            <p className='contact'>I'll be in touch with you asap</p>
          </>
        ) : (
          <>
            <h2 className='contact-header'>contact</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='name'
                  name='from_name'
                  onChange={this.handleChange.bind(this, 'name')}
                  placeholder='Name'
                />
                <span className='error-msg'>{this.state.errors['name']}</span>
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='email'
                  name='reply_to'
                  onChange={this.handleChange.bind(this, 'email')}
                  placeholder='Email'
                />
                <span className='error-msg'>{this.state.errors['email']}</span>
              </div>
              <div className='mb-3'>
                <textarea
                  className='form-control'
                  type='message'
                  name='message'
                  onChange={this.handleChange.bind(this, 'message')}
                  placeholder='Message'
                ></textarea>
                <span className='error-msg'>{this.state.errors['message']}</span>
              </div>

              <div className='d-grid d-sm-block'>
                <button
                  className='btn submit-button float-end'
                  type='submit'
                  value='Send'
                  disabled={this.state.submitted}
                >
                  submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default ContactForm;
