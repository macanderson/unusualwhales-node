// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Flow extends APIResource {
  /**
   * Retrieve options flow data for a specific symbol.
   */
  retrieve(
    symbol: string,
    query?: FlowRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<FlowRetrieveResponse>;
  retrieve(
    symbol: string,
    query: FlowRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/flow/${symbol}`, { query, ...options });
  }

  /**
   * Retrieve options flow data.
   */
  list(query?: FlowListParams, options?: Core.RequestOptions): Core.APIPromise<FlowListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FlowListResponse>;
  list(
    query: FlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/options/flow', { query, ...options });
  }
}

export interface FlowRetrieveResponse {
  data?: Array<FlowRetrieveResponse.Data>;
}

export namespace FlowRetrieveResponse {
  export interface Data {
    expirationDate?: string;

    openInterest?: number;

    optionType?: 'CALL' | 'PUT';

    premium?: number;

    strikePrice?: number;

    symbol?: string;

    timestamp?: string;

    volume?: number;
  }
}

export interface FlowListResponse {
  data?: Array<FlowListResponse.Data>;
}

export namespace FlowListResponse {
  export interface Data {
    expirationDate?: string;

    openInterest?: number;

    optionType?: 'CALL' | 'PUT';

    premium?: number;

    strikePrice?: number;

    symbol?: string;

    timestamp?: string;

    volume?: number;
  }
}

export interface FlowRetrieveParams {
  /**
   * Date to filter the options flow data.
   */
  date?: string;
}

export interface FlowListParams {
  /**
   * Date to filter the options flow data.
   */
  date?: string;

  /**
   * Stock symbol to filter the options flow data.
   */
  symbol?: string;
}

export declare namespace Flow {
  export {
    type FlowRetrieveResponse as FlowRetrieveResponse,
    type FlowListResponse as FlowListResponse,
    type FlowRetrieveParams as FlowRetrieveParams,
    type FlowListParams as FlowListParams,
  };
}
