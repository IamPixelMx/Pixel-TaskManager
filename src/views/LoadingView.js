import React from "react";
import PropTypes from "prop-types";

const LoadingView = ({ text = "...loading" }) => (

    <div className="section">
      <p className="bullet-text text-capitlize">{text}</p>
    </div>

);

export default LoadingView;

LoadingView.displayName = "LoadingView";

LoadingView.propTypes = {
  text: PropTypes.string,
};
