// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Flow extends APIResource {
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
  export { type FlowListResponse as FlowListResponse, type FlowListParams as FlowListParams };
}
