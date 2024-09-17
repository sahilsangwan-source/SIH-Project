// MarketTrends.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'chart.js/auto';

export default function MarketTrends() {
  // Dummy data for crops market trends
  const cropPrices = {
    wheat: [200, 210, 220, 215, 230, 240, 250],
    rice: [150, 160, 155, 165, 170, 180, 175],
    maize: [100, 110, 115, 120, 125, 130, 135],
  };

  // Data for Line chart (Price trend)
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Wheat Price',
        data: cropPrices.wheat,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Rice Price',
        data: cropPrices.rice,
        borderColor: 'rgba(54,162,235,1)',
        fill: false,
      },
      {
        label: 'Maize Price',
        data: cropPrices.maize,
        borderColor: 'rgba(255,206,86,1)',
        fill: false,
      },
    ],
  };

  // Data for Bar chart (Current price comparison)
  const barData = {
    labels: ['Wheat', 'Rice', 'Maize'],
    datasets: [
      {
        label: 'Current Price',
        data: [
          cropPrices.wheat[cropPrices.wheat.length - 1], 
          cropPrices.rice[cropPrices.rice.length - 1], 
          cropPrices.maize[cropPrices.maize.length - 1]
        ],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
      },
    ],
  };

  // Data for Pie chart (Market share of different crops)
  const pieData = {
    labels: ['Wheat', 'Rice', 'Maize'],
    datasets: [
      {
        label: 'Market Share',
        data: [45, 35, 20],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
      },
    ],
  };

  return (
    <Container fluid style={{ height: '100vh', overflowY: 'auto' }} className="bg-light py-4">
      <h2 className="text-center mb-4">Current Market Price & Trends of Crops</h2>
      <div style={{ overflowX: 'scroll', paddingBottom: '20px' }}>
        <Row>
          {/* Line Chart - Price Trends */}
          <Col md={6}>
            <h4 className="text-center">Price Trends Over Time</h4>
            <div style={{ height: '400px', maxWidth: '100%' }}>
              <Line data={lineData} />
            </div>
          </Col>

          {/* Bar Chart - Current Price */}
          <Col md={6}>
            <h4 className="text-center">Current Price Comparison</h4>
            <div style={{ height: '400px', maxWidth: '100%' }}>
              <Bar data={barData} />
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ overflowX: 'scroll', paddingTop: '20px' }}>
        <Row>
          {/* Pie Chart - Market Share */}
          <Col md={{ span: 6, offset: 3 }}>
            <h4 className="text-center">Market Share of Different Crops</h4>
            <div style={{ height: '400px', maxWidth: '100%' }}>
              <Pie data={pieData} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}