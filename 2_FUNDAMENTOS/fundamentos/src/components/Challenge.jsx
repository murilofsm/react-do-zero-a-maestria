const Challenge = () => {
  const handleSubmit = (e) => {
    const numero1 = Number(document.getElementById("n1").value);
    const numero2 = Number(document.getElementById("n2").value);

    const soma = numero1 + numero2;
};
  return (
    <div>
      <p>Número 1: </p>
      <input type="text" name="n1" id="n1" />
      <br />
      <p>Número 2:</p>
      <input type="text" name="n2" id="n2" />
      <br />
      <button onClick={handleSubmit}>Somar</button>
    </div>
  );
};

export default Challenge;
