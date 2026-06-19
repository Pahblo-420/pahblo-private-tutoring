const request = require('supertest');
const express = require('express');

// Create a dummy Express app for the test
const app = express();
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

describe('Backend Sanity Check', () => {
  it('should return a 200 OK status from the health route', async () => {
    const response = await request(app).get('/api/health');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('API is running');
  });
});