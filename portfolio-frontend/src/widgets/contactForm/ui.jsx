import React, { useState } from "react";
import { post } from "shared/api";
import { Form } from "entities";
import { SuccessForm, ErrorForm, PreloaderForm } from "shared/ui";

const ContactForm = (props) => {
  const [sendStatus, setSendStatus] = useState("");
  const submitForm = (e, data) => {
    e.preventDefault();
    post("https://formspree.io/mpzozave", {
      headers: {
        Accept: "application/json",
      },
      data: {
        email: "zerob.rob@yandex.ru",
        message: data,
      },
      success: () => setSendStatus("success"),
      error: () => setSendStatus("error"),
      before: () => setSendStatus("sending"),
    });
  };

  switch (sendStatus) {
    case "success":
      return <SuccessForm />;
    case "sending":
      return <PreloaderForm />;
    case "error":
      return <ErrorForm />;
    default:
      return <Form handleSubmitForm={submitForm} />;
  }
};

export default ContactForm;
