import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../Components/utils/api";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const userApiUrl = apiUrl + "/" + params.id;

  const [user, setUser] = useState();

  useEffect(() => {
    axios(userApiUrl).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <>
      {user && (
        <>
          <h1 style={{ marginTop: 20 }}>Detail Dentist {user.name}</h1>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Sitio web</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Detail;
