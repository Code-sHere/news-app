import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div
      className="loader-wrapper"
      style={{
        "--bg": "#1e1f26",
        "--primary1": "#5c9cff",
        "--primary2": "#8fb6ff",
        "--fg-t": "rgba(255,255,255,0.5)",
        "--trans-dur": "0.3s",
      }}
      aria-label="Loading"
    >
      <div className="pl">
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />
        <div className="pl__dot" />

        <div className="pl__text">Loading…</div>
      </div>
    </div>
  );
};

export default Loader;
