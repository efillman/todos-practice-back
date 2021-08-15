const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('GET /users non promise', () => {
  test('get all movies from /users', async () => {
    const response = await request.get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(3);
  });
});

describe('GET /users promise', () => {
  test('get all users from /users', async () => {
    await request
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(3);
      });
  });
});
