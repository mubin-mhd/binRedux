import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type,
  onClick,
  label,
  color,
  bgColor,
  size,
  addClass,
  ...rest
}) => {
  const buttonComp = () => {
    switch (size) {
      case "normal":
        return (
          <button
            type={type}
            onClick={onClick}
            className={`${color} ${bgColor} ${addClass} py-[8px] px-[10px] min-w-[118px] min-h-[32px] text-center text-[13px] rounded-[4px] font-Inter hover:bg-blue-500 focus:ring-2 focus:ring-blue-400`}
            {...rest}
          >
            {label}
          </button>
        );
        break;
      default:
    }
  };
  return buttonComp();
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
  addClass: PropTypes.string,
};

Button.defaultProps = {
  type: "submit",
  onClick: () => {},
  label: "Submit",
  color: "text-white",
  bgColor: "bg-blue-primary",
  size: "normal",
  addClass: "",
};

export default Button;
