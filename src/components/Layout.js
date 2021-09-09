import React from "react";
import PropTypes from "prop-types";
import { useActions } from "store";

const Layout = ({ children }) => {
  const { showAllGroups } = useActions();

  return (
    <React.Fragment>
      <nav>
        <button onClick={showAllGroups} aria-label="home-button">
          <img src="/logo.webp" alt="logo" className="logo" />
        </button>
      </nav>
      <div className="container">{children}</div>
    </React.Fragment>
  );
};

export default Layout;

Layout.displayName = "Layout";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
