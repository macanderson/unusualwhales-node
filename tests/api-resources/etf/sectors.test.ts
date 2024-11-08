// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unusualwhales from 'unusualwhales-node';
import { Response } from 'node-fetch';

const client = new Unusualwhales({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sectors', () => {
  test('retrieve', async () => {
    const responsePromise = client.etf.sectors.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.etf.sectors.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unusualwhales.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.etf.sectors.retrieve(
        { date: '2019-12-27', sector: 'sector' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unusualwhales.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.etf.sectors.list();
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
    await expect(client.etf.sectors.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unusualwhales.NotFoundError,
    );
  });
});
