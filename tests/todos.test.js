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

describe('GET /todos non promise', () => {
  test('get all movies from /todos', async () => {
    const response = await request.get('/todos');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(6);
  });
});

describe('GET /todos promise', () => {
  test('get all users from /todos', async () => {
    await request
      .get('/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(6);
      });
  });
});

afterAll(() => initializeCityDatabase());
