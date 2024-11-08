// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unusualwhales from 'unusualwhales-node';
import { Response } from 'node-fetch';

const client = new Unusualwhales({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource historical', () => {
  test('retrieve', async () => {
    const responsePromise = client.optionsFlows.historical.retrieve('symbol');
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
    await expect(
      client.optionsFlows.historical.retrieve('symbol', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unusualwhales.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.optionsFlows.historical.retrieve(
        'symbol',
        {
          endDate: '2019-12-27',
          expiration: '2019-12-27',
          optionType: 'CALL',
          startDate: '2019-12-27',
          strike: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unusualwhales.NotFoundError);
  });
});
