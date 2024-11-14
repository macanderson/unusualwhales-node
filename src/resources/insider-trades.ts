// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class InsiderTrades extends APIResource {
  /**
   * Retrieve data on insider buys and sells.
   */
  retrieve(
    query?: InsiderTradeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsiderTradeRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<InsiderTradeRetrieveResponse>;
  retrieve(
    query: InsiderTradeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsiderTradeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/insider/trades', { query, ...options });
  }
}

export interface InsiderTradeRetrieveResponse {
  trades?: Array<InsiderTradeRetrieveResponse.Trade>;
}

export namespace InsiderTradeRetrieveResponse {
  export interface Trade {
    date?: string;

    insider?: string;

    sharesTraded?: number;

    symbol?: string;

    tradePrice?: number;

    transactionType?: 'Buy' | 'Sell';
  }
}

export interface InsiderTradeRetrieveParams {
  /**
   * Date to filter insider trades.
   */
  date?: string;

  /**
   * Name of the insider.
   */
  insider?: string;

  /**
   * Stock symbol to filter insider trades.
   */
  symbol?: string;

  /**
   * Type of transaction (Buy or Sell).
   */
  transactionType?: 'Buy' | 'Sell';
}

export declare namespace InsiderTrades {
  export {
    type InsiderTradeRetrieveResponse as InsiderTradeRetrieveResponse,
    type InsiderTradeRetrieveParams as InsiderTradeRetrieveParams,
  };
}
