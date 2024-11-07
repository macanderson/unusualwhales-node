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
  ): Core.APIPromise<TransactionRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<TransactionRetrieveResponse>;
  retrieve(
    symbol: string,
    query: TransactionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/darkpool/transactions/${symbol}`, { query, ...options });
  }

  /**
   * Retrieve dark pool transactions data.
   */
  list(
    query?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TransactionListResponse>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/darkpool/transactions', { query, ...options });
  }
}

export interface TransactionRetrieveResponse {
  data?: Array<TransactionRetrieveResponse.Data>;
}

export namespace TransactionRetrieveResponse {
  export interface Data {
    exchange?: string;

    price?: number;

    size?: number;

    symbol?: string;

    timestamp?: string;
  }
}

export interface TransactionListResponse {
  data?: Array<TransactionListResponse.Data>;
}

export namespace TransactionListResponse {
  export interface Data {
    exchange?: string;

    price?: number;

    size?: number;

    symbol?: string;

    timestamp?: string;
  }
}

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
