import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [showData, setShowData] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) => {
    setShowData(false);
    setData({ ...data, name: event.target.value });
  };

  const handleEmail = (event) => {
    setShowData(false);
    setData({ ...data, email: event.target.value });
  };

  const isValidEmail = (em) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(em);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      !data.name.startsWith(" ") &&
      data.name.trim().length >= 5 &&
      isValidEmail(data.email.trim())
    ) {
      setShowData(true);
      setError(false);
    } else {
      setShowData(false);
      setError(true);
    }
  };

  return (
    <div>
      <form className="mb-3" onSubmit={handleSumbit}>
        <label className="form-label">Nombre</label>
        <input
          className="form-control"
          type="text"
          value={data.name}
          onChange={handleName}
        />
        <label className="form-label">Email</label>
        <input
          className="marginBottom form-control"
          type="text"
          value={data.email}
          onChange={handleEmail}
        />
        <button className="btn btn-success">Enviar</button>
      </form>

      <div>
        {showData && (
          <p style={{ color: "#28B463", textAlign: "center" }}>
            Gracias {data.name}, te contactaremos cuando antes vía mail
          </p>
        )}
        {error && (
          <p style={{ color: "#C70039", textAlign: "center" }}>
            Por favor verifique su información nuevamente
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
