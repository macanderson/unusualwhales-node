// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Stocks extends APIResource {
  /**
   * Retrieve seasonality data for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: StockRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StockRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<StockRetrieveResponse>;
  retrieve(
    symbol: string,
    query: StockRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StockRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/seasonality/stocks/${symbol}`, { query, ...options });
  }
}

export interface StockRetrieveResponse {
  seasonalityData?: Array<StockRetrieveResponse.SeasonalityData>;

  symbol?: string;

  /**
   * The time frame of the seasonality data.
   */
  timeFrame?: string;
}

export namespace StockRetrieveResponse {
  export interface SeasonalityData {
    /**
     * Average return during the period.
     */
    averageReturn?: number;

    /**
     * The period identifier (e.g., month or week number).
     */
    period?: string;

    /**
     * Total number of periods analyzed.
     */
    totalPeriods?: number;

    /**
     * Percentage of times the stock had a positive return during the period.
     */
    winRate?: number;
  }
}

export interface StockRetrieveParams {
  /**
   * Time frame for seasonality data (e.g., 'monthly', 'weekly').
   */
  timeFrame?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export declare namespace Stocks {
  export {
    type StockRetrieveResponse as StockRetrieveResponse,
    type StockRetrieveParams as StockRetrieveParams,
  };
}
