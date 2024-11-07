// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Chain extends APIResource {
  /**
   * Retrieve the option chain data for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: ChainRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChainRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<ChainRetrieveResponse>;
  retrieve(
    symbol: string,
    query: ChainRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChainRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/chain/${symbol}`, { query, ...options });
  }
}

export interface ChainRetrieveResponse {
  expirationDate?: string;

  options?: Array<ChainRetrieveResponse.Option>;

  symbol?: string;
}

export namespace ChainRetrieveResponse {
  export interface Option {
    ask?: number;

    bid?: number;

    expirationDate?: string;

    lastPrice?: number;

    openInterest?: number;

    optionType?: 'CALL' | 'PUT';

    strikePrice?: number;

    symbol?: string;

    volume?: number;
  }
}

export interface ChainRetrieveParams {
  /**
   * Option expiration date to filter the option chain data.
   */
  expiration?: string;
}

export declare namespace Chain {
  export {
    type ChainRetrieveResponse as ChainRetrieveResponse,
    type ChainRetrieveParams as ChainRetrieveParams,
  };
}
