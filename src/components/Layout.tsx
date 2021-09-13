import React from "react";
import { initialRoutes } from 'router';
import { useStore } from "store";
import { LoadingView, ErrorView } from "views";
import { Link } from "components"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { loading, error, errorMsg },
  } = useStore();

  return (
    <React.Fragment>
      <nav>
        <Link to={initialRoutes.home.path}>
          <img src="/logo.webp" alt="logo" className="pointer"/>
        </Link>
      </nav>
      <div className="container">{error ? <ErrorView errorMsg={errorMsg} /> : loading ? <LoadingView text= "Loading..." /> : children}</div>
    </React.Fragment>
  );
};

export default Layout;

Layout.displayName = "Layout";