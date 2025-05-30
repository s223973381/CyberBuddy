process.env.SIGNUP_FILE = 'test_signups.txt'; // Set before importing app

const request = require('supertest');
const app = require('../server');
const fs = require('fs');

describe('CyberBuddy App', () => {
  const testFile = process.env.SIGNUP_FILE;

  afterEach(() => {
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
  });

  test('GET / should return the homepage', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('CyberBuddy');
  });

  test('POST /signup should save user and show thank you', async () => {
    const response = await request(app).post('/signup').send({
      name: 'Alice',
      email: 'alice@example.com'
    });
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Thank you, Alice');

    const fileContent = fs.readFileSync(testFile, 'utf-8');
    expect(fileContent).toContain('Alice, alice@example.com');
  });
});
