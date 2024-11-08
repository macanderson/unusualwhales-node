// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Historical extends APIResource {
  /**
   * Retrieve historical options data for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: HistoricalRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoricalRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<HistoricalRetrieveResponse>;
  retrieve(
    symbol: string,
    query: HistoricalRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoricalRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/historical/${symbol}`, { query, ...options });
  }
}

export interface HistoricalRetrieveResponse {
  data?: Array<HistoricalRetrieveResponse.Data>;

  symbol?: string;
}

export namespace HistoricalRetrieveResponse {
  export interface Data {
    close?: number;

    date?: string;

    expirationDate?: string;

    high?: number;

    low?: number;

    open?: number;

    openInterest?: number;

    optionType?: 'CALL' | 'PUT';

    strikePrice?: number;

    symbol?: string;

    volume?: number;
  }
}

export interface HistoricalRetrieveParams {
  /**
   * End date for the historical data.
   */
  endDate?: string;

  /**
   * Option expiration date to filter the data.
   */
  expiration?: string;

  /**
   * Option type (CALL or PUT).
   */
  optionType?: 'CALL' | 'PUT';

  /**
   * Start date for the historical data.
   */
  startDate?: string;

  /**
   * Option strike price to filter the data.
   */
  strike?: number;
}

export declare namespace Historical {
  export {
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };
}
