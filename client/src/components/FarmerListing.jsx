import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stateOptions, districtData } from './state-district'; // Assuming you have state-district mappings
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FarmerListing() {
    const [farmerData, setFarmerData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');
    const [uniqueCrops, setUniqueCrops] = useState([]);

    // Fetch farmer data from the API
    useEffect(() => {
        axios.get('https://retoolapi.dev/PibE2E/farmerdata')
            .then((res) => {
                setFarmerData(res.data);
                setFilteredData(res.data);
                // Extract unique crop values from the data
                const crops = [...new Set(res.data.map(item => item.crop))];
                setUniqueCrops(crops);
            });
    }, []);

    // Handle state change
    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setSelectedDistrict(''); // Reset district when state changes
        filterData(state, '', selectedCrop);
    };

    // Handle district change
    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        filterData(selectedState, district, selectedCrop);
    };

    // Handle crop change
    const handleCropChange = (e) => {
        const crop = e.target.value;
        setSelectedCrop(crop);
        filterData(selectedState, selectedDistrict, crop);
    };

    // Filter data based on state, district, and crop
    const filterData = (state, district, crop) => {
        let filtered = farmerData;

        if (state) {
            filtered = filtered.filter(farmer => farmer.state === state);
        }

        if (district) {
            filtered = filtered.filter(farmer => farmer.district === district);
        }

        if (crop) {
            filtered = filtered.filter(farmer => farmer.crop === crop);
        }

        setFilteredData(filtered);
    };

    return (
        <div className="container mt-5">
            <h2>Farmer Listing</h2>

            {/* State Filter */}
            <div className="form-group">
                <label htmlFor="stateSelect">Select State:</label>
                <select className="form-control" id="stateSelect" value={selectedState} onChange={handleStateChange}>
                    <option value="">All States</option>
                    {stateOptions.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {/* District Filter */}
            <div className="form-group">
                <label htmlFor="districtSelect">Select District:</label>
                <select className="form-control" id="districtSelect" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
                    <option value="">All Districts</option>
                    {selectedState && districtData[selectedState]?.map((district, index) => (
                        <option key={index} value={district}>{district}</option>
                    ))}
                </select>
            </div>

            {/* Crop Filter */}
            <div className="form-group">
                <label htmlFor="cropSelect">Select Crop:</label>
                <select className="form-control" id="cropSelect" value={selectedCrop} onChange={handleCropChange}>
                    <option value="">All Crops</option>
                    {uniqueCrops.map((crop, index) => (
                        <option key={index} value={crop}>{crop}</option>
                    ))}
                </select>
            </div>

            {/* Bootstrap Table */}
            <table className="table table-bordered mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>Farmer Name</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Crop</th>
                        <th>Quality</th>
                        <th>Variety</th>
                        <th>Price / KG</th>
                        <th>Harvest Date</th>
                        <th>Quantity in KG</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((farmer) => (
                            <tr key={farmer.id}>
                                <td>{farmer.farmerName}</td>
                                <td>{farmer.state}</td>
                                <td>{farmer.district}</td>
                                <td>{farmer.crop}</td>
                                <td>{farmer.quality}</td>
                                <td>{farmer.variety}</td>
                                <td>{farmer.pricePerKG}</td>
                                <td>{farmer.harvestDate}</td>
                                <td>{farmer.quantityInKG}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
