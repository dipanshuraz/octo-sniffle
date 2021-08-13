import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../../theme";

const TextItem = styled.span`
  display: block;
  position: relative;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
`;

export const Typography = ({
  bold,
  color,
  margin,
  size,
  text,
  tag,
  align,
  fontFamily,
  fontWeight,
  lineHeight,
}) => (
  <TextItem
    as={tag}
    size={size}
    color={color}
    margin={margin}
    align={align}
    bold={bold}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
  >
    {text}
  </TextItem>
);

Typography.defaultProps = {
  bold: false,
  tag: "span",
  size: "12px",
  color: colors.black,
  margin: "10px",
  text: "lorem ipsum",
  align: "",
  fontFamily: "Roboto",
  fontWeight: "",
  lineHeight: "20px",
};

Typography.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  tag: PropTypes.string,
  align: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};
