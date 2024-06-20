import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
