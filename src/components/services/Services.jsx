import React from "react"
import { Title, ServicesItems } from '../../components'
import "../../styled/services.scss"

const Services = React.memo(({title}) => {

  return (
    <section className="section">
      <div className="container">
        <Title title={title} />
        <ServicesItems />
      </div>
    </section>
  )
});

export default Services