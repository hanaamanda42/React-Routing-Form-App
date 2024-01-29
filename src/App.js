// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Replace `Switch` with `Routes`
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {" "}
          {/* Replace `Switch` with `Routes` */}
          <Route path="/form" element={<FormPage />} />{" "}
          {/* Use `element` instead of `component` */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
