// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class InsiderTrades extends APIResource {
  /**
   * Retrieve data on insider buys and sells.
   */
  list(
    query?: InsiderTradeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsiderTradeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InsiderTradeListResponse>;
  list(
    query: InsiderTradeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsiderTradeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/insider/trades', { query, ...options });
  }
}

export interface InsiderTradeListResponse {
  trades?: Array<InsiderTradeListResponse.Trade>;
}

export namespace InsiderTradeListResponse {
  export interface Trade {
    date?: string;

    insider?: string;

    sharesTraded?: number;

    symbol?: string;

    tradePrice?: number;

    transactionType?: 'Buy' | 'Sell';
  }
}

export interface InsiderTradeListParams {
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
    type InsiderTradeListResponse as InsiderTradeListResponse,
    type InsiderTradeListParams as InsiderTradeListParams,
  };
}
