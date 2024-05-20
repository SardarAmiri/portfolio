import "./App.css";
import Home from "./Home";
import AboutPage from "./AboutPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
