import React from "react";
import PropTypes from "prop-types";
import { Layout } from "components";

const LoadingView = ({ text = "...loading" }) => (
  <Layout>
    <div className="section">
      <p className="bullet-text text-capitlize">{text}</p>
    </div>
  </Layout>
);

export default LoadingView;

LoadingView.displayName = "LoadingView";

LoadingView.propTypes = {
  text: PropTypes.string,
};
