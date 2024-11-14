// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OptionChains extends APIResource {
  /**
   * Retrieve a list of option contracts based on specified filters.
   */
  list(
    query: OptionChainListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OptionChainListResponse> {
    return this._client.get('/options/contracts', { query, ...options });
  }
}

export interface OptionChainListResponse {
  contracts?: Array<OptionChainListResponse.Contract>;
}

export namespace OptionChainListResponse {
  export interface Contract {
    ask?: number;

    bid?: number;

    expirationDate?: string;

    lastPrice?: number;

    openInterest?: number;

    optionSymbol?: string;

    optionType?: 'CALL' | 'PUT';

    strikePrice?: number;

    symbol?: string;

    volume?: number;
  }
}

export interface OptionChainListParams {
  /**
   * Stock symbol to filter option contracts.
   */
  symbol: string;

  /**
   * Option expiration date to filter contracts.
   */
  expiration?: string;

  /**
   * Option type (CALL or PUT) to filter contracts.
   */
  optionType?: 'CALL' | 'PUT';

  /**
   * Option strike price to filter contracts.
   */
  strike?: number;
}

export declare namespace OptionChains {
  export {
    type OptionChainListResponse as OptionChainListResponse,
    type OptionChainListParams as OptionChainListParams,
  };
}
