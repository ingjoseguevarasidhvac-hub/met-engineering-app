import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{fontFamily:"Arial", padding:"40px"}}>
      <h1>MET Engineering</h1>
      <h2>Sistema Financiero</h2>

      <p>Bienvenido al sistema financiero de MET Engineering.</p>

      <h3>Funciones que iremos agregando:</h3>

      <ul>
        <li>Control de ingresos</li>
        <li>Control de gastos</li>
        <li>Control de facturas</li>
        <li>Control por proyecto</li>
        <li>Dashboard financiero</li>
      </ul>

      <p>
        Esta será tu plataforma para administrar las finanzas de tu empresa de
        ingeniería.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
