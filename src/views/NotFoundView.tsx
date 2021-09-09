import React from "react";
import { Link } from "components";
import { initialRoutes } from 'router';

const NotFoundView = () => {

  return (  
  <React.Fragment>
    <h1>404</h1>
    <p className="bullet-text">Sorry, this page doesn't exist</p>
    <Link to={initialRoutes.home.path}>Back to home</Link>
  </React.Fragment>
  )
}

export default NotFoundView;

NotFoundView.displayName = "NotFoundView";