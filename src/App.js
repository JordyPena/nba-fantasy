import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Card from "./components/Card/Card";
import Form from "./components/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then((response) => {
        setPlayers(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Header />
      <Form />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
