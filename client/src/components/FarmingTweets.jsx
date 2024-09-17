// FarmingUpdates.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const tweetsAndBlogs = [
  { title: 'New farming technique tweet', content: 'Details about the tweet...' },
  { title: 'Innovative farming blog post', content: 'Details about the blog...' }
];

export default function FarmingUpdates() {
  return (
    <Container id="farming-updates" className="my-5">
      <h2>Latest Farming Methods</h2>
      <ListGroup>
        {tweetsAndBlogs.map((item, index) => (
          <ListGroup.Item key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}