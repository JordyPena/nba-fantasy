import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Card from "./components/Card/Card";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState({});
  return (
    <div className="App">
      <Header />
      <Form setPlayer={setPlayer} />
      <Card player={player} />
      <Footer />
    </div>
  );
}

export default App;
