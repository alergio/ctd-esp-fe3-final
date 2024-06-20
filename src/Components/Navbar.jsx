import React from "react";
import { routes } from "./utils/routes";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";
import { themes } from "./utils/themes";
import { actions } from "./utils/actions";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: state.theme.backgroundSecondary,
        color: state.theme.font,
      }}
      className="navbar sticky-top"
    >
      <div className="container-fluid">
        <span style={{ fontSize: 20 }}>DH Odonto</span>
        <Link to={routes.home}>
          <span className="nav-link active" aria-current="page">
            Home
          </span>
        </Link>
        <Link to={routes.contact}>
          <span className="nav-link">Contacto</span>
        </Link>
        <Link to={routes.favs}>
          <span className="nav-link">Favs</span>
        </Link>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: actions.toggleTheme })}
        >
          {state.theme === themes.light ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i class="fa-solid fa-sun"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
