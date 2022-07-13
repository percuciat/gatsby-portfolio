import React from "react";
import JobsArticle from "./JobsArticle";

const JobsList = ({ nodes, isRu }) => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="jobs__center">
      <div className="jobs__container">
        {nodes.map((item, index) => {
          return (
            <button
              key={item.strapiId}
              onClick={() => setValue(index)}
              className={`jobs__btn ${index === value ? "active" : ""}`}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <JobsArticle dataInfo={nodes[value]} isRu={isRu} />
    </div>
  );
};

export default JobsList;
