import React from "react";
import PropTypes from "prop-types";
import imgAvatar from "../../assets/images/avatar.png";

const Avatar = ({ image }) => {
  return <img src={image} className="w-[55px] h-[55px]" />;
};

Avatar.propTypes = {
  image: PropTypes.string,
};

Avatar.defaultProps = {
  image: imgAvatar,
};

export default Avatar;
