import React from "react";
import PropTypes from "prop-types";
import { initialRoutes } from 'router';
import { useStore } from "store";
import { LoadingView, ErrorView } from "views";
import { Link } from "components"

const Layout = ({ children }) => {
  const {
    state: { loading, error, errorMsg },
  } = useStore();

  return (
    <React.Fragment>
      <nav>
        <Link to={initialRoutes.home.path} role="link" aria-name="home-link">
          <img src="/logo.webp" alt="logo" className="logo" />
        </Link>
      </nav>
      <div className="container">{error ? <ErrorView errorMsg={errorMsg} /> : loading ? <LoadingView /> : children}</div>
    </React.Fragment>
  );
};

export default Layout;

Layout.displayName = "Layout";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
