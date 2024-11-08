// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Trades extends APIResource {
  /**
   * Retrieve data on insider buys and sells.
   */
  retrieve(
    query?: TradeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<TradeRetrieveResponse>;
  retrieve(
    query: TradeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/insider/trades', { query, ...options });
  }
}

export interface TradeRetrieveResponse {
  trades?: Array<TradeRetrieveResponse.Trade>;
}

export namespace TradeRetrieveResponse {
  export interface Trade {
    date?: string;

    insider?: string;

    sharesTraded?: number;

    symbol?: string;

    tradePrice?: number;

    transactionType?: 'Buy' | 'Sell';
  }
}

export interface TradeRetrieveParams {
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

export declare namespace Trades {
  export {
    type TradeRetrieveResponse as TradeRetrieveResponse,
    type TradeRetrieveParams as TradeRetrieveParams,
  };
}
