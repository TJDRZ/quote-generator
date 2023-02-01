import React, { useState, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import "../styles/App.css";

function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [fsc, setFSC] = useState("");
  const [person, setPerson] = useState("");
  const [position, setPosition] = useState("Customer Service Representative");
  const [pdf, setPDF] = useState<any>();
  const link = useRef<any>();

  const radioSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (link && link.current) {
      link.current.style.color = "green";
    }
    setPDF(
      <PDFDownloadLink
        document={
          <MyDocument
            code={code}
            name={name}
            price={price}
            person={person}
            position={position}
            fsc={fsc}
          />
        }
        fileName={`${code}-quote.pdf`}
        onClick={pageReset}
      >
        CLICK HERE
      </PDFDownloadLink>
    );
  };

  const pageReset = () => {
    window.location.reload();
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
          value={fsc}
          onChange={(e) => setFSC(e.target.value)}
          placeholder="Enter FSC (Optional)..."
        />
        <input
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          placeholder="Enter Your Name..."
          required
        />
        <fieldset>
          <input
            type="radio"
            name="position"
            value="Customer Service Representative"
            checked={position === "Customer Service Representative"}
            onChange={(e) => radioSelect(e)}
          />
          <label htmlFor="CSR">CSR</label>
          <input
            type="radio"
            name="position"
            value="Customer Service Manager"
            checked={position === "Customer Service Manager"}
            onChange={(e) => radioSelect(e)}
          />
          <label htmlFor="CSR">CSM</label>
          <input
            type="radio"
            name="position"
            value="Sales Manager"
            checked={position === "Sales Manager"}
            onChange={(e) => radioSelect(e)}
          />
          <label htmlFor="CSR">Sales</label>
        </fieldset>
        <button>Submit</button>
      </form>
      <div className="link" ref={link}>
        Download Link Will Appear Here - {pdf}
      </div>
    </main>
  );
}

export default App;
