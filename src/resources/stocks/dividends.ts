// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Dividends extends APIResource {
  /**
   * Retrieve dividend history for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: DividendRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DividendRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<DividendRetrieveResponse>;
  retrieve(
    symbol: string,
    query: DividendRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DividendRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/stocks/dividends/${symbol}`, { query, ...options });
  }
}

export interface DividendRetrieveResponse {
  dividends?: Array<DividendRetrieveResponse.Dividend>;

  symbol?: string;
}

export namespace DividendRetrieveResponse {
  export interface Dividend {
    amount?: number;

    declarationDate?: string;

    exDividendDate?: string;

    paymentDate?: string;

    recordDate?: string;
  }
}

export interface DividendRetrieveParams {
  /**
   * End date for the dividend data.
   */
  endDate?: string;

  /**
   * Start date for the dividend data.
   */
  startDate?: string;
}

export declare namespace Dividends {
  export {
    type DividendRetrieveResponse as DividendRetrieveResponse,
    type DividendRetrieveParams as DividendRetrieveParams,
  };
}
