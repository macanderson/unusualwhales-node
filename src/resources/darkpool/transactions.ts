// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Transactions extends APIResource {
  /**
   * Retrieve dark pool transactions for a specific symbol.
   */
  retrieve(
    symbol: string,
    query?: TransactionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  retrieve(
    symbol: string,
    query: TransactionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/darkpool/transactions/${symbol}`, { query, ...options });
  }

  /**
   * Retrieve dark pool transactions data.
   */
  list(query?: TransactionListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/darkpool/transactions', { query, ...options });
  }
}

export type TransactionRetrieveResponse = unknown;

export type TransactionListResponse = unknown;

export interface TransactionRetrieveParams {
  /**
   * Date to filter dark pool transactions.
   */
  date?: string;
}

export interface TransactionListParams {
  /**
   * Date to filter dark pool transactions.
   */
  date?: string;

  /**
   * Stock symbol to filter dark pool transactions.
   */
  symbol?: string;
}

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };
}
