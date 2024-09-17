
import Home from "./Home";
import Login from "./components/Register-Login/Login";
import Register from "./components/Register-Login/Register";
import BDashboard from "./BuyerDashboard";
import FDashboard from "./FarmerDashboard";
import SearchCrop from "./components/SearchCrop";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CropBidCard from "./components/CropBidCard";

export default function App() {

  // const dummyData = {
  //   farmerName: 'Rahul Verma',
  //   farmerLocation: 'Punjab, India',
  //   cropQuality: 'Premium',
  //   cropQuantity: 15, // in tons
  //   cropBasePrice: 1800, // price per ton in INR
  //   cropImages: [
  //     'https://example.com/crop1.jpg',
  //     'https://example.com/crop2.jpg',
  //     'https://example.com/crop3.jpg',
  //   ],
  // };

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/farmer-dashboard" element={<FDashboard />} />
        <Route path="/buyer-dashboard" element={<BDashboard/>}/>
        <Route path="/buyer-dashboard/crop-form" element={<SearchCrop/>} />
      </Routes>
    </Router>
  //  <div>
  //     <h2>Crop Bid Card Test</h2>
  //     {/* Render the CropBidCard with dummy data */}
  //     <CropBidCard
  //       farmerName={dummyData.farmerName}
  //       farmerLocation={dummyData.farmerLocation}
  //       cropQuality={dummyData.cropQuality}
  //       cropQuantity={dummyData.cropQuantity}
  //       cropBasePrice={dummyData.cropBasePrice}
  //       cropImages={dummyData.cropImages}
  //     />
  //   </div>
 
  );
}