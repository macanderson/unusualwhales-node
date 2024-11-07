// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Quote extends APIResource {
  /**
   * Retrieve real-time quote data for a specific stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<QuoteRetrieveResponse> {
    return this._client.get(`/stocks/quote/${symbol}`, options);
  }
}

export interface QuoteRetrieveResponse {
  change?: number;

  changePercent?: number;

  high?: number;

  low?: number;

  open?: number;

  previousClose?: number;

  price?: number;

  symbol?: string;

  timestamp?: string;

  volume?: number;
}

export declare namespace Quote {
  export { type QuoteRetrieveResponse as QuoteRetrieveResponse };
}
