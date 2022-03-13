import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import routesConfig from "../lib/routesConfig";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          {Object.values(routesConfig).map((config) => (
            <Route path={config.path} element={<config.element />} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
