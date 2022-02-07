import React, { useState } from "react";
import Book from "./Book.js";
import "./styles.css";

export default function App() {
  var genres = {
    HTML: ["Dive into HTML5 4.15/5", "DOM Enlignment  4/5"],
    CSS: ["CSS Secrets 4.55/5", "CSS:The Definitive Guide 4/5"],
    JavaScript: [
      "Eloquent JavaScript  4.15/5",
      "You don't know JavaScript  4.35/5"
    ],
    React: ["Road to React 4.25/5", "Learning React 4.05/5"]
  };
  var [active, setActive] = useState("HTML");

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="books">
          📚
        </span>
        Good Programming books
      </h1>
      <h2>Checkout my favorite books. Select a genre to get started</h2>
      <div className="buttons">
        {Object.keys(genres).map((item) => (
          <button
            key={item}
            onClick={() => {
              setActive(item);
            }}
            style={{ backgroundColor: "gray", padding: "0.8rem" }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {genres[active].map((item) => {
          return (
            <div key={item} style={{ color: "blue" }}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
