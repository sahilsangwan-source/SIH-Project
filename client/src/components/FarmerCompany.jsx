// CompanyAnnouncements.js
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const announcements = [
  'Company A announces new farming equipment discounts.',
  'Company B introduces a new seed variety.',
  'Company C offers free workshops on modern farming techniques.'
];

export default function CompanyAnnouncements() {
  return (
    <Container id="company-announcements" className="my-5">
      <h2>Company Announcements</h2>
      <ListGroup>
        {announcements.map((announcement, index) => (
          <ListGroup.Item key={index}>{announcement}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}