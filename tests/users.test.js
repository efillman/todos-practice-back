const supertest = require('supertest');
const dotenv = require('dotenv');
const knex = require('knex');
const app = require('../app');
const knexConfig = require('../knexfile');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
const knexWorker = knex(knexConfig[envs.NODE_ENV]);

const initializeCityDatabase = async () => knexWorker.migrate.rollback([], true)
  .then(() => knexWorker.migrate.latest())
  .then(() => knexWorker.seed.run());

const request = supertest(app);

beforeEach(() => initializeCityDatabase());

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

afterAll(() => initializeCityDatabase());
