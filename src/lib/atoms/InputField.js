import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  type,
  placeholder,
  color,
  addClass,
  onChange,
  value,
  onEnter,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${color} min-h-[48px] min-w-[354px] text-[13px] font-Inter font-[400] rounded-[4px] placeholder-[#AEB6D3] border-[#AEB6D3] ${addClass}`}
      {...rest}
      onChange={onChange}
      value={value}
      onKeyDown={onEnter}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  addClass: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  color: "text-[#403F63]",
  addClass: "",
};

export default InputField;
