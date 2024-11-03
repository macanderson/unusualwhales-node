// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Stocks extends APIResource {
  /**
   * Retrieve the current price for a stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<StockRetrieveResponse> {
    return this._client.get(`/stocks/price/${symbol}`, options);
  }
}

export interface StockRetrieveResponse {
  price?: number;

  symbol?: string;

  timestamp?: string;
}

export declare namespace Stocks {
  export { type StockRetrieveResponse as StockRetrieveResponse };
}
