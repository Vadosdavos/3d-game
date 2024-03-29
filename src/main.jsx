import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="container">
      <div className="aim" />
      <Canvas camera={{ fov: 45, position: [0, 5, 0] }} shadows>
        <App />
      </Canvas>
    </div>
  </React.StrictMode>,
);
