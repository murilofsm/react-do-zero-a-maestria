const UserDetails = ({ id, nome, idade, profissao }) => {
  return (
    <>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Idade: {profissao}</p>

      {idade >= 18 ? (
        <p>Você pode ter uma carteira de habilitação</p>
      ) : (
        <p>Você não pode ser habilitado</p>
      )}
    </>
  );
};

export default UserDetails;
