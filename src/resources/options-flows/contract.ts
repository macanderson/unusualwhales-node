// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Contract extends APIResource {
  /**
   * Retrieve detailed data for a specific option contract identified by its option
   * symbol.
   */
  retrieve(optionSymbol: string, options?: Core.RequestOptions): Core.APIPromise<ContractRetrieveResponse> {
    return this._client.get(`/options/contract/${optionSymbol}`, options);
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

export declare namespace Contract {
  export { type ContractRetrieveResponse as ContractRetrieveResponse };
}
