import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Murilo");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>IF ternário</h1>
      {name === "Murilo" ? (
        <div>
          <p>Sim o nome é Murilo</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Muo")}>Clica aqui</button>
    </div>
  );
};

export default ConditionalRender;
