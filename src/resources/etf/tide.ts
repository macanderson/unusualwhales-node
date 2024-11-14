// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Tide extends APIResource {
  /**
   * Retrieve data showing ETF inflows and outflows.
   */
  retrieve(query?: TideRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<TideRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<TideRetrieveResponse>;
  retrieve(
    query: TideRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TideRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/etf/tide', { query, ...options });
  }
}

export interface TideRetrieveResponse {
  date?: string;

  etfs?: Array<TideRetrieveResponse.Etf>;

  inflows?: number;

  netFlow?: number;

  outflows?: number;
}

export namespace TideRetrieveResponse {
  export interface Etf {
    etfSymbol?: string;

    inflow?: number;

    netFlow?: number;

    outflow?: number;
  }
}

export interface TideRetrieveParams {
  /**
   * Date to filter ETF tide data.
   */
  date?: string;

  /**
   * ETF symbol to filter data.
   */
  etf?: string;
}

export declare namespace Tide {
  export { type TideRetrieveResponse as TideRetrieveResponse, type TideRetrieveParams as TideRetrieveParams };
}
