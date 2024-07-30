import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ProductList from "./components/ProductList";
const App = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    document.title = "React App";
  });
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="  "></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
