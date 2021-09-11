import React from "react";
import { Title, ServicesItems } from '../../components';
import "./services.scss";

const Services =  ({isRu}) => {
  const titleRu = "Что умею";
  const titleEng = "Skills";
  return (
    <>
        <Title title={titleRu}
               isRu={isRu}
               title_eng={titleEng}/>
        <ServicesItems isRu={isRu}/>
     </>
  )
};

export default React.memo(Services);