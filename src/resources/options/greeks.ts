// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Greeks extends APIResource {
  /**
   * Retrieve option greeks data for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: GreekRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreekRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<GreekRetrieveResponse>;
  retrieve(
    symbol: string,
    query: GreekRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreekRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/greeks/${symbol}`, { query, ...options });
  }
}

export interface GreekRetrieveResponse {
  data?: Array<GreekRetrieveResponse.Data>;

  symbol?: string;
}

export namespace GreekRetrieveResponse {
  export interface Data {
    delta?: number;

    expirationDate?: string;

    gamma?: number;

    optionType?: 'CALL' | 'PUT';

    rho?: number;

    strikePrice?: number;

    symbol?: string;

    theta?: number;

    vega?: number;
  }
}

export interface GreekRetrieveParams {
  /**
   * Option expiration date to filter the greeks data.
   */
  expiration?: string;

  /**
   * Option type (CALL or PUT).
   */
  optionType?: 'CALL' | 'PUT';

  /**
   * Option strike price to filter the greeks data.
   */
  strike?: number;
}

export declare namespace Greeks {
  export {
    type GreekRetrieveResponse as GreekRetrieveResponse,
    type GreekRetrieveParams as GreekRetrieveParams,
  };
}
