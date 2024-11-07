// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Historical extends APIResource {
  /**
   * Retrieve historical price data for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query: HistoricalRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoricalRetrieveResponse> {
    return this._client.get(`/stocks/historical/${symbol}`, { query, ...options });
  }
}

export interface HistoricalRetrieveResponse {
  data?: Array<HistoricalRetrieveResponse.Data>;

  symbol?: string;
}

export namespace HistoricalRetrieveResponse {
  export interface Data {
    adjustedClose?: number;

    close?: number;

    date?: string;

    high?: number;

    low?: number;

    open?: number;

    volume?: number;
  }
}

export interface HistoricalRetrieveParams {
  /**
   * End date for the historical data.
   */
  endDate: string;

  /**
   * Start date for the historical data.
   */
  startDate: string;

  /**
   * Data interval (e.g., '1d', '1wk', '1mo').
   */
  interval?: '1m' | '5m' | '15m' | '30m' | '1h' | '1d' | '1wk' | '1mo';
}

export declare namespace Historical {
  export {
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };
}
