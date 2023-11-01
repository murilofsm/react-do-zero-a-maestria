const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Sla</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou !!")}>
          Clique aqui também
        </button>
        <br />
        <button
          onClick={() => {
            console.log("nunca faça isso");
          }}
        >
          Clique aqui, por favor
        </button>
      </div>

      {renderSomething(false)}
    </div>
  );
};

export default Events;
