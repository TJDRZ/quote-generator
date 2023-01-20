import React from "react";

function App() {
  return (
    <main className="App">
      <header>Quote Generator</header>
      <form>
        <input placeholder="Enter Product Code" required />
        <input placeholder="Enter Product Name (Optional)" />
        <input placeholder="Enter Price / UOM" required/>
        <input placeholder="Enter Your Name" required/>
        <button>Submit</button>
      </form>
    </main>
  );
}

export default App;
