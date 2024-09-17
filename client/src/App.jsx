
import Home from "./Home";
import Register from "./components/Register-Login/Register";
import Login from "./components/Register-Login/Login";
import FDashboard from "./FarmerDashboard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farmer-dashboard" element={<FDashboard />} />
      </Routes>
    </Router>
  );
}
