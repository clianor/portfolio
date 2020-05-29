import React from "react";

export default ({ url, lang, grade, proj_list }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={url} alt={lang} />
        </div>
        <div className="flip-card-back">
          <p>
            <b>{lang}</b>
          </p>
          <p>
            <b>[{grade}]</b>
          </p>
          {proj_list.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
