import React from "react";
import "./MainBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainBtn({
  content = "",
  dark = false,
  icon = null,
  onClickEvent = null,
}) {
  return (
    <button className={`main-btn ${dark ? "dark" : ""}`} onClick={onClickEvent}>
      {content}
      {icon && <FontAwesomeIcon icon={icon} className="faicon"/>}
    </button>
  );
}
