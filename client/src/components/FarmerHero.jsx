// HeroSection.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Default image URL for demonstration
const defaultHeroImage = 'https://img.freepik.com/free-photo/young-wheat-green-field_1268-29146.jpg';

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${defaultHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center',
      }}
    >
      <Container>
        <h1>Welcome to Your Farming Hub</h1>
        <p>
          Discover the latest in agricultural technology, connect with buyers and sellers, and stay informed with the latest news and updates.
        </p>
        <Button variant="primary" href="#register-crop">Register Your Crop</Button>
      </Container>
    </div>
  );
}