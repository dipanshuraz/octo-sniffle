import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { colors } from "../../../theme";

const BadgeWrapper = styled.div`
  display: inline-block;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: 0.75px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
`;

const BadgeSpan = styled.span`
  padding: ${(props) => props.pd};
  text-align: center;
  font-size: ${(props) => props.size};
`;

/* eslint no-unused-vars : "off" */
export const Badge = ({
  radius,
  bg,
  color,
  onClick,
  size,
  pd,
  borderColor,
  text,
  padding,
}) => (
  <BadgeWrapper
    color={color}
    bg={bg}
    onClick={onClick}
    borderColor={borderColor}
    radius={radius}
    padding={padding}
  >
    <BadgeSpan pd={pd} size={size}>
      {text}
    </BadgeSpan>
  </BadgeWrapper>
);

Badge.defaultProps = {
  onClick: () => {},
  bg: "#ccc",
  color: colors.black,
  size: "12px",
  pd: "10px",
  borderColor: "",
  text: "",
  padding: "0rem",
  radius: "8px",
};

Badge.propTypes = {
  onClick: PropTypes.func,
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  pd: PropTypes.string,
  borderColor: PropTypes.string,
  text: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
};
