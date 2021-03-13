import { useState } from "react";
import "./App.css";
import { denormalizedCart } from "./cart";

function App() {
  const [userInput, setUserInput] = useState("");
  const [productInput, setProductInput] = useState("");

  const filteredArray = denormalizedCart.filter(
    (item) =>
      item.product.name.toUpperCase().includes(productInput.toUpperCase()) &&
      item.user.name.toUpperCase().includes(userInput.toUpperCase())
  );

  return (
    <div>
      <div>
        <label>User</label>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Product</label>
        <input
          onChange={(e) => {
            setProductInput(e.target.value);
          }}
        ></input>
      </div>
      <div>
        {filteredArray.map((item) => (
          <p key={item.id}>
            id: {item.id} utente: {item.user.name} product: {item.product.name}{" "}
            category: {item.product.categoria.name} quantity: {item.quantity}{" "}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
