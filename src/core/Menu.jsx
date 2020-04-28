import React, { Fragment } from "react";
import "materialize-css";
import { Navbar, NavItem, Icon } from "react-materialize";
import { withRouter, Link } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "orange" };
  } else {
    return { color: "white" };
  }
};

const Menu = ({ history }) => {
  return (
    <Fragment>
      <Navbar
        alignLinks="right"
        className="blue darken-2"
        brand={
          <Link className="brand-logo" to="/">
            Tienda
          </Link>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem>
          <Link to="/" style={isActive(history, "/")}>
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/signup" style={isActive(history, "/signup")}>
            Signup
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/signin" style={isActive(history, "/signin")}>
            Signin
          </Link>
        </NavItem>
      </Navbar>
    </Fragment>
  );
};

export default withRouter(Menu);
