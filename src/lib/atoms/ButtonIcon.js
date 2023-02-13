import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const ButtonIcon = ({ onClick, icon }) => {
  return <button onClick={onClick}>{icon}</button>;
};

ButtonIcon.defaultProps = {
  icon: <HiOutlinePlusSm className="text-lg" />,
  onClick: () => {},
};

export default ButtonIcon;
