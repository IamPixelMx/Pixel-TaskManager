import React from "react";

const LoadingView = ({ text = "...loading" } : {text : string} ) => (
  <div className="section center">
    <p className="bullet-text text-capitlize">{text}</p>
  </div>
);

export default LoadingView;

LoadingView.displayName = "LoadingView";
