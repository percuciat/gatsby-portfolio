import React, { useState } from "react";
import { post } from "shared/api";
import { Form } from "entities";
import { SuccessForm, ErrorForm, PreloaderForm } from "shared/ui";

const ContactForm = ({ isRu }) => {
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
      return <SuccessForm isRu={isRu} />;
    case "sending":
      return <PreloaderForm isRu={isRu} />;
    case "error":
      return <ErrorForm isRu={isRu} />;
    default:
      return <Form handleSubmitForm={submitForm} isRu={isRu} />;
  }
};

export default ContactForm;
