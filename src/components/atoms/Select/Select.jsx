import * as React from "react";
import PropTypes from "prop-types";

export const Select = ({ optionKey, onChange, className, options }) => {
  return (
    <select onChange={onChange} className={`select ${className}`}>
      <option value=""> -- select a city -- </option>
      {options.map((item, index) => {
        return (
          <option key={index} value={item[optionKey]} optionKey={index}>
            {item[optionKey]}
          </option>
        );
      })}
    </select>
  );
};

Select.defaultProps = {
  className: "",
  options: [],
};

Select.propTypes = {
  className: PropTypes.string,
  optionKey: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array),
};
