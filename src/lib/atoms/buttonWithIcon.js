import React from "react";
import PropTypes from "prop-types";

const ButtonWithIcon = ({
  type,
  onClick,
  label,
  color,
  bgColor,
  size,
  icon,
  ...rest
}) => {
  const buttonComp = () => {
    switch (size) {
      case "large":
        return (
          <button
            type={type}
            onClick={onClick}
            className={`${color} ${bgColor} flex flex-row justify-center items-center gap-2 w-full py-4 border-[1.5px] rounded-2xl font-[700] text-[16px]`}
            {...rest}
          >
            <img src={icon} alt={icon} className="w-6 h-6" />
            <span className=" font-bold text-base text-dark-secondary">
              {label}
            </span>
          </button>
        );
        break;
      default:
    }
  };
  return buttonComp();
};

ButtonWithIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
};

ButtonWithIcon.defaultProps = {
  type: "submit",
  onClick: () => {},
  label: "Submit",
  color: "text-[#1C1C1C]",
  bgColor: "bg-transparent",
  size: "large",
};

export default ButtonWithIcon;
