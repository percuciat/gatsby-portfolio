import React from "react"

const Title = React.memo(({ title }) => {

  return (
    <div className="section-title">
      <h2 className="section-title__text">{title || "default title"}</h2>
    </div>
  )
});

export default Title