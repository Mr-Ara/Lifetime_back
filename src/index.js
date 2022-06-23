import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "./components/app";
import SignupLogin from "./components/SignupLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signuplogin" element={<SignupLogin />}></Route>
    </Routes>
  </Router>
);
