import React from "react";

const ErrorView = ({ errorMsg = "Sorry, there was an error. Please, refresh the page" }: { errorMsg: string }) => (
  <div className="section center">
    <h1>Error</h1>
    <p className="bullet-text">{errorMsg}</p>
  </div>
);

export default ErrorView;

ErrorView.displayName = "ErrorView";
