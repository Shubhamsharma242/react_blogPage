import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
// import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*  <React.StrictMode>
   
    <BrowserRouter>
    <App/>
    </BrowserRouter>

  </React.StrictMode> */
  <React.StrictMode>
    <StoreProvider store = {store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
