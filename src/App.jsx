import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import AcharCollection from "./components/AcharCollection";

import ApplicationForm from "./components/ApplicationForm";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achar-collection" element={<AcharCollection />} />
        
          <Route path="/applicationform" element={<ApplicationForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
