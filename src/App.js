import "./App.css";
import Homepage from "./components/home-page/home-page";
import "./App.css";
import Header from "./components/header/header";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppTable from "./components/app-table/app-table";
import History from "./components/history/history";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
