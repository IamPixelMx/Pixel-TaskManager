import React from "react";
import { Link } from "components";
import { initialRoutes } from 'router';

const NotFoundView = () => {

  return (
    <div className="section center">
      <h1>404</h1>
      <p className="bullet-text">Sorry, this page doesn't exist</p>
      <br />
      <br />
      <Link className="btn-link text-uppercase" to={initialRoutes.home.path}>Back to home</Link>
    </div>
  )
}

export default NotFoundView;

NotFoundView.displayName = "NotFoundView";