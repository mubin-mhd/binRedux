import React from "react";
import PropTypes from "prop-types";

const Text = ({ label, size, color, ...rest }) => {
  return (
    <p
      className={`${color} ${
        size === "large"
          ? "text-[20px] font-[600]"
          : size === "normal"
          ? "text-[13px] font-[300]"
          : "text-[12px] font-[400]"
      } font-Inter`}
      {...rest}
    >
      {label}
    </p>
  );
};

Text.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  label: "Label",
  color: "text-[#403F63]",
  size: "normal",
};

export default Text;
