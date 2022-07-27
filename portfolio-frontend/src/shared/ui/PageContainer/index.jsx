import React from "react";

const PageContainer = ({ children, isRu, isGrey }) => {
  return (
    <section className={`${isGrey ? "bg-grey" : ""} section`}>
      <div className="container">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </div>
    </section>
  );
};

export default PageContainer;
