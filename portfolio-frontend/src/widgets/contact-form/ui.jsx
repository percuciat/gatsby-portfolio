import React from "react";
import { FieldsForm } from "./components";
import { post } from "../../shared/api";
import { SuccessForm, ErrorForm, PreloaderForm } from "../../shared/ui";
import "./contact-form.scss";

const ContactForm = ({ isRu }) => {
  const [sendStatus, setSendStatus] = React.useState("");
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
      return <FieldsForm handleSubmitForm={submitForm} isRu={isRu} />;
  }
};

export default ContactForm;
