// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unusualwhales from 'unusualwhales';
import { Response } from 'node-fetch';

const client = new Unusualwhales({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource screener', () => {
  test('create', async () => {
    const responsePromise = client.stocks.screener.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.stocks.screener.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.stocks.screener.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unusualwhales.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stocks.screener.list(
        {
          industry: 'industry',
          marketCapMax: 0,
          marketCapMin: 0,
          priceMax: 0,
          priceMin: 0,
          sector: 'sector',
          volumeMax: 0,
          volumeMin: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unusualwhales.NotFoundError);
  });
});
