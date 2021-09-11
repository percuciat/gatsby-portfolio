import React from "react";

const Title = ({isRu, title, title_eng }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__text">{isRu ? title || "default title" : title_eng}</h2>
    </div>
  )
};

export default React.memo(Title);