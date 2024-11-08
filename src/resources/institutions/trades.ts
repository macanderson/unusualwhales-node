// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Trades extends APIResource {
  /**
   * Retrieve trading data reported by institutions.
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
    return this._client.get('/institutions/trades', { query, ...options });
  }
}

export interface TradeRetrieveResponse {
  trades?: Array<TradeRetrieveResponse.Trade>;
}

export namespace TradeRetrieveResponse {
  export interface Trade {
    amount?: string;

    institution?: string;

    reportDate?: string;

    symbol?: string;

    transactionDate?: string;

    transactionType?: 'Buy' | 'Sell';
  }
}

export interface TradeRetrieveParams {
  /**
   * Date to filter trades.
   */
  date?: string;

  /**
   * Name of the institution to filter trades.
   */
  institution?: string;

  /**
   * Stock symbol to filter trades.
   */
  symbol?: string;
}

export declare namespace Trades {
  export {
    type TradeRetrieveResponse as TradeRetrieveResponse,
    type TradeRetrieveParams as TradeRetrieveParams,
  };
}
