import React from "react";
import PropTypes from "prop-types";

const ErrorView = (errorMsg) => (
  <div className="section center">
    <h1>Error</h1>
    <p className="bullet-text">{errorMsg}</p>
  </div>
);

export default ErrorView;

ErrorView.displayName = "ErrorView";

ErrorView.defaultProps = {
  errorMsg: "Sorry, there was an error. Please, refresh the page",
};

ErrorView.propTypes = {
  error: PropTypes.string,
};
