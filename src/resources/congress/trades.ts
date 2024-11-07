// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Trades extends APIResource {
  /**
   * Retrieve trading data reported by members of Congress.
   */
  list(query?: TradeListParams, options?: Core.RequestOptions): Core.APIPromise<TradeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TradeListResponse>;
  list(
    query: TradeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/congress/trades', { query, ...options });
  }
}

export interface TradeListResponse {
  trades?: Array<TradeListResponse.Trade>;
}

export namespace TradeListResponse {
  export interface Trade {
    amount?: string;

    disclosureDate?: string;

    member?: string;

    symbol?: string;

    transactionDate?: string;

    transactionType?: 'Purchase' | 'Sale' | 'Exchange';
  }
}

export interface TradeListParams {
  /**
   * Date to filter trades.
   */
  date?: string;

  /**
   * Name of the Congress member to filter trades.
   */
  member?: string;

  /**
   * Stock symbol to filter trades.
   */
  symbol?: string;
}

export declare namespace Trades {
  export { type TradeListResponse as TradeListResponse, type TradeListParams as TradeListParams };
}
