import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stateOptions, districtData } from './state-district'; // Assuming you have state-district mappings
import 'bootstrap/dist/css/bootstrap.min.css';
import toast from 'react-hot-toast';
const crops = [
    'Wheat', 'Rice', 'Maize', 'Barley', 'Sorghum', 'Millets', 'Oats', 'Jowar', 'Bajra', 
    'Sugarcane', 'Cotton', 'Soybean', 'Groundnut', 'Sunflower', 'Rapeseed', 'Mustard', 
    'Pulses', 'Chickpeas', 'Lentils', 'Kidney Beans', 'Peas', 'Paddy', 'Tea', 'Coffee', 
    'Tobacco', 'Oil Palm', 'Apples', 'Oranges', 'Bananas', 'Mangoes', 'Grapes', 'Pineapples',
    'Papayas', 'Guavas', 'Lychees', 'Pomegranates', 'Avocados', 'Kiwis', 'Plums', 'Peaches',
    'Cherries', 'Apricots', 'Dates', 'Avocados', 'Strawberries', 'Blueberries', 'Raspberries'
];

export default function RegisterCrop() {
    const [farmerData, setFarmerData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5); // Number of items to show initially
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');

    const [formData, setFormData] = useState({
        farmerName: '',
        state: '',
        district: '',
        crop: '',
        quality: '',
        variety: '',
        pricePerKG: '',
        harvestDate: '',
        quantityInKG: ''
    });

    // Fetch farmer data from the API
    useEffect(() => {
        axios.get('https://retoolapi.dev/PibE2E/farmerdata')
            .then((res) => {
                const sortedData = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setFarmerData(sortedData);
                setFilteredData(sortedData.slice(0, visibleCount));
            });
    }, [visibleCount]);


    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://retoolapi.dev/PibE2E/farmerdata', formData)
            .then(response => {
                // Update the local state and clear form
                setFarmerData(prevData => [response.data, ...prevData]);
                setFilteredData(prevData => [response.data, ...prevData].slice(0, visibleCount));
                setFormData({
                    farmerName: '',
                    state: '',
                    district: '',
                    crop: '',
                    quality: '',
                    variety: '',
                    pricePerKG: '',
                    harvestDate: '',
                    quantityInKG: ''
                });
                toast.success('Farmer added successfully!');
            })
            .catch(error => {
                console.error('There was an error adding the farmer:', error);
                toast.error('Failed to add farmer.');
            });
    };

    // Load more farmers
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    return (
        <div className="container mt-0" style={styles.container}>
            <h3 className="text-center mb-4" style={{fontFamily:"monospace",fontWeight:"200"}}>Add New Crop Listing</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div className="form-group">
                    <label htmlFor="farmerName">Farmer Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="farmerName"
                        name="farmerName"
                        placeholder='Enter Your Name'
                    
                        value={formData.farmerName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <select
                        className="form-control"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select State</option>
                        {stateOptions.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="district">District:</label>
                    <select
                        className="form-control"
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        disabled={!formData.state}
                        required
                    >
                        <option value="">Select District</option>
                        {formData.state && districtData[formData.state]?.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="crop">Crop:</label>
                    <select
                        className="form-control"
                        id="crop"
                        name="crop"
                        value={formData.crop}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Crop</option>
                        {crops.map((crop, index) => (
                            <option key={index} value={crop}>{crop}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="quality">Quality:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="quality"
                        name="quality"
                        value={formData.quality}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="variety">Variety:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="variety"
                        name="variety"
                        value={formData.variety}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pricePerKG">Price / KG:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="pricePerKG"
                        name="pricePerKG"
                        value={formData.pricePerKG}
                        onChange={handleInputChange}
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="harvestDate">Harvest Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="harvestDate"
                        name="harvestDate"
                        value={formData.harvestDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantityInKG">Quantity in KG:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantityInKG"
                        name="quantityInKG"
                        value={formData.quantityInKG}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success" style={{marginBottom:"10px",marginTop:"10px"}}>Add Farmer</button>
            </form>

            {/* Bootstrap Table */}
            <table className="table table-bordered mt-3" style={{width:"60vw"}}>
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

            {/* Load More Button */}
            {farmerData.length > visibleCount && (
                <button className="btn btn-secondary mt-3" onClick={handleLoadMore}>Show More</button>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '100vw',
        margin: 'auto',
        padding: '20px',
        display: 'flex',
        alignItems:'center',
        flexDirection:'column',
        background: "radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)"

    },
    form: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        width: "60vw"
    }
};