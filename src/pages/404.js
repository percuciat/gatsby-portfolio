import React from "react"
import { Layout, SEO } from "../components"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <SEO title="Конечная станция" />
      <div className="error__page">
        <h1 className="error__title">oops, 404 not found</h1>
        <Link to="/" className="btn">
          На главную
        </Link>
      </div>
    </Layout>
  )
};

export default Error
