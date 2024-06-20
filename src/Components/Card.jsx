import React from "react";
import { routes } from "./utils/routes";
import { Link, useLocation } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";
import { actions } from "./utils/actions";

const Card = ({ user }) => {
  const { state, dispatch } = useContextGlobal();
  const location = useLocation();

  return (
    <div className="card">
      <Link to={routes.detail + "/" + user.id}>
        <img src="/images/doctor.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-primary-emphasis fs-5">{user.name}</p>
          <span className="text-secondary fs-6">{user.username}</span>
        </div>
      </Link>
      {location.pathname == "/" && (
        <button
          onClick={() => dispatch({ type: actions.addFav, payload: user })}
          className="btn btn-outline-info"
          style={{ width: "100%", marginBottom: "5px" }}
        >
          ⭐
        </button>
      )}
    </div>
  );
};

export default Card;
