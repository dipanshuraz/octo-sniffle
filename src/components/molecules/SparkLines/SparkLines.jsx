import React from "react";
import PropTypes from "prop-types";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const spotColors = {
  "-1": "green",
  0: "black",
  1: "red",
};

export const SparkLinesTrack = ({ data }) => {
  return (
    <Sparklines limit={25} width={100} height={20} margin={5} data={data}>
      <SparklinesLine />
      <SparklinesSpots spotColors={spotColors} />
    </Sparklines>
  );
};

SparkLinesTrack.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
