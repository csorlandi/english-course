import request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import app from '../src/app';
import createConnection from '../src/database';

let connection: Connection;

describe('Example test', () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection');

    await connection.query('DROP TABLE IF EXISTS migrations');

    await connection.runMigrations();
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be ok', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
  });
});
