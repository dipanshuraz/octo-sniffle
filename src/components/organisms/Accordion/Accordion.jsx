import React, { useState } from "react";

import { Typography } from "../../atoms";

export const Accordion = ({ title, children, color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        style={{ background: color }}
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div className={`Compare__Table__Column frostBox`}>
          <Typography
            lineHeight={"36px"}
            text={title}
            size={"14px"}
            fontWeight={"500"}
          />
        </div>
        <div className="accordion-title-icon">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};
