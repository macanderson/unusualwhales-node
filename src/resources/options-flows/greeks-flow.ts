// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class GreeksFlow extends APIResource {
  /**
   * Retrieve options flow data with Greek calculations.
   */
  retrieve(
    query?: GreeksFlowRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreeksFlowRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<GreeksFlowRetrieveResponse>;
  retrieve(
    query: GreeksFlowRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreeksFlowRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/options/greekflow', { query, ...options });
  }
}

export interface GreeksFlowRetrieveResponse {
  data?: Array<GreeksFlowRetrieveResponse.Data>;
}

export namespace GreeksFlowRetrieveResponse {
  export interface Data {
    delta?: number;

    expirationDate?: string;

    gamma?: number;

    optionType?: 'CALL' | 'PUT';

    premium?: number;

    rho?: number;

    strikePrice?: number;

    symbol?: string;

    theta?: number;

    timestamp?: string;

    vega?: number;
  }
}

export interface GreeksFlowRetrieveParams {
  /**
   * Date to filter the Greek flow data.
   */
  date?: string;

  /**
   * Maximum delta value.
   */
  maxDelta?: number;

  /**
   * Minimum delta value.
   */
  minDelta?: number;

  /**
   * Stock symbol to filter the Greek flow data.
   */
  symbol?: string;
}

export declare namespace GreeksFlow {
  export {
    type GreeksFlowRetrieveResponse as GreeksFlowRetrieveResponse,
    type GreeksFlowRetrieveParams as GreeksFlowRetrieveParams,
  };
}
