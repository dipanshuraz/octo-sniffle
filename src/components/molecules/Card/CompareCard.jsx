import React from "react";
import PropTypes from "prop-types";
import { Typography } from "../../atoms";

export const CompareCard = ({ name, aqi, color, time }) => {
  return (
    <div style={{ background: color }} className="CompareCard frostBox">
      <div className="CompareCard__Badge">
        <Typography
          lineHeight={"36px"}
          text={aqi}
          size={"14px"}
          fontWeight={"500"}
        />
      </div>
      <div>
        <Typography
          lineHeight={"22px"}
          text={name}
          size={"14px"}
          fontWeight={"500"}
        />

        <Typography
          lineHeight={"14px"}
          text={time}
          size={"14px"}
          fontWeight={"500"}
        />
      </div>
    </div>
  );
};

CompareCard.defaultProps = {
  name: "",
  aqi: "",
  color: "",
  time: "",
};

CompareCard.propTypes = {
  name: PropTypes.string,
  aqi: PropTypes.string,
  color: PropTypes.string,
  time: PropTypes.string,
};
