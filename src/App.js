import "./App.css";
import Homepage from "./components/home-page/home-page";
import "./App.css";
import Header from "./components/header/header";
import History from "./components/history/history";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer"

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
      <Footer />
    </div>
  );
}

export default App;
