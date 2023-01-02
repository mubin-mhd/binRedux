import React from "react";
import PropTypes from "prop-types";

const InputCode = ({ type, ...rest }) => {
  return (
    <input
      class="m-2 border-b-1 border-blue-primary border-x-0 border-t-0 h-10 w-10 text-center form-control outline-none rounded-none"
      id="first"
      maxlength="1"
      {...rest}
    />
  );
};

InputCode.propTypes = {
  type: PropTypes.string,
  rest: PropTypes.object,
};

InputCode.defaultProps = {
  type: "text",
};

export default InputCode;
