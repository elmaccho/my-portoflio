import React, { useState } from "react";
import "./FilterProjects.css";

import MainBtn from "../MainBtn/MainBtn";

export default function FilterProjects({ handleFilter }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleClick = (filter) => {
    setActiveFilter(filter);
    handleFilter(filter);
  };

  return (
    <div className="bar">
      <div className="bar-title">
        <h2>Projekty</h2>
      </div>
      <div className="bar-navigation">
        <MainBtn
          content="Wszystko"
          dark="true"
          onClickEvent={() => handleClick("all")}
        />
        <MainBtn
          content="Web Development"
          dark="true"
          onClickEvent={() => handleClick("web")}
        />
        <MainBtn
          content="UI/UX Design"
          dark="true"
          onClickEvent={() => handleClick("uiux")}
        />
      </div>
    </div>
  );
}
