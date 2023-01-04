import React from "react";
import PropTypes from "prop-types";

const Chips = ({ label, bgColor, color, addClass }) => {
  return (
    <div
      className={`w-min px-2 h-[24px] font-[500] text-[14px] rounded-md text-center ${bgColor} ${color} ${addClass}`}
    >
      {label}
    </div>
  );
};

Chips.defaultProps = {
  label: "",
  bgColor: "bg-[#E6F3E5]",
  color: "text-[#4EAF51]",
  addClass: "",
};

Chips.propTypes = {
  label: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  addClass: PropTypes.string,
};

export default Chips;
