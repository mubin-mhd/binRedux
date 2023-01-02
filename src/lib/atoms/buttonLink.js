import React from "react";
import PropTypes from "prop-types";

const ButtonLink = ({ label, onClick, addClass }) => {
  return (
    <button
      onClick={onClick}
      className={`font-Inter font-[400] text-[12px] text-end text-[#575DFB] ${addClass}`}
    >
      {label}
    </button>
  );
};

ButtonLink.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  addClass: PropTypes.string,
};

ButtonLink.defaultProps = {
  label: "Submit",
  onClick: () => {},
  addClass: "",
};

export default ButtonLink;
