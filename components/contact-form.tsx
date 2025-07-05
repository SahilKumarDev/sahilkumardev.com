"use client";

import { useForm, ValidationError } from "@formspree/react";
import { PiPaperPlane } from "react-icons/pi";
import Thanks from "./ui/thanks";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnnqdqgr");
  if (state.succeeded) {
    return <Thanks />;
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-wrapper">
        <input
          className="form-input"
          id="fullname"
          type="fullname"
          name="fullname"
          placeholder="Full name"
          required
        />
        <ValidationError
          prefix="FullName"
          field="fullname"
          errors={state.errors}
        />
        <input
          required
          className="form-input"
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <textarea
        required
        className="form-input"
        id="message"
        name="message"
        placeholder="Your Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className="form-btn" type="submit" disabled={state.submitting}>
        <PiPaperPlane />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
