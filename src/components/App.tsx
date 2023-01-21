import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [person, setPerson] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCode("");
    setName("");
    setPrice("");
    setPerson("");
  };

  return (
    <main className="App">
      <header>Quote Generator</header>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Product Code..."
          required
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product Name..."
          required
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price / UOM..."
          required
        />
        <input
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          placeholder="Enter Your Name..."
          required
        />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default App;
