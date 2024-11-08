// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Price extends APIResource {
  /**
   * Retrieve the current price for a stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<PriceRetrieveResponse> {
    return this._client.get(`/stocks/price/${symbol}`, options);
  }
}

export interface PriceRetrieveResponse {
  price?: number;

  symbol?: string;

  timestamp?: string;
}

export declare namespace Price {
  export { type PriceRetrieveResponse as PriceRetrieveResponse };
}
