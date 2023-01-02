import React from "react";
import PropTypes from "prop-types";
import backIcon from "../../assets/icons/back.png";

const BackButton = ({ label, onClick, addClass }) => {
  return (
    <button className={`flex items-center ${addClass}`} onClick={onClick}>
      <img src={backIcon} className="mr-2" />
      <span className="font-Inter font-[600] text-blue-primary">{label}</span>
    </button>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  addClass: PropTypes.string,
};

BackButton.defaultProps = {
  label: "Back",
  onClick: () => {},
  addClass: "",
};

export default BackButton;
