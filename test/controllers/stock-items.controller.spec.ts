import {Application} from 'express';
import * as request from 'supertest';

import { buildApiServer } from '../helper';
import { ApiServer } from '../../src/server';

describe('stock-item.controller', () => {

  let app: Application;
  beforeEach(async () => {
    const ApiServer = buildApiServer();

    app = await ApiServer.getApp();
  }
  )};

  test('canary verifies test infratstructure', () => {
    expect(true).toEqual(true);
  });

  describe('given GET /stock-items', () => {
    describe('when service is successful', () => {
      test('then return 200 status', async () => {
        return request(app).get('/stock-items').expect(200);
      });

      test('then should return an empty array', async () => {
        return request(app).get('/stock-items').expect([]);
      });
    });
  });


