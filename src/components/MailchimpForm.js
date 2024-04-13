import React, { useState } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Form = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const submit = () => {
    const EMAIL = email;
    setEmail("");
    return email && email.indexOf("@") > -1 && onValidated({ EMAIL });
  }

  return (
    <div id="mailchimp-form">
      <div className="form-field">
        <input
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          type="email"
          placeholder="your email"
        />
        <label className="p-small" htmlFor="email">email</label>
      </div>
      <button id="submit" onClick={submit}>SUBMIT</button>
      <div id="message">
        {status === "sending" && <p>Sending...</p>}
        {status === "error" && <p className="error" dangerouslySetInnerHTML={{ __html: message }} />}
        {status === "success" && <p className="success" dangerouslySetInnerHTML={{ __html: message }} />}
      </div>
    </div>
  );
};

function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_MAILING_LIST_URL;

  return (
    <React.Fragment>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Form
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </React.Fragment>
  )
}

export default MailchimpForm
