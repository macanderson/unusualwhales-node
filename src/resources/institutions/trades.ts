// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Trades extends APIResource {
  /**
   * Retrieve trading data reported by institutions.
   */
  list(query?: TradeListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: TradeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/institutions/trades', { query, ...options });
  }
}

export type TradeListResponse = unknown;

export interface TradeListParams {
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
  export { type TradeListResponse as TradeListResponse, type TradeListParams as TradeListParams };
}
