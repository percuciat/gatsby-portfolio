import React from "react"
import axios from "axios"
import { Layout, Title, SEO, Form } from "../components"
import "../styled/contacts.scss"

const Contact = () => {
  const [sendStatus, setSendStatus ] = React.useState(false);
  const submitForm = (e, data) => {
    e.preventDefault();
    axios.interceptors.request.use((config) => {
      setSendStatus('sending');
      return config;
    });
    axios({
      url: 'https://formspree.io/mpzozave',
      method: 'post',
      headers: {
        'Accept': 'application/json'
      },
      data: {
        email: 'zerob.rob@yandex.ru',
        message: data
      }
    }).then((response) => {
      return setSendStatus(true)
    }).catch( (error) => {
      return setSendStatus('error');
    });
  };

  return (
    <Layout>
      <SEO title="Контакты" />
      <section className="contact">
        <div className="container">
          <Title title="Контакты" />
          <div className="contact__form">
            <Form handleSubmitForm={submitForm}
                  answer={sendStatus}/>
          </div>
        </div>
      </section>
    </Layout>
  )
};

export default Contact
