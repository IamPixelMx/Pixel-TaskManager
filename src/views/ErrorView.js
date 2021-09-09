import React from "react";
import PropTypes from "prop-types";
import { Layout } from "components";

const ErrorView = (errorMsg) => (
  <Layout>
    <h1>Error</h1>
    <p className="bullet-text">{errorMsg}</p>
  </Layout>
);

export default ErrorView;

ErrorView.displayName = "ErrorView";

ErrorView.defaultProps = {
  errorMsg: "Sorry, there was an error. Please, try again",
};

ErrorView.propTypes = {
  error: PropTypes.string,
};
