import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Murilo", "Pedro", "Josias", "mario"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Murilo", age: 19 },
    { id: 2, name: "Kleber", age: 23 },
    { id: 3, name: "Maria", age: 23 },
  ]);

  const deleteHandle = () => {
    const randomNumber = Math.floor(Math.random * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id)
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteHandle}>Delete random user</button>
    </div>
  );
};

export default ListRender;
