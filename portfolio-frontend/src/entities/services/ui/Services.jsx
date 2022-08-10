import React from "react";
import ServicesItems from "./components/ServicesItems";
import { Title } from "shared/ui/";

const Services = (props) => {
  const titleRu = "Что умею";
  const titleEng = "Skills";
  return (
    <>
      <Title title={titleRu} title_eng={titleEng} />
      <ServicesItems />
    </>
  );
};

export default React.memo(Services);
