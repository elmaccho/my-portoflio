import React from "react";
import "./MainBtn.css";

export default function MainBtn({ content = "", dark = false }) {
  return(
    <button className={`main-btn ${dark ? 'dark' : ''}`}>{content}</button>
  );
}
