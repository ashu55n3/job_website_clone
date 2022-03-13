import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/common.scss';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
