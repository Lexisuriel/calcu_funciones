import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [option, setOption] = useState("factorial");
  const [result, setResult] = useState(null);
  const calculateResult = () => {
    let n = parseInt(number);
    if (isNaN(n) || n < 0) {
      setResult("Invalid Input");
      return;
    }
    if (option === "factorial") {
      let fact = 1;
      for (let i = 1; i <= n;fact *= i, i++);
      setResult(fact);
    } else if (option === "pares") {
      let pares = [];
      for (let i = 1; i <= n; i++) if (i % 2 === 0) pares.push(i);
      setResult(pares.join(", "));
    } else if (option === "serie") {
      let serie = [];
      let a = 1, b = 2;
      while (a <= n) {
        serie.push(a);
        let temp = a + b;
        a = b;
        b = temp;
      }
      setResult(serie.join(", "));
    } else if (option === "invertir") {
      setResult(n.toString().split("").reverse().join(""));
    }
  };








  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Calculadora Interactiva</h1>
      <div className="mb-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control mb-3"
          placeholder="Introduce un número"
        />

        <div className="mb-3">
          <label className="form-label">Opciones:</label>
          <div>
            {[
              { label: "Factorial", value: "factorial" },
              { label: "Pares", value: "pares" },
              { label: "Serie", value: "serie" },
              { label: "Invertir", value: "invertir" },
            ].map((item) => (
              <div key={item.value} className="form-check">
                <input
                  type="radio"
                  name="option"
                  value={item.value}
                  checked={option === item.value}
                  onChange={(e) => setOption(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={calculateResult}
          className="btn btn-primary w-100"
        >
          Calcular
        </button>
      </div>

      {result !== null && (
        <div className="alert alert-secondary mt-3" role="alert">
          <strong>Resultado:</strong> {result}
        </div>
      )}
    </div>
  );
}