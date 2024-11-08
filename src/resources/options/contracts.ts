// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Contracts extends APIResource {
  /**
   * Retrieve detailed data for a specific option contract identified by its option
   * symbol.
   */
  retrieve(optionSymbol: string, options?: Core.RequestOptions): Core.APIPromise<ContractRetrieveResponse> {
    return this._client.get(`/options/contract/${optionSymbol}`, options);
  }

  /**
   * Retrieve a list of option contracts based on specified filters.
   */
  list(query: ContractListParams, options?: Core.RequestOptions): Core.APIPromise<ContractListResponse> {
    return this._client.get('/options/contracts', { query, ...options });
  }
}

export interface ContractRetrieveResponse {
  optionContract?: ContractRetrieveResponse.OptionContract;
}

export namespace ContractRetrieveResponse {
  export interface OptionContract {
    ask?: number;

    bid?: number;

    delta?: number;

    expirationDate?: string;

    gamma?: number;

    impliedVolatility?: number;

    lastPrice?: number;

    openInterest?: number;

    optionSymbol?: string;

    optionType?: 'CALL' | 'PUT';

    rho?: number;

    strikePrice?: number;

    symbol?: string;

    theta?: number;

    vega?: number;

    volume?: number;
  }
}

export interface ContractListResponse {
  contracts?: Array<ContractListResponse.Contract>;
}

export namespace ContractListResponse {
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

export interface ContractListParams {
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

export declare namespace Contracts {
  export {
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractListParams as ContractListParams,
  };
}
