import React, { useState, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import "../styles/App.css";

function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [person, setPerson] = useState("");
  const [pdf, setPDF] = useState<any>();
  const link = useRef<any>();

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (link && link.current) {
      link.current.style.color = "green";
    }
    setPDF(
      <PDFDownloadLink
        document={
          <MyDocument code={code} name={name} price={price} person={person} />
        }
        fileName="quote.pdf"
      >
        CLICK HERE
      </PDFDownloadLink>
    );
  };

  const downloadReset = () => {
    setCode("");
    setName("");
    setPrice("");
    setPerson("");
    if (link && link.current) {
      link.current.style.color = "red";
    }
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
      <div className="link" ref={link} onClick={downloadReset}>
        Download Link Will Appear Here - {pdf}
      </div>
    </main>
  );
}

export default App;
