import "./App.css";

import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";

import City from "./assets/city.jpg";
import { useState } from "react";

function App() {
  const name = "Murilo";

  const [userName] = useState("Murilo");
  return (
    <div>
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
