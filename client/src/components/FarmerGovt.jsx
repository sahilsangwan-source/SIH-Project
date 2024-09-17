// GovtSchemes.js
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dummy data for government schemes
const schemes = [
  { 
    title: 'Scheme 1', 
    description: 'Description of Scheme 1',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    link: '#scheme1'
  },
  { 
    title: 'Scheme 2', 
    description: 'Description of Scheme 2',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    link: '#scheme2'
  },
  { 
    title: 'Scheme 3', 
    description: 'Description of Scheme 3',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    link: '#scheme3'
  }
];

export default function GovtSchemes() {
  return (
    <Container id="govt-schemes" className="my-5">
      <h2 className="text-center mb-4">Government Schemes</h2>
      <Row>
        {schemes.map((scheme, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={scheme.imageUrl} style={{ height: '150px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{scheme.title}</Card.Title>
                <Card.Text style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {scheme.description}
                </Card.Text>
                <Button variant="primary" href={scheme.link}>Apply Now</Button>
                <Button variant="link" href={scheme.link} className="mt-2">Read Full Scheme & Terms</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}