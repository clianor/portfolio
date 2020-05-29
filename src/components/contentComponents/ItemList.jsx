import React from "react";
import Item from "./Item";

export default ({ name, items }) => {
  return (
    <React.Fragment>
      <h4>{name}</h4>
      <div className="cards">
        {items.map((item) => (
          <Item
            lang={item.lang}
            url={item.url}
            grade={item.grade}
            proj_list={item.proj_list}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
